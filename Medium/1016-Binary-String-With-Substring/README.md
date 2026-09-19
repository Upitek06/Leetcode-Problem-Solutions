# Leetcode 1016: Binary String With Substrings Representing 1 To N

# Description
Given a binary string `s` and a positive integer `n`, return `true` *if the binary representation of all the integers in the range* `[1, n]` *are **substrings** of `s`, or `false` otherwise.*

A **substring** is a contiguous sequence of characters within a string.

## Approach:
To solve this problem, I used the following approach: if the current **binary** index is **not found** in the `string`, `return False`.
1. Check if `n > 1023`; if so, return `False`
- Why? Because the string length is limited to *less than 1,000, so we can set the limit to 1,023.*
2. Iterate with an **index** starting at `n`, with a lower bound of half of `n`
- Why? Because we don’t need to check all the way down to `1—since` when any number `N` is divided `by 2`, the **result** is always the same binary value, so we can skip that step.
3. Perform a `validation` check; if the result of the loop's index is **not found** in the string, **return false**
4. If the loop has finished, **return true**

## Solutions Languange
- C++
- Python
- JavaScript

## Complexity
- **Time Complexity**: `O(N)` — We iterate `0` to `n` value
- **Space Complexity**: `O(1)` — We substitute the `value` directly.
