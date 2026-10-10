# Leetcode 9: Palindrome Number

# Description
You are given an integer array `nums` and two integers `l` and `r`. Your task is to find the **minimum** sum of a **subarray** whose size is between `l` and `r` (inclusive) and whose sum is greater than 0.

Return the **minimum** sum of such a subarray. If no such subarray exists, return -1.

A **subarray** is a contiguous **non-empty** sequence of elements within an array.

## Approach:
I use a sliding window approach to solve this problem
1. Initialize a variable to hold the **smallest value**, then loop from `l` to `r`
2. Initialize a variable to **count** the total number of elements in an array with a range from `l` to `r`
3. Perform a *second loop* from `0` to `i`, then add each array value to the index of the *second loop* `(j)`
4. After the *second loop* is complete, check if the total counter value is **greater** than `0`; if so, find the minimum value between the **largest** and **smallest values**.
5. Then set the low value to `0` and the **high value** to `i`, and loop as long as the **high value** is less than the length of the problem array
6. Inside the **loop**, subtract the **total sum** from the value at the lower index, then add the value at the **higher** index
7. Then increment the low + 1 and the high + 1
8. Then check if the **total** is greater than `0`; if so, find the minimum value. 
9. After the entire loop has **finished**, check if the minimum value is equal to the initial **value**; if so, return -1; otherwise, return the minimum value.

## Solutions Languange
- Python

## Complexity
- **Time Complexity**: `O((r - i + 1) * n)` — Complexity based on the initial value
- **Space Complexity**: `O(1)` — We it changes the value directly without having to store it in a variable or array
