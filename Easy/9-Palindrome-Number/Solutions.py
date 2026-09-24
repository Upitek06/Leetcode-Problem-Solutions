class Solution:
    def isPalindrome(self, x: int) -> bool:
        strx = str(x)
        j = len(strx)-1
        for i in range(len(strx)):
            if strx[i] != strx[j]: return False
            j -= 1
        return True