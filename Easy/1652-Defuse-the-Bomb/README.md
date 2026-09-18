# Leetcode 1652: Defuse the Bomb

# Description
You have a bomb to defuse, and your time is running out! Your informer will provide you with a **circular** array `code` of length of `n` and a key `k`.

To decrypt the code, you must replace every number. All the numbers are replaced **simultaneously**.

- If `k > 0`, replace the `ith` number with the sum of the **next** `k` numbers.
- If `k < 0`, replace the `ith` number with the sum of the **previous** `-k` numbers.
- If `k == 0`, replace the `ith` number with `0`.

As `code` is circular, the next element of `code[n-1]` is `code[0]`, and the previous element of `code[0]` is `code[n-1]`.

Given the **circular** array code and an integer key `k`, return *the decrypted code to defuse the bomb!*

## Approach:
The approach I used to solve this **sliding window** problem
1. First, create a `results` array with `0` **values**, the same size as the problem array; this is useful because if `k = 0`, you can simply **return** this array. 
2. Iterate through the **index**, and if `k > 0`, perform a second iteration starting with the `index + 1`, with the upper bound set to `i + 1 + k`.
- Why is the bound `i + 1 + k` used here, rather than `n?` The reason is so that the length of the bound can adjust each time `i` increases.
3. Then add the `value` from the **result** array at the current `index` to the `value` from the problem array at index `j % n`
- Why do we `have` to use the residual profit share? Because the *residual profit share limits the range of motion* to **prevent** the index from going **out of scope**.
4. Next, perform the second validation: if `k < 0`, simply **reverse** the process—if the value previously increased, decrease this `index`. And to prevent `k` from becoming positive when a negative `value` is subtracted from another negative `value`, convert the `value` to its absolute `value`.
5. Then perform the same addition; once all the loops are complete, return the result array

## Solutions Languange
- Python

## Complexity
- **Time Complexity**: `O(N^2)` — We iterate from `i` to `n` and `j` to `n`.
- **Space Complexity**: `O(1)` — We modify the `variable` directly without creating a new address