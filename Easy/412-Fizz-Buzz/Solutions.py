class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        hasil = []
        for i in range(1,n+1):
            if i % 3 == 0 and i % 5 == 0: hasil.append("FizzBuzz")
            elif i % 3 == 0: hasil.append("Fizz")
            elif i % 5 == 0: hasil.append("Buzz")
            else: hasil.append(str(i))
        return hasil