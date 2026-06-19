# leetcode-study

Solutions to LeetCode problems in Python, Go, TypeScript (and optionally Kotlin),
organized by problem. Each problem carries a single language-agnostic `tests.json`
fixture (the inputs/expected outputs from the LeetCode statement). **One shared runner
per language auto-discovers every problem and runs its solution against that fixture —
so adding a problem means writing only solution code, not new test files.**

## Layout

```
problems/
├── all.test.ts            # ONE vitest runner: discovers every tests.json + solution.ts
├── test_all.py            # ONE pytest runner: same, for Python
└── NNNN-slug/
    ├── README.md          # statement, signature, approach, Big-O, pattern, interview notes
    ├── tests.json         # shared cases: { function, compare, cases: [{ args, expected }] }
    ├── python/solution.py
    ├── go/                # solution.go + a 4-line solution_test.go that registers the fn
    ├── typescript/solution.ts
    └── kotlin/            # optional (needs Gradle/JUnit)
harness/                   # Go reflection-based shared test harness (RunFixture)
```

How each language avoids per-problem test boilerplate:

- **TypeScript / Python** — the single runner globs `problems/*/tests.json`, loads the
  sibling solution, and runs every case. No per-problem test file at all.
- **Go** — can't auto-discover unexported functions across packages, so each problem
  keeps a 4-line `solution_test.go` that hands its function(s) to `harness.RunFixture`,
  which decodes args by the function's signature via reflection. The scaffold generates
  this file, so you never hand-write it.

## Setup (fresh environment)

Each language is independent — install only the ones you want to run. The repo needs
**Node** (for the TypeScript runner *and* the scaffold/check scripts), and optionally
**Go** and **Python**.

### 1. Clone

```bash
git clone https://github.com/heidytg/leetcode-study.git
cd leetcode-study
```

### 2. Node.js ≥ 18 (required — scaffold, check, and TS tests)

- **Recommended:** a version manager — [`fnm`](https://github.com/Schniz/fnm) or
  [`nvm`](https://github.com/nvm-sh/nvm). With fnm: `fnm install 22 && fnm use 22`.
- **Or** download an LTS installer from <https://nodejs.org>.
- Then install dev dependencies (TypeScript + vitest):

```bash
npm install
node --version   # verify (want v18+; this repo was built on v22)
```

### 3. Go ≥ 1.22 (optional)

- Install from <https://go.dev/dl> (or `winget install GoLang.Go` on Windows,
  `brew install go` on macOS). No third-party modules are needed — the test harness
  (`harness/`) uses only the standard library.

```bash
go version
go test ./...    # runs every Go solution against its tests.json
```

### 4. Python ≥ 3.10 (optional)

- Install from <https://python.org> (or `brew install python`, `apt install python3`).
- Install the one test dependency:

```bash
pip install pytest
python --version
pytest problems  # runs every Python solution against its tests.json
```

> **Windows gotcha:** the built-in `python` / `python3` commands may be *App Execution
> Aliases* that just open the Microsoft Store instead of running Python. If
> `python --version` opens the Store or errors, either install real Python from
> python.org and re-open the terminal, or turn the aliases off under
> *Settings → Apps → Advanced app settings → App execution aliases*. After installing,
> use `py` (the Python launcher) if `python` still isn't found.

### 5. Verify the whole setup

```bash
npm test                       # all TypeScript solutions
go test ./...                  # all Go solutions (if Go installed)
pytest problems                # all Python solutions (if Python installed)
npm run check -- 0001-two-sum  # one problem across every installed language
```

## Commands

### Scaffold a new problem

```bash
# Creates problems/NNNN-slug/ with stubs from templates/
npm run new -- 167 two-sum-ii --fn twoSum --title "Two Sum II" --langs py,go,ts
```

### Run a problem's solutions against its tests.json

`npm run check` runs each language's tests for one problem and prints a per-language
pass/fail summary. Languages whose folder is absent are skipped automatically.

```bash
npm run check -- 0001-two-sum                 # all languages present
npm run check -- 0001-two-sum --langs py,ts   # only a subset
```

### Run a single language directly

The TS/Python runners cover all problems; filter to one by its slug. Go runs per
package.

```bash
# TypeScript (vitest) — filter by the problem slug (the describe name)
npx vitest run -t 0001-two-sum

# Python (pytest) — filter by the problem slug
pytest problems -k 0001-two-sum

# Go (go test) — needs Go installed
go test ./problems/0001-two-sum/go/...
go test ./problems/0001-two-sum/go/... -v
```

### Run everything

```bash
npm test            # every problem, TypeScript (problems/all.test.ts)
pytest problems     # every problem, Python (problems/test_all.py)
go test ./...       # every problem, Go (per-package + harness/)
```

## tests.json format

```json
{
  "function": "twoSum",
  "compare": "exact",
  "cases": [
    { "args": [[2, 7, 11, 15], 9], "expected": [0, 1] }
  ]
}
```

- `args` — positional arguments, applied in order to the solution function.
- `compare` — `"exact"` (default), `"sorted"`/`"set"` for order-independent output
  (compared via a recursive canonical sort), or `"roundtrip"` for codec problems that
  expose `encode`/`decode` (checks `decode(encode(x)) == expected`).
- The function's parameter/return **types** aren't in the JSON; Python/TS read them
  dynamically, and the Go harness decodes args via reflection from the registered
  function's signature.
- **Design problems** (e.g. Min Stack) keep the same fixture shape: the solution exposes
  the class *plus* a thin driver function (e.g. `minStackOps(ops, args)`) that replays
  LeetCode's `[operations]` / `[arguments]` lists and returns the per-op outputs (`null`
  for void ops). `function` points at the driver — no harness special-casing needed.

