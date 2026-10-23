# Leetcode 75: Sort Colors

## Description
An integer array is called arithmetic if it consists of **at least three elements** and if the difference between any two consecutive elements is the same.

- For example, `[1,3,5,7,9]`, `[7,7,7,7]`, and `[3,-1,-5,-9]` are arithmetic sequences

Given an integer array `nums`, return *the number of arithmetic **subarrays** of nums*.

A **subarray** is a contiguous subsequence of the array

## Approach
I use this approach to check whether the differences after subtraction are equal
1. Initializing the **container** **values**
2. Iterate, starting with an index of 2
- Because we want to check whether the differences between those **three values** are equal?
3. Check to see if the **values** are the same.
4. If they are the same, the **value** of the temporary storage variable is set to the previous `temporary value + 1`.
5. Add the **final** **value** to the temporary value
6. Replace the previous temporary value with the *current **temporary** **value***, then reset the temporary **value** to `0`
7. Return **final value**

## Solutions Languange
- C++
- Python

## Complexity
- **Time Complexity**: `O(N)` — We loop as many times as the length of the array
- **Space Complexity**: `O(1)` — We do not use array storage