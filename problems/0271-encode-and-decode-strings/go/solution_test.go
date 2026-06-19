package solution

import (
	"testing"

	"leetcode-study/harness"
)

func TestSolution(t *testing.T) {
	harness.RunFixture(t, map[string]any{"encode": encode, "decode": decode})
}
