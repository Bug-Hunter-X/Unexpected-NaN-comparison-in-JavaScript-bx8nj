# Unexpected NaN comparison in JavaScript
This code demonstrates a common pitfall in JavaScript when comparing values using the equality operators (== and ===) with NaN (Not a Number).

## The Bug
The function `foo` attempts to compare two numbers for equality, returning `true` if they're equal and `false` otherwise. However, when `NaN` is passed as both arguments, the function incorrectly returns `false`. This is because `NaN` is never equal to itself, even when using strict equality (`===`).

## The Solution
The solution involves using the `isNaN()` function to explicitly check if a value is NaN before performing the comparison.  This approach provides a more reliable way to handle cases involving NaN values.

## How to run this code
Save the code to two separate files named `bug.js` and `bugSolution.js` and then run it with node.