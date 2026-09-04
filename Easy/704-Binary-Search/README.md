# Leetcode 704: Binary Search
# Description
Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in` nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

## Approach:
Since the problem requires a **time complexity** of `O(log n)`, we must divide the work at each step of the process.
1. I created `two helper` variables that populate the `first` and `last` indices.
2. Then, perform a loop as long as the `left` index variable `<=``right` index variable.
3. Inside the loop, I created a **divisor/pivot** variable to narrow down the `target` search area. With the `left` variable index value + (the right-left distance) divided by 2.
- Why do we need to increment the `left` **pointer**? Because **incrementing** the `left` variable makes the `search area` much more **efficient**.
4. Then, perform filtering: if the array `value` at the pivot index is less than the target, the `left` variable is set to the pivot `value` + `1`; conversely, if it is greater, the `right` variable is set to the pivot `value` - `1`.
5. If it is neither, then it is certainly correct; `return` the `pivot`.
6. If the loop terminates, return `-1`.

## Solutions Languange
- C++
- Python

## Complexity
- **Time Complexity**: `O(Log N)` — We always break down every process.
- **Space Complexity**: `O(N)` — We store `n` elements in the list.
