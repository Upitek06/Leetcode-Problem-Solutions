class Solution:
    def hammingWeight(self, n: int) -> int:
        hasil = []
        while n > 0:
            temp = n
            if temp % 2 == 1: hasil.append(temp%2)
            n = n // 2
        return len(hasil)