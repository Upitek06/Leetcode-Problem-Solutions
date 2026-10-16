class Solution:
    def longestSubarray(self, nums: list[int]) -> int:
        l, z, res = 0, 0, 0
        for r in range(len(nums)):
            if nums[r] == 0: z+= 1
            while z > 1:
                if nums[l] == 0: z -= 1
                l += 1
            res = max(res, r - l - z + 1)
        return res - 1 if res == len(nums) else res