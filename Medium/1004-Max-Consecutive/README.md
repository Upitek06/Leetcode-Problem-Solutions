# Leetcode 1004: Max Consecutive Ones III

## Description
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

## Approach
To solve this problem, I used the `two-pointers` approach
1. Initializing the **left-hand** side auxiliary variable
2. Then perform an iteration, and check whether the `current` array `value` is `0`. If it is `0`, then `k - 1`
- It's like **changing** the number `0` to `1—which` means we're using the opportunity to change it once.
3. Then check if `k < 0`. If `true`, check again if the value of the array at the left auxiliary index is `0`. If so, set `k + 1`; then, outside this check, set `j + 1`.
- It's as if the `current` `value` of `1` **isn**'t the *longest one yet*, because there's still a `0`
4. After the entire loop is **complete**, return the `result` of `right value - left value`

## Solutions Languange
- C++
- Python
- JavaScript
- TypeScript

## Complexity
- **Time Complexity**: `O(N)` — We use a Iteration `0` to `n` loop
- **Space Complexity**: `O(1)` — We don't store `values`