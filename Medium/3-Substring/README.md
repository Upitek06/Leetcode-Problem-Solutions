# Leetcode 3: Longest Substring Without Repeating Characters
## Description
Given a string s, find the length of the **longest substring** without duplicate characters.

## Approach
For this problem, I took an approach where I converted **characters** into their corresponding `ASCII` **numerical** values ​​within an array and used a `boolean` **to mark numbers** that had **already been encountered**.
1. First, I create an bool type array of `128 slots` initialized or any size, really, **as long** as the characters will fit **into the array later**.
2. Create variables to store the `final value`, as well as the contributions from the `left` and the `right`.
3. Perform a **conditional loop** as long as the auxiliary iterator variable is **less than** `the length` of the problem array.
4. Check if the current letter in the array is `False`. If it is, change the current value in the array to `true`.
5. and **record** **the character's uniqueness** into the `variable` storing the **final value**. Update the `value` by comparing the current `maximum value` of the **final value variable** with the `result` of the calculation: right helper variable - left helper variable + 1.
- Why +1? Because we start the `index` at `0`, we are off by `1`; adding `1` ensures we get the **accurate value**. And add the varibel motion + 1
6. If the current character is already `True`, we change it back to `false` and increment the `left` **+** `1`, since the **streak has been broken**.
7. Once all iterations **have finished**, return the **variable storing the final value** or the longest streak.

## Solutions Languange
- C++

## Complexity
- **Time Complexity**: `O(N)` — We perform the iteration as long as the condition allows.
- **Space Complexity**: `O(N)` — We store `N` number elements inside list.
