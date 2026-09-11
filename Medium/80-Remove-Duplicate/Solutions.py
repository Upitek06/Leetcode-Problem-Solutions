class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 0

        for twice in nums:
            if i < 2 or twice > nums[i-2]:
                nums[i] = twice
                i += 1

        return i