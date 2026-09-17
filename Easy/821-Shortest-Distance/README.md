# Leetcode 283: Move Zeroes

# Description
Given a string `s` and a character `c` that occurs in `s`, return *an array of integers* `answer` *where* `answer.length == s.length` *and* `answer[i]` *is the ***distance*** from index* `i` *to the ***closest*** occurrence of character* `c` in `s`.

The **distance** between two indices `i` and `j` is `abs(i - j)`, where `abs` is the absolute value function.

## Approach:
To solve this problem, use `two loops`: one to determine the position of the target character and one to **calculate** *the distance to the target*.
1. First, initialize `two arrays` to serve as the `result` and temporary storage, and a variable to represent the position of the `target` character
2. Loop through the characters; if the `current` character is the **target** character, store the `current` `index` in a temporary array.
3. Iterate to **find** the distance between the `current` character and the ** target** character
4. If the `current` character is the tar**get character, add the `value` `0` to the **result** array
5. If the **target** character position variable turns out to be `0`, add the absolute value of the `current` index plus the `value` of the temporary array element at `index` `0` to the **results** array.
6. If the **target** character position variable is greater than `0` and **less** than the **length** of the temporary array, add the greater of the absolute difference between the current index and temp `index - 1`, and temp index.
7. If the **target** character position variable is **equal** to the length of the temp array, add the absolute `value` of the `current` index minus the temp index minus `1`.
8. After the entire loop is complete, return the array `result`.

## Solutions Languange
- C++
- Python

## Complexity
- **Time Complexity**: `O(N)` — We iterate from `0` to `n` for two times.
- **Space Complexity**: `O(N)` — We store `values` in an array