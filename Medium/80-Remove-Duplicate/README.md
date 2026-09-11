# Leetcode 80: Remove Duplicates from Sorted Array II
## Description
Given an integer array `nums` sorted in **non-decreasing order**, remove some duplicates **in-place** such that each unique element appears **at most twice**. The **relative order** of the elements should be kept the **same**.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the **first part** of the array `nums`. More formally, if there are `k` elements after removing the duplicates, then the first `k` elements of `nums` should hold the final result. It does not matter what you leave beyond the first `k` elements.

Return `k` after placing the final result in the first `k` slots of `nums`.

Do **not** allocate extra space for another array. You must do this by **modifying the input array** **in-place** with O(1) extra memory.

## Approach
The approach I used was to limit duplicates to `k`.
1. Create an **anti-duplicate** counting `variable > 2`
2. Perform a loop, then validate whether the initial variable `value` is **less** than `2` or the current array value is greater than the array value at the position of the initial variable - 2.
- `2` here is the duplicate delimiter `k`
3. If one of the *conditions is met*, we replace the array `value` at the initial variable's position with the current array `value`.
4. Add `1`for the initial varible because the value is unique (≤ 2).
5. Return the `result` of the initial variable.

## Solutions Languange
- Python

## Complexity
- **Time Complexity**: `O(N)` — We use loops value.
- **Space Complexity**: `O(i)` — We modify it directly within the loop.