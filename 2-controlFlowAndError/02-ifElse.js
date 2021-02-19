//IF ELSE

let weather = 75; 

if (weather < 70){
    console.log('wear a jacket');
} else {
    console.log('no jacket necessary');
}

//you can blend complex conditioinals and if-else statements based upon your need:
if (weather > 70 && typeof weather === 'number'){
    console.log('this weather is amazing');
} else {
    console.log('either the temp is cool, the variable is not a string or both');
}

//ELSE IF 
//if -elseif statements can be chained 

let age = 30;

if (age >= 25){
    console.log('rent car');
} else if (age >= 21){
    console.log('drink');
} else if (age >= 18){
    console.log('vote');
} else {
    console.log('no go');
}