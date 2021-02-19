/*
ARROW FUNCTIONS
*/

//normal function declaration 
function coffee(){
    return 'coffee is good';
}

//normal function expression 
let tea = function(){
   return 'tea is healthy'; 
}

console.log(coffee()); 
console.log(tea()); 

//arrow functions are always anonymous 
//arrow function expression
let hotChocolate = () => { //the arrow equals the 'function' 
    return 'hot chocolate is king';
}

console.log(hotChocolate()); 

let animals = (kittens, puppies) => {return `I have ${kittens} cat(s) and ${puppies} dog(s)`};

console.log(animals(3, 2));
console.log(animals(0,0));
//arrow functions do not get hoisted - must console.log AFTER the function is written in the code 

//concise vs. block body 
//consise body:
let apples = x => `There are ${x} apples`; //backticks = string interpolation 
console.log(apples(10));
//x = single argument so no need for ""
//don't need () or {} to return something fast => after the arrow - don't need the extra syntax 

//block body 
let bananas = (x) => {
    return `There are ${x} bananas`;
}
console.log(bananas(5));

//return must be explicitly written in a block-body arrow function

let func = () => 'hi'; 
console.log(func());

let secondFunc = () => 'hi'; 
console.log(secondFunc());