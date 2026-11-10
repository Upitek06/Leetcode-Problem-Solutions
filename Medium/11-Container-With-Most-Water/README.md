# Leetcode 11: Container With Most Water

## Description
You are given an integer array height of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

**Notice** that you may not slant the container.

## Approach
To solve this problem, I used a **sliding windows** approach with balanced constraints.
1. Initialize the **variables** for the `left` and `right` bounds and the **maximum value**.
2. Repeat as long as `left < right`.
3. Find the **largest** **value** among the following: the l**argest value** obtained by calculating the current circumference, provided that the `left` or `right` boundary continues to hold water
4. If the `value` of the left boundary array is less than the `value` of the right boundary array, then the left boundary is incremented. Otherwise, the right boundary is decremented.
5. After the loop finishes, return the highest value

## Solutions Languange
- C++
- JavaScript
- Python

## Complexity
- **Time Complexity**: `O(N)` — We perform the iteration as long as the condition allows.
- **Space Complexity**: `O(1)` — We do not store the code in an **array**.
