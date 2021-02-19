/*
SWITCH STATEMENTS
*/


let friend; 
// or let friend = 'Tom' to run a certain value

switch(friend){
    case 'Tom':
        console.log('bread');
        break; 
    case 'Kenn':
        console.log('wolf');
        break;
    case 'alex':
        console.log('magic cards');
        break; 
    default:
        console.log('do i know you');
}

let yep = true; 

switch(typeof yep == 'string' || typeof yep == 'boolean'){
    case true:
        console.log('yep is string or boolean');
        break; 
    default:
        console.log('not');
}