# Leetcode 66: Plus One

# Description
You are given a **large integer** represented as an integer array `digits`, where each `digits[i]` is the `ith` digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading `0`'s.

Increment the large integer by one and return `the resulting array of digits`.

## Approach:
I solved this problem by setting the last element of the array to `0` if its `value` is `9`, and then looping from *the end to the beginning*.
1. Iterate from **the end**, then check if the value is **less than 9**. If so, increment the `value + 1` and return the array; if not, **skip** it and set the `value` to `0`.
2. Next, check if the iteration count **reaches** `0`; if so, return an array containing `the value 1 + the current array`.

## Solutions Languange
- Python
- JavaScript

## Complexity
- **Time Complexity**: `O(N)` — We iterate from `n-1` to `0` exactly once.
- **Space Complexity**: `O(1)` — We don't need a new array **storage** **space**
