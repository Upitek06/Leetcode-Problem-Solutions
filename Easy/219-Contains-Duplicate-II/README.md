# Leetcode 219: Contains Duplicate II

# Description
Given an integer array nums and an integer `k`, return true if there are two distinct indices **i** and **j** in the array such that **nums[i] == nums[j]** and **abs(i - j) <= k**.

## Approach:
I use a dictionary because it allows for `filtering` and `index` reduction to be performed simultaneously.
1. Of course, first we need a dictionary, so let's initialize one.
2. Then do a loop to look for `two values` ​​that are the same and in index, and the distance that meets the `k` value requirements
3. Create a `variable` to serve **as the key**, assigning it the `value` from the current array index.
4. Check whether **the key exists** in the `dictionary`. If it does, verify whether the `absolute` difference between the current `index` and the `value` stored in the dictionary satisfies the **condition k**. If yes **return True**.
5. If the `condition` is `not met`, **add the key** variable with the **current index** to the `dictionary`.
6. And **return False**.

## Solutions Languange
- C++
- Python

## Complexity
- **Time Complexity**: `O(N)` — We iterate from `n` to `0` exactly once.
- **Space Complexity**: `O(N)` — We store `n` elements for key and the values.
