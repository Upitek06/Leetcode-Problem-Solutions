# Leetcode 594: Longest Harmonious Subsquence   

# Description
We define a harmonious array as an array where the difference between its maximum value and its minimum value is **exactly** `1`.

Given an integer array `nums`, return the length of its longest harmonious **subsequence** among all its possible subsequences.

## Approach:
To solve this problem, I used a **hash map**
1. First, initialize the `dictionary` and the `variable` that stores the highest **harmonic value**.
2. Loop through the list and check if the **current** value is in the dictionary; if it is, increment the count by 1; if not, add it.
3. Then, after the loop **finishes**, run the loop again as many times as there are entries in the **dictionary**.
4. Then check the neighbor with a value that is the current value + 1, and 
5. verify whether the neighbor is in the dictionary; if so, add the **dictionary values** from the loop data to those from the neighbor’s data, then find the **highest value** among the **harmonic values** and the sum of the **dictionary values**.
6. Return the `highest` **harmonic value**

## Solutions Languange
- C++
- Python

## Complexity
- **Time Complexity**: `O(N)` — We iterate for search `frequency` in hash map.
- **Space Complexity**: `O(N)` — We store as many `values` as there are *data entries in the hash*