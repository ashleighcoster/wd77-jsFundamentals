/*
LITERALS 
1-grammerAndTYpes
    06-literals.js
*/

let weekDays = ['mon', 'tues', 'wed', 'thurs', 'fri']; 
//                 0    1       2       3          4
console.log(weekDays.toString()); //toString = method - turns variables into a single string 
console.log(weekDays[3]);

let soup = {
    a: 'chicken noodle', 
    b: 'tom',
    c: 'beef barley'
}
console.log(soup.c);

//array and object literals can hold primative and complex types (arrays, objects, functions)  
//arrays and objects (are complex or dynamic types) can change in more/bigger ways that 'primative types' strings, booleans, numbers, nulls, etc. 

let complexArrLiteral = [1, true, 'academy', [1,2,3], {key: 'test'}, function(){return 'yes'}]; 
console.log(complexArrLiteral[5]);
console.log(complexArrLiteral[3]);

let complexObjLiteral = {num: 1, boolean: true, string: 'academy', arr: [1,2,3], obj: {key: 'test'}, func: function(){return 'yes'}}; //starts and ends with curly boys 

console.log(complexObjLiteral.func);
console.log(complexObjLiteral.arr);