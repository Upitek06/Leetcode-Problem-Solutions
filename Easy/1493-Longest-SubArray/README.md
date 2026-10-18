# Leetcode 1493: Longest Subarrayof 1's After Deleting One Element

# Description
You are given a binary array `nums`, you should delete **one** element from it.

Return the size of the **longest non-empty subarray** containing only 1's in the resulting array. Return 0 if there is no such **subarray**.

## Approach:
I use the **sliding window** approach.
1. Initialize the left boundary, set the counter to 0, and set the **final result**
2. Iterate through the index; check if the current index value is 0, and if so, increment the counter by 1
3. As long as the **counter 0** is greater than 1, move the left boundary until it **meets 0**; if it **meets 0**, decrease the **counter 0** by 1.
4. Find the **maximum value** of `(right boundary - left boundary)` - the number of zeros
5. If the **final result** is equal to the length of the array, return the **final result** minus 1; otherwise, return the **final result**.

## Solutions Languange
- C++
- Python
- JavaScript
- TypeScript
- Go

## Complexity
- **Time Complexity**: `O(N)` — We iterate from `0` to `n` and short while exactly once.
- **Space Complexity**: `O(1)` — We store it in a variable .
