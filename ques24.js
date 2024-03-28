"use strict";
//  24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// // • Tests for equality and inequality with strings
// // • Tests using the lower case function
// // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// // • Tests using "and" and "or" operators
// // • Test whether an item is in a array
// // • Test whether an item is not in a array
// test: === and !==//
const string0 = "Apple";
const string1 = "Mango";
console.log(string0 === string1);
console.log(string0 !== string1);
// test: lowercase//
const mixedCaseString = "HelloWorld";
console.log(mixedCaseString.toLowerCase() === "helloworld");
// test: === , !==, >, <, >=, <=//
const num1 = 10;
const num2 = 5;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
// test:  && , || //
const condition1 = true;
const condition2 = false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);
//{test:  is in  Array }, {is in not Array}//
const fruits = ["apple", "orange", "grapes", "pear"];
console.log(fruits.includes("apple"));
console.log(fruits.includes("Apple"));
