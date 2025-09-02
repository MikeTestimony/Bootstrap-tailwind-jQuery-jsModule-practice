// app.js

// Import named exports (must use same names)
import { add, subtract } from './mathUtils.js';

// Import default export (can be any name)
import multiply from './mathUtils.js';

//custom functions
function greet(name) {
  return `Hello, ${name}!`;
}

console.log("Addition:", add(10, 5));        // 15
console.log("Subtraction:", subtract(10, 5)); // 5
console.log("Multiplication:", multiply(10, 5)); // 50

console.log("mathUtils.js module imported into app.js.");
console.log(multiply(2, 3));
console.log(greet("Alice")); // Hello, Alice!

// error handling
function divide(a, b) {
  if (b === 0) {
    // explicitly throw an error
    throw new Error("Division by zero is not allowed!");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));  // this will throw
} catch (error) {
  console.error("Caught an error!");
  console.error("Error name:", error.name);
  console.error("Error message:", error.message);
  console.error("Error stack:", error.stack);
}

