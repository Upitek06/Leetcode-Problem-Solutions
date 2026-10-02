class Solution:
    def numSubarraysWithSum(self, nums: list[int], goal: int) -> int:
        return self.solution(nums, goal) - self.solution(nums, goal-1)
        
    def solution(self, nums: list[int], goal: int) -> int:
        kanan, jumlah, hasil = 0, 0, 0
        for i in range(len(nums)):
            jumlah += nums[i]
            while jumlah > goal and kanan <= i:
                jumlah -= nums[kanan]
                kanan += 1
            hasil += i - kanan + 1
        return hasil