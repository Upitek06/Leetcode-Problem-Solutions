# Leetcode 191: Number of 1 Bits

# Description
Given a string `s` and an integer `k`, reverse the first `k` characters for every `2k` characters counting from the start of the string.

If there are fewer than `k` characters left, reverse all of them. If there are less than `2k` but greater than or equal to `k` characters, then reverse the first k characters and leave the other as original.

## Approach:
To solve this problem, I used a `two-sum` approach
1. I need to convert a `string` into *individual characters or strings* and add them to a list or array.
2. Then store the exchange point `(2k)` in a variable
3. Then perform an iterative loop with the counter `i = 2k`
4. It's time to use the `two-pointer` method: declare a variable `start` with the value `i`, and a variable `end` with the `value` of the **minimum** between `i + k` and the length of the string.
5. Then loop while `start < end`
6. Swap the positions of the `start` and `end` strings, then increment `start` and decrement `end`
7. After the loop **finishes**, combine them back into a single string, and **return**

## Solutions Languange
- Python

## Complexity
- **Time Complexity**: `O(N)` — We iterate from `i` to `n` and conditional loop for swipe.
- **Space Complexity**: `O(N)` — We store `n` string elements inside the list.