## Index

### Arrays & Hashing

| #   | Problem                       | Difficulty | Pattern                          | Py | Go | TS | Kt |
|-----|-------------------------------|------------|----------------------------------|----|----|----|----|
| 1   | Two Sum                       | Easy       | Hash map complement lookup       | ✅ | ✅ | ✅ | —  |
| 36  | Valid Sudoku                  | Medium     | Hash sets per row/col/box        | ✅ | ✅ | ✅ | —  |
| 49  | Group Anagrams                | Medium     | Canonical-key bucketing          | ✅ | ✅ | ✅ | —  |
| 128 | Longest Consecutive Sequence  | Medium     | Hash set + start anchoring       | ✅ | ✅ | ✅ | —  |
| 217 | Contains Duplicate            | Easy       | Hash set membership              | ✅ | ✅ | ✅ | —  |
| 238 | Product of Array Except Self  | Medium     | Prefix / suffix products         | ✅ | ✅ | ✅ | —  |
| 242 | Valid Anagram                 | Easy       | Frequency counting               | ✅ | ✅ | ✅ | —  |
| 271 | Encode and Decode Strings     | Medium     | Length-prefixed serialization    | ✅ | ✅ | ✅ | —  |
| 347 | Top K Frequent Elements       | Medium     | Bucket sort by frequency         | ✅ | ✅ | ✅ | —  |

### Two Pointers

| #   | Problem                       | Difficulty | Pattern                          | Py | Go | TS | Kt |
|-----|-------------------------------|------------|----------------------------------|----|----|----|----|
| 11  | Container With Most Water     | Medium     | Greedy two-pointer narrowing     | ✅ | ✅ | ✅ | —  |
| 15  | 3Sum                          | Medium     | Sort + two pointers (reduce-by-1)| ✅ | ✅ | ✅ | —  |
| 42  | Trapping Rain Water           | Hard       | Two pointers + running maxima    | ✅ | ✅ | ✅ | —  |
| 125 | Valid Palindrome              | Easy       | Converging two pointers          | ✅ | ✅ | ✅ | —  |
| 167 | Two Sum II                    | Medium     | Two pointers on sorted array     | ✅ | ✅ | ✅ | —  |

### Sliding Window

