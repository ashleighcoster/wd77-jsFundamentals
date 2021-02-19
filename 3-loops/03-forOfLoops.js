/*
FOR OF LOOPS
*/

//of requires that your 'thing' you're looping through be iterable - meaning it needs to be numbered 

//in does not require that the thing you loop through be numbered

// let student = {name: 'Peter', isAwesome = true, degree:'js', week:1};

// for (item of student){
//     console.log(item);
// }

let catArray = ['tabby', 'short', 'burmese', 'maine', 'rag'];

for (cat of catArray){
    console.log(cat, 'says meow');
}