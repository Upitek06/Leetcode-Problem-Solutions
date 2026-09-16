class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        kiri = 0
        for kanan in range(len(nums)):
            if nums[kanan] != 0:
                nums[kiri] = nums[kanan]
                kiri += 1
        
        while kiri < len(nums):
            nums[kiri] = 0
            kiri += 1