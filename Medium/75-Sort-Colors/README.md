# Leetcode 75: Sort Colors
## Description
You are given an array `nums` with `n` objects colored red, white, or blue, sort them **in-place** so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

## Approach
The approach I used to solve this problem was **Three-pointers.**
1. Setting boundaries for the `left`, `middle`, and `right` `values`. In this solution, I **restrict** the range of possible movement for the `middle` variable.
2. Repeat while the `midpoint` is `less` than or `equal` to the `right` bound.
3. Check if the middle value is `0`; if so, swap the current `value` with the `left` boundary, left + 1 and mid + 1.
4. Check if the middle value is `1`; if so, move to the *next block*, mid + 1.
5. Check if the middle value is `2`; if so, swap it with the `right` boundary, right - 1.

## Solutions Languange
- C++
- Python
- JavaScript

## Complexity
- **Time Complexity**: `O(N)` — We use nested conditional loops.
- **Space Complexity**: `O(N)` — We store `N` number elements inside list.
