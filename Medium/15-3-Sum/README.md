# Leetcode 15: 3Sum
## Description
Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0.`

Notice that the solution set must not contain duplicate triplets.

## Approach
For this problem, I am using a `three-pointer` approach by setting `left` and `right` boundaries and moving a `middle` pointer to **find** the target `value`.
1. Create an array to store the `results`, then sort the array to enable the use of **pointers**.
2. Iterate from `i`up to the *length of the array*.
3. To prevent **duplicates**, check if the current array `value` is equal to the previous one; if *they are equal*, skip the current iteration.
4. Create variables for *the search value*, the `middle` point, and the `right` boundary value.
5. Perform a **loop** with the condition that the *midpoint value* is *less than the right bound*.
6. Sum the `three` array values; check if the `sum` is *greater than* `0` if so, set the `right` bound to `-1` or if it is less than `0`, set the `middle` value to `+1`.
7. and if the `value` turns out to be `0`, then add *3 array values* ​​to the `result` array, and increment the `middle` value by 1.
8. After **incrementing** the `midpoint` by 1, prevent duplicates by iterating: as long as the `midpoint` is less than the `right` boundary and the current **midpoint equals** the previous one, increment the `midpoint` by 1.
9. Return the contents of the array storing the results.

## Solutions Languange
- C++

## Complexity
- **Time Complexity**: `O(N^2)` — We use nested loop interation and conditional loops.
- **Space Complexity**: `O(N)` — We store `N` number elements inside list.
