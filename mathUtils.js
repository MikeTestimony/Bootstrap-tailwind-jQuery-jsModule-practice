// mathUtils.js

// Named exports
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// Default export (only one allowed per file)
export default function multiply(a, b) {
  return a * b;
}

console.log("Math utilities loaded.");
console.log(multiply(2, 3)); // 6 (testing default export)