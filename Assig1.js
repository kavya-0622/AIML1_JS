// 1. Program to demonstrate assignment operators

let num = 10;

console.log("Initial value:", num);

// += operator
num += 5; 
console.log("After += 5:", num);

// -= operator
num -= 3;
console.log("After -= 3:", num);

// *= operator
num *= 2;
console.log("After *= 2:", num);

// /= operator
num /= 4;
console.log("After /= 4:", num);

// %= operator
num %= 3;
console.log("After %= 3:", num);


// 2. Program to find the largest of three numbers using ternary operator

let a = 15;
let b = 25;
let c = 10;

let largest = (a > b && a > c) 
              ? a 
              : (b > c ? b : c);

console.log("Largest number is:", largest);