# Leetcode 3206: Alternating Groups I

# Description
There is a circle of red and blue tiles. You are given an array of integers `colors`. The color of tile `i` is represented by `colors[i]`:

- `colors[i] == 0` means that tile `i` is **red**.
- `colors[i] == 1` means that tile `i` is **blue**.

Every 3 contiguous tiles in the circle with **alternating** colors (the middle tile has a different color from its **left** and **right** tiles) is called an **alternating** group.

Return the number of **alternating** groups.

**Note** that since colors represents a **circle**, the **first** and the **last** tiles are considered to be next to each other.

## Approach:
The approach I used to solve this problem was to use *the length of the problem array as the* **modulo**.
1. Set the array length variable (Just to make typing easier) and a `counter` variable if there are **3 contiguous tiles**.
2. Iterate through the array until it **reaches** its **end**
3. Check whether the **value** at the current array index is **equal** to the **value** at the index `two places` away, and if the value at the index `one place` away is not equal to the **value** at the index `two places` away, then increment count by 1.
4. After the loop finishes, **return** `count`

## Solutions Languange
- Python
- C++

## Complexity
- **Time Complexity**: `O(N)` — We iterate from `0` to `n` exactly once.
- **Space Complexity**: `O(1)` — We only perform **addition** operations
