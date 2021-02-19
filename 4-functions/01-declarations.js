/*
FUNCTIONS
*/

//General ideas: at their broadest level, functions do the following:
//1) They take some input which the function will handle/process
//2) They process the input given to them 
//3) They usually, but not always, return some value
//4) They can be invoked (used) as many times as we want, cutting down on code repetition 

//Example 1:
function newFunc(num){
    return num + 1; 
}

console.log(newFunc(7));
console.log(newFunc(10));
console.log(newFunc(11));
console.log(newFunc(-2));

//example 2:
function sentence(firstName, lastName){
    return `My first name is ${firstName} and my last name is ${lastName}`; 
}

console.log(sentence('Ashleigh', 'Coster'));
console.log(sentence('Kira', 'Coster'));

let superImportantSentence = sentence('ash', 'coster');
console.log(superImportantSentence);

//let's build a function that takes a complex type -- an array in this case, and console.logs each item in the input array

let arr = [1, true, {key: 'string'}, [0, false, null], 'hey'];
let arr2 = [5,6,7,8,9,10];

function iteratorFunc(inputArr){ //this function doesn't 'return' anything - this is call a 'side effect' - logs every element in the array - alternative action to a simple return 
    for (let element of inputArr){
        console.log(element);
    }
}

iteratorFunc(arr);
iteratorFunc(arr2);