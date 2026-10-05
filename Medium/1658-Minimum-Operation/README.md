# Leetcode 75: Sort 

## Description
You are given an integer array `nums` and an integer `x`. In one operation, you can either remove the leftmost or the rightmost element from the array `nums` and subtract its value from `x`. Note that this **modifies** the array for future operations.

Return *the **minimum number** of operations to reduce `x` to **exactly** `0` if it is possible, otherwise, return `-1`*.

## Approach
I used an **approach** that calculates the difference between the array **length** and the **value** for each sum that equals the difference.
1. Sum the entire **array**, then subtract the **target** **value** to find the difference.
2. Check whether the sum is **less than** `0`. If so, return `-1`.
3. Initialize the best `value` to -1, then initialize the auxiliary variables `s` and `i` (free naming variable).
4. Iterate through the array, then add the value of `s` to the `value` at the `current` index
5. As long as the value of `s` is **greater** than the difference, subtract the `value` of s from the array `value` at index `i`, then increment `i` by 1
6. Then check if the `value` of the variable `s` is **equal** to the difference; if so, find the **larger** of the best `value` and the `result` of `index j - 1 + 1`.
7. After the loop **finishes**, check if the **best** `value` is less than `0`. If so, return `-1`; otherwise, subtract the best `value` from the array length.

## Solutions Languange
- Python

## Complexity
- **Time Complexity**: `O(N)` — We use **iteration** loop.
- **Space Complexity**: `O(1)` — We change the `value` on each iteration.
