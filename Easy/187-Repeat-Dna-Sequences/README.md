# Leetcode 187: Repeat DNA Sequences

# Description
The **DNA sequence** is composed of a series of nucleotides abbreviated as `'A'`, `'C'`, `'G'`, and `'T'`.

- For example, `"ACGAATTCCG"` is a **DNA sequence**.

When studying **DNA**, it is useful to identify repeated sequences within the DNA.

Given a string `s` that represents a **DNA sequence**, return all the `10`**-letter-long** sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in **any order**.

## Approach:
The approach I used to solve this problem was **to split** the string into as many parts as the specified `limit (10)`.
1. First, initialize a dictionary to prevent **duplicates**, and an array for the **final results**.
2. Iterate through the index, and initialize the **string slicing**.
3. Check the condition: if a `character` in the dictionary is a **duplicate** with a `value` of `1`, **add** it to the **results** array, then add 1 to indicate that this `character` was found for the second time.
4. If the `character` **is not in** the duplicate dictionary, add it to the dictionary.
5. After the loop finishes, reverse the **result array**.

## Solutions Languange
- Python

## Complexity
- **Time Complexity**: `O(N)` — We iterate from `0` to `length string` exactly once.
- **Space Complexity**: `O(N)` — We split each `n` and store it as a new variable
