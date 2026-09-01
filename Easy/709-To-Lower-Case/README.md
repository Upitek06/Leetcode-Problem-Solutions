# Leetcode 709: To Lower Case

## Description
Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

## Approach
I'll try to solve this without using built-in libraries. First, let's check the ASCII values.
We can see that the uppercase letter '`A`' is at `65` and the lowercase letter '`a`' is at `97` this pattern remains consistent from `A` - `Z`.
1. Perform a loop from index `0` up to the length of the string.
2. Perform validation, if the string index letter has a value between the letters `A-Z`, then we add `32`
3. Return the `string` after the loop finishes. 

## Complexity
- **Time Complexity**: `O(N)` — We iterate from 1 to `n` exactly once.
- **Space Complexity**: `O(1)` — We store `1` string elements inside the result list.
