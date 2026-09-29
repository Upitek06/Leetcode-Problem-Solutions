class Solution:
    def findLHS(self, nums: list[int]) -> int:
        data, maxLength = {}, 0
        for harmony in nums:
            if harmony in data:
                data[harmony] += 1
            else:
                data[harmony] = 1
        for res in data:
            neighbor = res + 1
            if neighbor in data:
                jumlahkan = data[res] + data[neighbor]
                maxLength = max(maxLength, jumlahkan)
        return maxLength