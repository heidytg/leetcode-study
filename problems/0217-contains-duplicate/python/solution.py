def containsDuplicate(nums):
    """Contains Duplicate — https://leetcode.com/problems/contains-duplicate/"""
    seen = set()
    for n in nums:
        if n in seen:
            return True
        seen.add(n)
    return False
