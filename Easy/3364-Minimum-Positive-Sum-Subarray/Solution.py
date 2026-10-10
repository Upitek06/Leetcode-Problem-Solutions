class Solution:
    def minimumSumSubarray(self, nums: List[int], l: int, r: int) -> int:
        minVal = float('inf')
        for i in range(l, r+1):
            count = 0
            for j in range(i):
                count += nums[j]
            if count > 0:
                minVal = min(minVal, count)
            
            low, high = 0, i
            while high < len(nums):
                count -= nums[low]
                count += nums[high]

                low += 1
                high += 1

                if count > 0:
                    minVal = min(minVal, count)
        if minVal == float('inf'):
            return -1
        return minVal