class Solution(object):
    def numberOfArithmeticSlices(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n, val, valPrev, count = len(nums), 0, 0, 0
        for i in range(2,n):
            if nums[i-1] - nums[i-2] == nums[i]- nums[i-1]:
                val = valPrev + 1
            count += val
            valPrev = val
            val = 0
        return count