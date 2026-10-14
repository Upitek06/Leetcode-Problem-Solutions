class Solution:
    def minimumDifference(self, nums: list[int], k: int) -> int:
        nums.sort()
        res = nums[k - 1] - nums[0]
        for i in range(0, len(nums) - k + 1):
            res = min(res, nums[i + k - 1] - nums[i])
        return res