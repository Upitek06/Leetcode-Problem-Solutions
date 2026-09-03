# Leetcode 412: Fizz-Buzz

## Description
Given an integer `n`, return a string array answer (1-indexed) where:
- `answer[i] == "FizzBuzz"` if `i` is divisible by 3 and 5.
- `answer[i] == "Fizz"` if `i` is divisible by 3.
- `answer[i] == "Buzz"` if `i` is divisible by 5.
- `answer[i] == i` (as a string) if none of the above conditions are true.

## Approach
I used a simple loop and standard `if-else` conditions to solve this problem:
1. Create a `list` to save the results.
2. Loop from `i = 1` up to `n`.
3. Check if `i` is divisible by both 3 and 5, then append `"FizzBuzz"` to the list.
4. Check if `i` is divisible by 3, then append `"Fizz"`.
5. Check if `i` is divisible by 5, then append `"Buzz"`.
6. If `i` is not divisible by `3` or `5`, append `i` (converted to string) to the list.
7. Return the final list.

## Solutions Languange
- C++
- Python

## Complexity
- **Time Complexity**: `O(N)` — We iterate from 1 to `n` exactly once.
- **Space Complexity**: `O(N)` — We store `n` string elements inside the result list.