| #   | Problem                                      | Difficulty | Pattern                            | Py | Go | TS | Kt |
|-----|----------------------------------------------|------------|------------------------------------|----|----|----|----|
| 3   | Longest Substring Without Repeating Chars    | Medium     | Variable window + last-seen map    | ✅ | ✅ | ✅ | —  |
| 76  | Minimum Window Substring                     | Hard       | Grow/shrink window + have-counter  | ✅ | ✅ | ✅ | —  |
| 121 | Best Time to Buy and Sell Stock              | Easy       | One-pass min tracking              | ✅ | ✅ | ✅ | —  |
| 239 | Sliding Window Maximum                       | Hard       | Monotonic decreasing deque         | ✅ | ✅ | ✅ | —  |
| 424 | Longest Repeating Character Replacement      | Medium     | Window invariant (size − maxFreq)  | ✅ | ✅ | ✅ | —  |
| 567 | Permutation in String                        | Medium     | Fixed window + frequency match     | ✅ | ✅ | ✅ | —  |

### Stack

| #   | Problem                            | Difficulty | Pattern                          | Py | Go | TS | Kt |
|-----|------------------------------------|------------|----------------------------------|----|----|----|----|
| 20  | Valid Parentheses                  | Easy       | Stack for matching pairs         | ✅ | ✅ | ✅ | —  |
| 22  | Generate Parentheses               | Medium     | Backtracking with pruning        | ✅ | ✅ | ✅ | —  |
| 84  | Largest Rectangle in Histogram     | Hard       | Monotonic increasing stack       | ✅ | ✅ | ✅ | —  |
| 150 | Evaluate Reverse Polish Notation   | Medium     | Stack expression evaluation      | ✅ | ✅ | ✅ | —  |
| 155 | Min Stack                          | Medium     | Auxiliary min-so-far stack       | ✅ | ✅ | ✅ | —  |
| 739 | Daily Temperatures                 | Medium     | Monotonic stack (next greater)   | ✅ | ✅ | ✅ | —  |
| 853 | Car Fleet                          | Medium     | Sort + monotonic time sweep      | ✅ | ✅ | ✅ | —  |

### Binary Search

| #   | Problem                                | Difficulty | Pattern                          | Py | Go | TS | Kt |
|-----|----------------------------------------|------------|----------------------------------|----|----|----|----|
| 4   | Median of Two Sorted Arrays            | Hard       | Binary search on a partition     | ✅ | ✅ | ✅ | —  |
| 33  | Search in Rotated Sorted Array         | Medium     | Pick the sorted half             | ✅ | ✅ | ✅ | —  |
| 74  | Search a 2D Matrix                     | Medium     | Search over flattened matrix     | ✅ | ✅ | ✅ | —  |
| 153 | Find Minimum in Rotated Sorted Array   | Medium     | Compare mid to right end         | ✅ | ✅ | ✅ | —  |
| 704 | Binary Search                          | Easy       | Classic binary search            | ✅ | ✅ | ✅ | —  |
| 875 | Koko Eating Bananas                    | Medium     | Binary search on the answer      | ✅ | ✅ | ✅ | —  |
| 981 | Time Based Key-Value Store             | Medium     | Per-key sorted list + bin search | ✅ | ✅ | ✅ | —  |

### Linked List

| #   | Problem                            | Difficulty | Pattern                          | Py | Go | TS | Kt |
|-----|------------------------------------|------------|----------------------------------|----|----|----|----|
| 2   | Add Two Numbers                    | Medium     | Digit-by-digit carry             | ✅ | ✅ | ✅ | —  |
| 19  | Remove Nth Node From End           | Medium     | Fixed-gap two pointers           | ✅ | ✅ | ✅ | —  |
| 21  | Merge Two Sorted Lists             | Easy       | Dummy-head merge                 | ✅ | ✅ | ✅ | —  |
| 23  | Merge k Sorted Lists               | Hard       | Pairwise divide-and-conquer      | ✅ | ✅ | ✅ | —  |
| 25  | Reverse Nodes in k-Group           | Hard       | Group-wise reversal              | ✅ | ✅ | ✅ | —  |
| 138 | Copy List with Random Pointer      | Medium     | Original→clone hash map          | ✅ | ✅ | ✅ | —  |
| 141 | Linked List Cycle                  | Easy       | Floyd's tortoise & hare          | ✅ | ✅ | ✅ | —  |
| 143 | Reorder List                       | Medium     | Mid + reverse + merge            | ✅ | ✅ | ✅ | —  |
| 146 | LRU Cache                          | Medium     | Hash map + recency list          | ✅ | ✅ | ✅ | —  |
| 206 | Reverse Linked List                | Easy       | Iterative pointer reversal       | ✅ | ✅ | ✅ | —  |
| 287 | Find the Duplicate Number          | Medium     | Cycle detection on array         | ✅ | ✅ | ✅ | —  |

