# Leetcode 3208: Alternating Groups II

## Description
There is a circle of red and blue tiles. You are given an array of integers `colors` and an integer `k`. The color of tile `i` is represented by `colors[i]`:

- `colors[i] == 0` means that tile `i` is **red**.
- `colors[i] == 1` means that tile `i` is **blue**.

An **alternating** group is every `k` contiguous tiles in the circle with **alternating** colors (each tile in the group except the first and last one has a different color from its **left** and **right** tiles).

Return the number of **alternating** groups.

**Note** that since colors represents a **circle**, the **first** and the **last** tiles are considered to be next to each other.

## Approach
TI use the **two pointers** approach
1. Initialize the left-boundary variable and the counter for different colors
2. Iterate from `0` to `array length + k`
3. Perform validation; if the current color is the same as the previous one, move the left boundary toward the right boundary.
4. Then check again: if `right_bound - left_bound + 1 >= k, then count + 1`
5. return the count

## Solutions Languange
- C++
- Python
- JavaScript
- TypeScript

## Complexity
- **Time Complexity**: `O(N)` — We use nested conditional loops.
- **Space Complexity**: `O(N)` — We store `N` number elements inside list.
