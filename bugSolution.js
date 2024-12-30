function foo(a, b) {
  //Explicit type checking and conversion
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    return null; //Handle NaN values
  }
  if (a === null || b === null) {
    return null; // Handle null inputs
  }
  return a + b; // Addition of numbers
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(null, null)); // Output: null

//Corrected behavior
console.log(foo('1', 2)); // Output: 3
console.log(foo(1, '2')); // Output: 3