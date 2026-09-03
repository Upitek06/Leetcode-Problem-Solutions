class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        hasil = {}
        for i in range(len(nums)):
            duplikat = nums[i]
            if duplikat in hasil and abs(i - hasil[duplikat]) <= k: return True
            hasil[duplikat] = i
        return False