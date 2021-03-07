/*
ARRAYS
*/

//Array has [] brackets 
//can hold multiple datatypes
//arrays can list datatypes
//arrays can list datatypes in an ordered, numbered way 

let students = ['tony', 'marshall', 'reese', 'ray', 23, true, ['ryan', 'iesha']];
//hidden keys:   0          1           2       3   4      5    6       

console.log(typeof students); //typeof doesn't tell me it's an array = object
console.log(students instanceof Array); //instanceof tells me my array is an array
console.log(students[2]);
console.log(students[6]);

let name = students[6][1]; //will drill down into the array to get Iesha
console.log(`hello ${name}, you look nice`);

//recall for-of loop --> gives the values of the array 
//'forin" will return numbers (not values) or array
//lets 'f' represent actual value
let food = ['pecan', 'shrimp', 'queso', 'cheese', 'hotdog'];

for(f of food){ //f represents actual values
    console.log(f+ ' is amazing'); //string concatination 
}

//array methods: (MDM docs - Mozilla Documentation Network) - built in functions in js that we can use as long as we have the appropriate method matched with type (array's = '.')

food.push('pizza'); //PUSH = add element to an array that already exists - adds to end of an array 
console.log(food);

// food.splice(1, 1, 'bananas' );
// console.log(food); //SPLICE = take an array, remove some stuff, and add stuff to it's place - takes three arguments = 1. where we want to do the insertion, 2. how many things to remove, 3. what are we replacing it with = took out shrimp and replaced with bananas

food.splice(2, 0, 'sweet potato pie');
console.log(food);

//POP = removes the last element of an array 
food.pop();
console.log(food);

food = food.slice(2, 4); //SLICE = first number is the first element to slice from the array, while second number is the stop position, which is not included
console.log(food);

//forEach allows us to iterate with loops specifically, and we can directly grab both the elements and their index numbers

food.forEach((f) => console.log(f)); //'call back function' - use function inside the paranthesis 

food.forEach((food, index) => { //code to be repeated is the fat arrow =>
    // console.log(food);
    // console.log(index);
    console.log(`The ${food} food is our array is at position ${index}`); //string interpolation 
})

let movies = ['300', 'snow white', 'phantom', 'watchmen','sound of music']; 

movies.push('force awakens');
console.log(movies);

movies.splice(3, 1, 'league of gentleman'); 
console.log(movies);

movies.forEach(movies => console.log(movies));
console.log(movies.length);

//let's do the following with an array:
//we will check if we are working w/an array
//flip the values within the array (what was in index 4 and now in 0, 3, 2 1, etc)
//using a method only, let's print the values of the newly arranged array 

let arr = new Array(1,2,3,4,5);

if (arr instanceof Array) { //everything highlighted will run true or false 
    let revArr = arr.reverse(); //method has to be called like a function with ()
    revArr.forEach(numbers => console.log(numbers));
};