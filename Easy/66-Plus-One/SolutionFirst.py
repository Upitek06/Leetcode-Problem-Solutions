class Solution:
    def plusOne(self, digits: list[int]) -> list[int]:
        numb, res = "", []
        for i in range(len(digits)):
            numb += str(digits[i])
        numb = int(numb) + 1
        for n in str(numb):
            res.append(int(n))
        return res        