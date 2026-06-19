package solution

import (
	"testing"

	"leetcode-study/harness"
)

// Register this problem's function(s); the shared harness loads ../tests.json and runs
// every case using reflection. For codec problems use:
//   harness.RunFixture(t, map[string]any{"encode": encode, "decode": decode})
func TestSolution(t *testing.T) {
	harness.RunFixture(t, map[string]any{"{{FN}}": {{FN}}})
}
