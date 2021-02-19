/*
HOISTING

1-grammarAndTypes
    04-hoisting.js

*/

//example 1:
console.log(scissors);
var scissors = 'blue';
//var declaration = variable initialization 

//example 1 breakdown: var scissors got 'hoisted' to the top; js pulls all variables and functions to top of file; can define variables after using them because of hoisting 
var scissors; 
console.log(scissors);
scissors = 'blue'; 

//example 2: functions hoist and entire file hoists
function hoistTest(){
    console.log(testVar); //consoled undefined
    var testVar = 10; 
    console.log(testVar);
}

hoistTest();

//example 2 breakdown: what is really happening in example above 
function hoistTest(){
    var testVar; //variable declaration moves to the top with hoisting 
    console.log(testVar);
    testVar = 10; 
    console.log(testVar);
}

hoistTest();

//always define/declare and initialize variables first - don't rely on hoisting - not good practice 