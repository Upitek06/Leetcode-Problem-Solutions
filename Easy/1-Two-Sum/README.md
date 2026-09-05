# Leetcode 1: Two Sum

# Description
You are given an array of integers `nums` and an integer `target`, *return indices of the two numbers such that they add up to `target`*.

You may assume that each input would have ***exactly one solution***, and you may not use the *same* element twice.

You can return the answer in any order.

## Approach:
For this **"Two Sum"** problem, since the requirement is to return the indices that satisfy the target, I used a *`dictionary-based`* approach.
1. First, initialize the `dictionary`, then iterate from `0` to the *length of the array*.
2. Create a variable that stores *the difference between* the `target` and the `value` at the current array `index`.
3. Check if the `variable` **exists** in the dictionary. If it does, return the current `index` along with the dictionary `value`.
4. If it does not **exist**, add the difference as a `key` to the dictionary and the `index` as the `value`.
5. When the loop finishes, return an `empty`array.

## Solutions Languange
- C++
- Python

## Complexity
- **Time Complexity**: `O(N)` — We iterate from `0` to `b` exactly once.
- **Space Complexity**: `O(N)` — We store `n` string elements inside the result list.
