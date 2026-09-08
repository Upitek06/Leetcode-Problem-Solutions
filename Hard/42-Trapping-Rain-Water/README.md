# Leetcode 42: Trapping Rain Water  
## Description
Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

## Approach
To resolve this, I used a `prefix` and `Suffix` approach.
1. I created `2` **empty** arrays of length `n` to hold the `left` and `right` max values
2. Since we want to use the **"two-sum"** approach, we store the initial `value` for the `left` **pointer** and the final `value` for the `right` **pointer.**
3. Perform a `loop` to populate the `left` array; within the `loop`, update the current element of the `left` array by taking the maximum of the previous element in the `left` array and the corresponding `value` from the input array.
4. Do the same for the `right` array; for this array, **add** the data from the `right` side, so we set the initial `value` directly to the final `value`.
5. Next, create a variable to **store** the `total` volume of collected rainwater. Then, use a `loop` to calculate the `total` by taking the `maximum`value between the `left` array and the `right` array, and `subtracting` the `value` from the input array.
6. Return the variable

## Solutions Languange
- C++

## Complexity
- **Time Complexity**: `O(N)` — We perform the iteration as long as the condition allows.
- **Space Complexity**: `O(N)` — We store `N` number elements inside list.
