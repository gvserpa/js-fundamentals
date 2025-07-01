/* 

Create a constant with the value of the number Pi (3.14159). Try to reassign this value. What happens? Comment on why the error occurs (if any).

*/

const pi = 3.14159;

pi = 2.143123;

console.log(pi)

/*

TypeError: Assignment to constant variable.

This error occurs because a constant (const) cannot be reassigned. If we want to reassign a variable, we need to declare it using let instead of const.

*/