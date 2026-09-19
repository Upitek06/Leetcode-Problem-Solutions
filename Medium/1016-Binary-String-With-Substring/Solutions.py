class Solution:
    def queryString(self, s: str, n: int) -> bool:
        if n > 1023:
            return False
        
        for num in range(n, n//2, -1):
            if bin(num)[2:] not in s: return False
        return True