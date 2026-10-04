class Solution:
    def findLHS(self, nums: list[int]) -> int:
        nums.sort()
        j, endLength = 0, 0
        for i in range(len(nums)):
            while nums[i] - nums[j] > 1:
                j += 1
            if nums[i] - nums[j] == 1:
                endLength = max(endLength, i-j+1)
        return endLength