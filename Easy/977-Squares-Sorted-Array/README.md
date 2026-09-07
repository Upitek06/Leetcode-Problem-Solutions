# Leetcode 977: Squares of a Sorted Array
# Description
Given an integer array `nums` sorted in **non-decreasing** order, return *an array of ***the squares of each number*** sorted in non-decreasing order*.

## Approach:
We are still **looking** for a more `efficient` **solution**, but for now, you can follow the `solution` I am offering as a simple workaround.
1. Create an `array` that will store the squared `results`.
2. Loop `through` and `multiply` the current `value` by itself (**square it**).
3. After the loop finishes, `sort` the array first.
4. Return the `array` that we have **sorted**.

## Solutions Languange
- C++
- Python (On-Going) I have different Solutions

## Complexity
- **Time Complexity**: `O(N)` — We iterate from `0` to `n` exactly once.
- **Space Complexity**: `O(N)` — We store `n` string elements inside the list
