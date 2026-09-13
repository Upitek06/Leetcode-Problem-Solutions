# Leetcode 202: Happy Number

# Description
Write an algorithm to determine if a number `n` is happy.

A **happy number** is a number defined by the following process:

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
- Those numbers for which this process ends in 1 are happy.

Return *`true` if `n` is a happy number, and `false` if not.*

## Approach:
The approach I am using for this problem employs concise `recursion`.
1. First, we must check whether the value of the *variable n* is `1` or `7`; if so, **return true**.
2. Otherwise, the second condition: if `n < 10`, return false
- Why do we use `10` as the cutoff? Because `10` is the boundary between 1-digit and 2-digit numbers.
3. If neither of the two conditions above applies, then we move on to the final condition: create a variable to *store the remainder of the 2-digit division* of the variable `n`.
4. Perform a loop while n > 0; inside the loop, divide `n` by `10` and store the remainder in a **temporary variable**
5. Then add the `result` of dividing `n` by itself and squaring it to the temporary variable that we **initialized** outside the loop
6. Then divide `n` by `n` to round down
7. After the loop **finishes**, we call the problem *function again and replace the variable* `n` with the variable we initialized earlier

## Solutions Languange
- C++
- Python
- JavaScript

## Complexity
- **Time Complexity**: `O(log n)` — We perform a conditional loop, the value of which decreases by `n` with each iteration.
- **Space Complexity**: `O(log n)` — We create `n` smaller and smaller storage units for each process
