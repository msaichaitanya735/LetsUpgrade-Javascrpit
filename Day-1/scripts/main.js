// console.log()
// Used to print output onto the screen
console.log("Lets Have a Good start");
// console.error()
// used to show error message on console
console.error("U dont have any eroor");
// console.warn ()
// used to show warning message on the screen
console.warn("you are being warned");
//console.clear
//used to clear the console
console.clear();
//use of the time() and timeEnd() methods allow us to find the time for execution of a function
console.time("x");
let a=function(){
    console.log("hello");
}
let b=function(){
    console.log("hola");
}
a();
b();
console.timeEnd('x');
//console.table() allows us to generate a table inside a console.
console.table({'a':'c', 'b':'d'}); 
//console.count() used to count the number that the function hit by this counting method.
for(let i=0;i<5;i++){ 
    console.count(i); 
} 
//cosole group() and groupEnd() methods of the console object allows us to group contents in a separate block
console.group('a'); 
  console.warn('warning!'); 
  console.error('error'); 
  console.log('heyya'); 
console.groupEnd('a'); 
console.log('new '); 

//'var' keyword. It is used to declare a variable in JavaScript
var name = 'sheo';
var age = 25;

//we declare variable with 'let' is same as 'var' however this is better managed in terms of scope.
let name = 'sheo';
let age = 25;
// const keyword is same as let but it's value can't be changed once it is assigned.
const myAge = 9;
const person = {
    name: "Sheo",
    age: myAge}

 //JavaScript includes primitive and non-primitive data types
//  Primitive Data Types
//1 String-A string is textual content
//2 Number-represents integer, float, hexadecimal, octal or exponential value.
//3 Boolean-can have only two values, true or false.
//4 Null-variable does not have any value but it will have later on
//5 Undefined-when no value is assigned before using it.
//Non-primitive Data Type
// 1 Object-holds multiple values in terms of properties and methods
// 2 Date-provides Date object to work with date & time including days, months, years, hours, minutes, seconds and milliseconds.
// 3 Array- can store multiple values using special syntax