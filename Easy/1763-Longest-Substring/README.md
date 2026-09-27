# Leetcode 1763: Longest Nice Substring

# Description
A string `s` is **nice** if, for every letter of the alphabet that `s` contains, it appears **both** in uppercase and lowercase. For example, `"abABB"` is nice because `'A'` and `'a'` appear, and `'B'` and `'b'` appear. However, `"abA"` is not because `'b'` appears, but `'B'` does not.

Given a string `s`, return *the longest **substring** of `s` that is **nice**. If there are multiple, return the substring of the **earliest** occurrence. If there are none, return an empty string*.

## Approach:
For this problem, I used a **loop-based** approach to prevent duplicates 
1. First, filter out all **duplicate** characters
2. Iterate through the **list** and check whether any characters—whether `lowercase` or `uppercase—are` not included in the **unique** character list.
3. If there are **none**, we perform a recursion by splitting the process into **two parts**: the **first** from the beginning to the unpaired character, and the **second** from the unpaired character to the end.
4. Then return the `maximum value` between the `left` and `right` values using a character-length comparison operator.
5. If the loop is **complete**, return the string

## Solutions Languange

## Complexity
- **Time Complexity**: `O(N)` — We iterate from `0` to `n` exactly once.
- **Space Complexity**: `O(1)` — We convert the `n` without a place to store it 
