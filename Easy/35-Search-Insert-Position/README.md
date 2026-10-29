# Leetcode 35: Search Insert Position

# Description
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

## Approach:
I use the **“cut-off”** approach.
1. Initialize the `left` and `right` boundaries
2. Loop as long as `left` **<=** `right`
3. initialize the `middle` **value** as a **search helper**
4. If the value at array index `mid` is equal to `target`, **return mid**
5. However, if the `value` at index `mid` is **greater** than targ**et, change the right boundary to `mid - 1`.
6. If neither of those is **true**, then change the left boundary to `m + 1`.
7. after loop finished. Return **left value**.

## Solutions Languange
- C++
- Python
- Go

## Complexity
- **Time Complexity**: `O(Log N)` — We **cut** the execution time of each loop in **half**.
- **Space Complexity**: `O(1)` — We **store** it in a `regular` **variable**.