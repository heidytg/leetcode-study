def twoSum(numbers, target):
    """Two Sum II — https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"""
    left, right = 0, len(numbers) - 1
    while left < right:
        total = numbers[left] + numbers[right]
        if total == target:
            return [left + 1, right + 1]
        if total < target:
            left += 1
        else:
            right -= 1
    return []
