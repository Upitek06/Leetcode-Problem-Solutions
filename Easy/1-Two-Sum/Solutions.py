class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        cek = {}
        for index, value in enumerate(nums):
            selisih = target - value
            if selisih in cek:
                return [cek[selisih], index]
            cek[value] = index
                