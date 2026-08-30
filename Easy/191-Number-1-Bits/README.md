# Leetcode 191: Number of 1 Bits

# Description
Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).

## Approach:
As you read this, you might realize that it is binary and we know that binary is base 2.
1. I created a `list` to store the results.
2. I do a loop with the condition as long as the value of `n` is still greater than 0
3. I created a `temporary variable` to store the value of `n` in order to preserve it.
4. Check if `n` modulo 2 equals 1 append to list.
5. Then, update the value of n to n divided by 2 to find the answer and exhaust n.
6. And the last return list.

## Complexity
- **Time Complexity**: `O(N)` — We iterate from `n` to 0 exactly once.
- **Space Complexity**: `O(N)` — We store `n` string elements inside the result list.