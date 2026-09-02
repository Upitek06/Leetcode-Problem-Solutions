# Leetcode 167: Two Sum II - Input Array Is Sorted

## Description
Given a **1-indexed** array of integers `numbers` that is already **sorted in non-decreasing order**, find two numbers such that they add up to a specific `target` number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where 1` <= index1 < index2 <= numbers.length.`

Return the indices of the two numbers `index1` and `index2`, **each incremented by one**, as an integer array `[index1, index2]` of length 2.

The tests are generated such that there is **exactly one solution**. You **may not** use the same element twice.

Your solution must use only constant extra space.

## Approach
This is an introductory challenge based on the **"Two Sum"** problem; in this specific instance, we are informed that the **array is already sorted**.
We can utilize a technique that checks the array from `both` the beginning and the `end` simultaneously; this is done by creating two variables—often referred to as the **"left hand"** and **"right hand"** within the `"two pointers"` concept.
1. First, we set the `left` check boundary to `0` and the `right` check boundary to the `length of the array - 1`.
2. Perform a loop as long as the value of the `left` variable is `less than` the `right` variable.
3. Sum the values ​​of the `left` and `right` variables, then validate whether the sum equals `target`. If it does, return a list containing `left + 1` and `right + 1`..
4. Otherwise, validate whether the sum of the two is `less` than the `target`. If so, `add 1` to the `left` variable.
5. If it turns out to be `bigger` then we subtract `1` from the `right`.
6. If the loop ends, it returns an empty list

## Solutions Languange
- C++
- Python
- Javascript

## Complexity
- **Time Complexity**: `O(N)` — We iterate from 1 to `n` exactly once.
- **Space Complexity**: `O(1)` — We store `1` string elements inside the result list.
