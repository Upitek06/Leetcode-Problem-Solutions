# Leetcode 1984: Minimum Difference Between Highest and Lowest of K Scores

# Description
You are given a **0-indexed** integer array `nums`, where `nums[i]` represents the score of the `ith` student. You are also given an integer `k`.

Pick the scores of any k students from the array so that the **difference** between the **highest** and the **lowest** of the `k` scores is **minimized**.

Return *the **minimum** possible difference*

## Approach:
I use a standard loop termination condition by finding the **smallest** value in each loop
1. First, sort the array to find the **lowest** value
2. Set a variable to the value obtained by subtracting the `(k - 1)th` index from the starting index
3. Iterate from `0` to `i + k - 1`; within the loop, find the **lowest** value among the initial set of variables and the value of the index `i + k - 1` minus the index `i`.
4. After the loop **finishes**, return the result of subtracting the **smallest** value 

## Solutions Languange
- C++
- Python
- JavaScript
- TypeScript

## Complexity
- **Time Complexity**: `O(K)` — We iterate from `0` to `k` exactly once.
- **Space Complexity**: `O(K)` — We store the values in an array to **sort** them
