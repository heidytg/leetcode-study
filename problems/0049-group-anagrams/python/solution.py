def groupAnagrams(strs):
    """Group Anagrams — https://leetcode.com/problems/group-anagrams/"""
    groups = {}
    for s in strs:
        key = "".join(sorted(s))
        groups.setdefault(key, []).append(s)
    return list(groups.values())
