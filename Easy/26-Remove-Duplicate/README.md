# Leetcode 26: Removes Duplicate From Sorted Array
# Description
Given an integer array `nums` sorted in **non-decreasing order**, remove the duplicates **in-place** such that each unique element appears only **once**. The **relative order** of the elements should be kept the **same**.

Consider the number of unique elements in `nums` to be `k`​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements `k`.

The first `k` elements of `nums` should contain the unique numbers in **sorted order**. The remaining elements beyond index `k - 1` can be ignored.

## Approach:
For the `problem` at hand, I am using a **two-sum** approach.
1. Check first, if nums *is empty* return `false`.
2. initialize a variable to `serve` **as a comparator** I prever use i & j.
3. Iterate from `1` to *the length of the array*.
4. Perform a check: if the `value` at array index `j` differs from the `value` at array index `i`, change the `value` at array index `i` to the `value` at index `j` and *increment i*.
5. If the loop is **complete**, return `i`.

## Solutions Languange
- C++

## Complexity
- **Time Complexity**: `O(N)` — We iterate from `0` to `n` exactly once.
- **Space Complexity**: `O(N)` — We store `n` string elements inside the list
