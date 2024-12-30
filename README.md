# JavaScript Type Coercion Bug
This repository demonstrates a common JavaScript bug related to type coercion during arithmetic operations. The function `foo` is intended to add two numbers, but it unexpectedly concatenates strings when one of the inputs is a string.

## Bug Description
The `foo` function does not correctly handle cases where one input is a string and the other is a number. Instead of throwing an error or converting the string to a number, it performs string concatenation, resulting in unexpected behavior.

## Bug Reproduction
1. Clone this repository.
2. Run `bug.js` using a JavaScript runtime (e.g., Node.js).
3. Observe the unexpected output when calling `foo` with a mix of string and numeric inputs.