"""Single auto-discovering pytest runner.

For every problems/<slug>/tests.json it loads the sibling python/solution.py and runs
each case. No per-problem test file needed.
"""
import importlib.util
import json
from pathlib import Path

import pytest

PROBLEMS = Path(__file__).parent
_modules = {}


def load_solution(py_path):
    key = str(py_path)
    if key not in _modules:
        spec = importlib.util.spec_from_file_location(f"sol_{py_path.parent.parent.name}", py_path)
        module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)
        _modules[key] = module
    return _modules[key]


def canon(value):
    if isinstance(value, list):
        return sorted((canon(v) for v in value), key=lambda e: json.dumps(e, sort_keys=True))
    return value


def normalize(value, mode):
    if mode in ("sorted", "set"):
        return canon(value)
    if mode == "unordered" and isinstance(value, list):
        # sort only the top level; preserve each element's internal order
        return sorted(value, key=lambda e: json.dumps(e, sort_keys=True))
    return value


def discover():
    cases = []
    for tests_file in sorted(PROBLEMS.glob("*/tests.json")):
        solution = tests_file.parent / "python" / "solution.py"
        if not solution.exists():
            continue
        fixture = json.loads(tests_file.read_text())
        for idx, case in enumerate(fixture["cases"]):
            cases.append((tests_file.parent.name, fixture, solution, idx, case))
    return cases


CASES = discover()


@pytest.mark.parametrize(
    "slug,fixture,solution_path,idx,case",
    CASES,
    ids=[f"{c[0]}[{c[3]}]" for c in CASES],
)
def test_problem(slug, fixture, solution_path, idx, case):
    module = load_solution(solution_path)
    mode = fixture.get("compare", "exact")
    if mode == "roundtrip":
        strs = case["args"][0]
        assert module.decode(module.encode(strs)) == case["expected"]
        return
    fn = getattr(module, fixture["function"])
    result = fn(*case["args"])
    assert normalize(result, mode) == normalize(case["expected"], mode)
