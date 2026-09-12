# Leetcode 27: Remove Element

# Description
Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` **in-place**. The order of the elements may be changed. Then return *the number of elements in* `nums` *which are not equal to* `val`.

Consider the number of elements in `nums` which are not equal to `val` be `k`, to get accepted, you need to do the following things:

- Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`. The remaining elements of `nums` are not important as well as the size of `nums`.

- Return `k`

## Approach:
The approach to solving this problem involves skipping the current `value` if it `equals` the number that must be **removed**.
1. Initialize a helper variable to *track the number to be* **removed**.
2. Perform a loop, then validate: if the current array element does not match the `target` to be **deleted**, *replace the value* at the anti-duplicate variable's position with the current `value`.
3. Then, + `1` anti-duplicate variable each time the current `value` differs from *the deletion target*.
4. Return the anti-duplicate variable..

## Solutions Languange
- Python

## Complexity
- **Time Complexity**: `O(N)` — We iterate `0` to `n` value
- **Space Complexity**: `O(1)` — We substitute the `value` directly.
