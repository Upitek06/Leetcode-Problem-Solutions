class Solution:
    def search(self, nums: List[int], target: int) -> int:
        kiri = 0
        kanan = len(nums)-1
        while kiri <= kanan:
            mid = kiri + (kanan - kiri)//2
            if nums[mid] < target: kiri = mid + 1
            elif nums[mid] > target: kanan = mid - 1
            else: return mid
        return -1
        