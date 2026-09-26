# Leetcode 283: Move Zeroes

# Description
Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Note** that you must do this in-place without making a copy of the array.

## Approach:
The approach I used to solve this problem was to create `two` separate loops: `one` to check for non-zero values and `one` to add zeros.
1. First, create a variable that serves as the starting `point` with a `value` of `0`
2. Write a loop that filters out the `value` `0`, and, as long as the `value` is not `0`, move it to the `left` end of the array.
3. Since all non-zero numbers are already **on** the `left`, in each loop the counter variable starts at `0` for non-zero numbers
4. Once you're done, loop as long as the starting `point` variable is `0` and the array length is less than `0`; then set the current array position to `0` and increment the `counter` variable.

## Solutions Languange
- C++ 
- Python
- JavaScript
- TypeScript

## Complexity
- **Time Complexity**: `O(N)` — We iterate from `0` to `n` for two times.
- **Space Complexity**: `O(1)` — We modify the `variable` directly without creating a new address