### Trees

| #    | Problem                                      | Difficulty | Pattern                          | Py | Go | TS | Kt |
|------|----------------------------------------------|------------|----------------------------------|----|----|----|----|
| 98   | Validate Binary Search Tree                  | Medium     | DFS with (low, high) bounds      | ✅ | ✅ | ✅ | —  |
| 100  | Same Tree                                    | Easy       | Parallel two-tree recursion      | ✅ | ✅ | ✅ | —  |
| 102  | Binary Tree Level Order Traversal            | Medium     | Level-batched BFS                | ✅ | ✅ | ✅ | —  |
| 104  | Maximum Depth of Binary Tree                 | Easy       | Post-order height                | ✅ | ✅ | ✅ | —  |
| 105  | Construct Binary Tree (Preorder + Inorder)   | Medium     | Divide via root + inorder split  | ✅ | ✅ | ✅ | —  |
| 110  | Balanced Binary Tree                         | Easy       | Height with failure sentinel     | ✅ | ✅ | ✅ | —  |
| 124  | Binary Tree Maximum Path Sum                 | Hard       | Post-order gain + global best    | ✅ | ✅ | ✅ | —  |
| 199  | Binary Tree Right Side View                  | Medium     | BFS, last node per level         | ✅ | ✅ | ✅ | —  |
| 226  | Invert Binary Tree                           | Easy       | Recursive child swap             | ✅ | ✅ | ✅ | —  |
| 230  | Kth Smallest Element in a BST                | Medium     | Inorder with early stop          | ✅ | ✅ | ✅ | —  |
| 235  | Lowest Common Ancestor of a BST              | Medium     | BST-guided descent               | ✅ | ✅ | ✅ | —  |
| 297  | Serialize and Deserialize Binary Tree        | Hard       | Preorder + null markers          | ✅ | ✅ | ✅ | —  |
| 543  | Diameter of Binary Tree                      | Easy       | Height + side-effect max         | ✅ | ✅ | ✅ | —  |
| 572  | Subtree of Another Tree                      | Easy       | Same-tree check at each node     | ✅ | ✅ | ✅ | —  |
| 1448 | Count Good Nodes in Binary Tree              | Medium     | DFS carrying path max            | ✅ | ✅ | ✅ | —  |

### Tries

| #   | Problem                                      | Difficulty | Pattern                          | Py | Go | TS | Kt |
|-----|----------------------------------------------|------------|----------------------------------|----|----|----|----|
| 208 | Implement Trie (Prefix Tree)                 | Medium     | Prefix tree                      | ✅ | ✅ | ✅ | —  |
| 211 | Design Add and Search Words Data Structure   | Medium     | Trie + wildcard DFS              | ✅ | ✅ | ✅ | —  |
| 212 | Word Search II                               | Hard       | Trie + grid DFS backtracking     | ✅ | ✅ | ✅ | —  |

### Heap / Priority Queue

| #    | Problem                            | Difficulty | Pattern                          | Py | Go | TS | Kt |
|------|------------------------------------|------------|----------------------------------|----|----|----|----|
| 215  | Kth Largest Element in an Array    | Medium     | Selection (heap/quickselect)     | ✅ | ✅ | ✅ | —  |
| 295  | Find Median from Data Stream       | Hard       | Two balanced heaps               | ✅ | ✅ | ✅ | —  |
| 355  | Design Twitter                     | Medium     | Maps + recency merge             | ✅ | ✅ | ✅ | —  |
| 621  | Task Scheduler                     | Medium     | Greedy frequency counting        | ✅ | ✅ | ✅ | —  |
| 703  | Kth Largest Element in a Stream    | Easy       | Size-k min-heap                  | ✅ | ✅ | ✅ | —  |
| 973  | K Closest Points to Origin         | Medium     | Top-k by distance                | ✅ | ✅ | ✅ | —  |
| 1046 | Last Stone Weight                  | Easy       | Max-heap repeated extraction     | ✅ | ✅ | ✅ | —  |

### Backtracking

