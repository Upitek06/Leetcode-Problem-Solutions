# Leetcode 151: Reverse Words in a String
## Description
Given an input string `s`, reverse the order of the **words**.

A **word** is defined as a sequence of non-space characters. The **words** in `s` will be separated by at least one space.

Return *a string of the words in reverse order concatenated by a single space.*

**Note** that `s` may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

## Approach
To solve this problem, I used the `two-pointers` approach
1. First, we'll convert each word into its own string.
2. Then initialize the `left` and `right` boundaries.
3. Repeat the loop as long as `left` < `right`.
4. Swap the word on the `left` with the word on the `right`, then increment the `left` and decrement the `right`.
5. Concatenate all the **words** into a single string, and return it

## Solutions Languange
- Python

## Complexity
- **Time Complexity**: `O(N)` — We use a conditional loop
- **Space Complexity**: `O(N)` — We temporarily store n in a list