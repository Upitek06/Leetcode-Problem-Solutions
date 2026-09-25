# Leetcode 9: Palindrome Number

# Description
Given an integer `x`, return `true` if `x` is a **palindrome**, and `false` otherwise.

## Approach:
To solve this problem, use the following approach: if the `left` and `right` ends are **not the same**, return **false.**
1. First, convert it from an **integer** to a **string** so you can `calculate` the number of characters
2. Next, create a variable to **compare** the right-hand **values.**
3. Loop through the array, then check if the **left** and **right** ends are different; if so, return **“false”**; if they are the `same`, subtract the index `value` of the right comparison variable.
4. If the loop is **complete**, return **true.**

## Solutions Languange
- C++
- Python
- JavaScript
- TypeScript

## Complexity
- **Time Complexity**: `O(N)` — We iterate from `0` to `n` exactly once.
- **Space Complexity**: `O(N)` — We store `x` string elements inside the new varibles.
