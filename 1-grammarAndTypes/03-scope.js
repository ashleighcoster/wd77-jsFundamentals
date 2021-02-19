/*
    SCOPE

1-grammarAndTypes
    03-scope.js 

*/

//What is scope?
//JS has both LOCAL and GLOBAL scope 


//example 1 
var x = 12; 
//global scope - available and ready and exists anywhere in written code 

function scope(){
    var x = 33; //local scope inside of a function - variables only exist within that function
    console.log(x); //you can also read the global scope (x) inside of this funtion if x isn't defined inside of the function
}

scope(); //using the function 'calling the function' //logs 33
console.log(x); // logs 12


//example 2

var x = 12; 

function scope (){
    x = 33; //variable reassignment - didn't define a new 'x' but reassigned what x is altogether in code 
    console.log(x);
}

scope() //33
console.log(x); //33

//example 3:

var x = 1; 

function scope(){
    var x = 2; //inner scope 
    function scopeInner(){
        var x = 3; //innermost scope
        console.log(x); //consoled first = 3
    }
    scopeInner(); 
    console.log(x); //consoled second = 2
}

scope(); //use 'powertool' = function
console.log(x); //consoled last = 1 

//example 4 contrasts with 5:

var x = 12; 

function scope(){
    var x = 33; 
    if (true){
        let x = 45; 
        console.log(x); //45 from innermost scope
    }
    console.log(x); //33 from middle scope 
}

scope(); //ueses powertool and runs top to bottom
console.log(x); //12 from global scope 

//example 5 contrasts w/4:

var x = 12; 

function scope(){
    var x = 33; 
    if (true){
        var x = 45; //first 45
        console.log(x);
    }
    console.log(x); //second 45 --> var doesn't obey 'block' scope = block scope is just what is inside the second set of curly boys while function scope is what is inside all of the curly boys for whole function 
}

scope();
console.log(x); //global x = 12 