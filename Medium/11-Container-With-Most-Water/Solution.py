class Solution:
    def maxArea(self, height: List[int]) -> int:
        kiri = 0
        kanan = len(height)-1
        terbesar = 0
        while kiri < kanan:
            terbesar = max(terbesar, (kanan - kiri) * min(height[kiri], height[kanan]))
            if height[kiri] < height[kanan]:
                kiri += 1
            else:
                kanan -= 1
        return terbesar