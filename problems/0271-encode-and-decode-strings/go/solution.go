package solution

import (
	"strconv"
	"strings"
)

// Encode a list of strings to a single string.
func encode(strs []string) string {
	var b strings.Builder
	for _, s := range strs {
		b.WriteString(strconv.Itoa(len(s)))
		b.WriteByte('#')
		b.WriteString(s)
	}
	return b.String()
}

// Decode a single string back to the list of strings.
func decode(s string) []string {
	res := []string{}
	i := 0
	for i < len(s) {
		j := i
		for s[j] != '#' {
			j++
		}
		length, _ := strconv.Atoi(s[i:j])
		start := j + 1
		res = append(res, s[start:start+length])
		i = start + length
	}
	return res
}
