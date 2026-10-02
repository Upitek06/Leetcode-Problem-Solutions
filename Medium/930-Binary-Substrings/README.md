# Leetcode 930: Binary Substrings With Sum

## Description
Given a binary array `nums` and an integer `goal`, return *the number of non-empty **subarrays** with a sum `goal`*.

A **subarray** is a contiguous part of the array.

## Approach
I use an approach that involves subtracting the *original goal resul*t from *the goal - 1 result*.
1. Initialize the **auxiliary** variables, then loop through the array until you reach the end of `nums`.
2. Then save the current array **value** and add it to the previous **value**
3. Loop as long as the sum of the array **values** *is greater than the goal* and the auxiliary index variable is *less than the current* iteration; then subtract the **value** of the auxiliary index variable from the sum of the array **values**, and *increment the auxiliary index variable*.
4. **Outside** the conditional loop, store the **final result** using the current iteration — the auxiliary variable index + 1
5. Return the variable that stores the **final value**. 
6. Then, in *the final step*, call the **function** that performs the operation from the main **function**, returning the original **result** minus the goal minus 1.

## Solutions Languange
- C++
- Python

## Complexity
- **Time Complexity**: `O(n log n)` — We use iteration and conditional loop.
- **Space Complexity**: `O(N)` — We store `n` number elements in new variable.
