def productExceptSelf(nums):
    """Product of Array Except Self — https://leetcode.com/problems/product-of-array-except-self/"""
    n = len(nums)
    res = [1] * n
    prefix = 1
    for i in range(n):
        res[i] = prefix
        prefix *= nums[i]
    suffix = 1
    for i in range(n - 1, -1, -1):
        res[i] *= suffix
        suffix *= nums[i]
    return res
