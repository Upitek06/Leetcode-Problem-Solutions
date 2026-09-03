class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        kiri = 0
        kanan = len(numbers)-1
        while kiri < kanan:
            jumlah = numbers[kiri] + numbers[kanan]
            if jumlah == target: return [kiri+1, kanan+1]
            elif jumlah < target: kiri += 1
            else: kanan -= 1
        return []