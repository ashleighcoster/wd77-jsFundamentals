let x = 6; 

x > 0 ? console.log('x is positive') : console.log('x negative');

//same as "if else" statements:
if (x>0){
    console.log('x positive');
} else {
    console.log('x negative');
}

let greeting = 'salutations';

if (greeting.length > 10){
    console.log('long');
} else if (greeting.length == 10){
    console.log('exactly');
} else {
    console.log('normal');
}

greeting.length > 10 ? console.log('long') : 
greeting.length == 10 ? console.log('exactly') :
console.log('normal'); 