| #   | Problem                                | Difficulty | Pattern                          | Py | Go | TS | Kt |
|-----|----------------------------------------|------------|----------------------------------|----|----|----|----|
| 17  | Letter Combinations of a Phone Number  | Medium     | Cartesian-product backtracking   | ✅ | ✅ | ✅ | —  |
| 39  | Combination Sum                        | Medium     | Backtracking with reuse          | ✅ | ✅ | ✅ | —  |
| 40  | Combination Sum II                     | Medium     | Single-use + sorted dedup        | ✅ | ✅ | ✅ | —  |
| 46  | Permutations                           | Medium     | Backtracking over choices        | ✅ | ✅ | ✅ | —  |
| 51  | N-Queens                               | Hard       | Conflict-set backtracking        | ✅ | ✅ | ✅ | —  |
| 78  | Subsets                                | Medium     | Include/exclude backtracking     | ✅ | ✅ | ✅ | —  |
| 79  | Word Search                            | Medium     | Grid DFS backtracking            | ✅ | ✅ | ✅ | —  |
| 90  | Subsets II                             | Medium     | Backtracking + dedup             | ✅ | ✅ | ✅ | —  |
| 131 | Palindrome Partitioning                | Medium     | Prefix-cut backtracking          | ✅ | ✅ | ✅ | —  |

### Graphs

| #   | Problem                                | Difficulty | Pattern                          | Py | Go | TS | Kt |
|-----|----------------------------------------|------------|----------------------------------|----|----|----|----|
| 127 | Word Ladder                            | Hard       | BFS on implicit word graph       | ✅ | ✅ | ✅ | —  |
| 130 | Surrounded Regions                     | Medium     | Border DFS marking               | ✅ | ✅ | ✅ | —  |
| 133 | Clone Graph                            | Medium     | Traversal + original→clone map   | ✅ | ✅ | ✅ | —  |
| 200 | Number of Islands                      | Medium     | Grid flood fill                  | ✅ | ✅ | ✅ | —  |
| 207 | Course Schedule                        | Medium     | Cycle detection / topo           | ✅ | ✅ | ✅ | —  |
| 210 | Course Schedule II                     | Medium     | Topological sort (Kahn)          | ✅ | ✅ | ✅ | —  |
| 261 | Graph Valid Tree                       | Medium     | Union-Find tree check            | ✅ | ✅ | ✅ | —  |
| 286 | Walls and Gates                        | Medium     | Multi-source BFS                 | ✅ | ✅ | ✅ | —  |
| 323 | Number of Connected Components         | Medium     | Union-Find counting              | ✅ | ✅ | ✅ | —  |
| 417 | Pacific Atlantic Water Flow            | Medium     | Reverse border flood             | ✅ | ✅ | ✅ | —  |
| 684 | Redundant Connection                   | Medium     | Union-Find cycle edge            | ✅ | ✅ | ✅ | —  |
| 695 | Max Area of Island                     | Medium     | Flood fill component size        | ✅ | ✅ | ✅ | —  |
| 994 | Rotting Oranges                        | Medium     | Multi-source BFS by level        | ✅ | ✅ | ✅ | —  |

### Advanced Graphs

| #    | Problem                            | Difficulty | Pattern                          | Py | Go | TS | Kt |
|------|------------------------------------|------------|----------------------------------|----|----|----|----|
| 269  | Alien Dictionary                   | Hard       | Constraints → graph → topo sort  | ✅ | ✅ | ✅ | —  |
| 332  | Reconstruct Itinerary              | Hard       | Eulerian path (Hierholzer)       | ✅ | ✅ | ✅ | —  |
| 743  | Network Delay Time                 | Medium     | Dijkstra shortest path           | ✅ | ✅ | ✅ | —  |
| 778  | Swim in Rising Water               | Hard       | Minimax-path Dijkstra            | ✅ | ✅ | ✅ | —  |
| 787  | Cheapest Flights Within K Stops    | Medium     | Bellman-Ford (k+1 rounds)        | ✅ | ✅ | ✅ | —  |
| 1584 | Min Cost to Connect All Points     | Medium     | MST (Prim's)                     | ✅ | ✅ | ✅ | —  |

_Remaining categories (1-D DP, 2-D DP, …) are scaffolded as we go._
