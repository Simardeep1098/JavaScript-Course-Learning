
// FOR-IN
// 
// const person = {
//         name: 'Simar',
//         age: 23 
// };
// for (let key in person)
// console.log(key, person[key]);

// const colors = ['red', 'green', 'blue'];
// for (let index in colors)
//         console.log(index, colors[index]);


// Break COntinue
//
// let i=0;
// while (i <= 10) {
//         // if ( i === 5) break;
//         // console.log(i);
//         // i++;
//         if ( i % 2 == 0) {
//         i++;
//         continue;
// }
//         console.log(i);
//         i++;
// }


// Exercise:::::::::::
// Write a function that takes two numbers and returns the maximum of the two. 
// Both methods shown below are corret. 
//
// let number = max(5,10);
// console.log(number);
//
// function max(a,b) {
//       
// 1..        if ( a > b) return a;
//         return b;
//
// 2...       return (a > b) ? a : b;
// }


// Exercise::::::::::::
// function returns True if it's landscare ( i.e. width > height) else return false.
//
// console.log(isLandscape(800,600));
// function isLandscape(width, height) {
//         return (width > height);
//          }


// FizzBuzz funtion::::::::::::
// const output = FizzBuzz(true);
// console.log(output);
// function FizzBuzz(input){

//     if (typeof input !== 'number')
//     return NaN;

//     if((input % 3 === 0) && (input % 5 === 0))
//     return 'FizzBuzz';

//     if (input % 3 === 0)
//     return 'Fizz';

//     if (input % 5 === 0)
//     return 'Buzz';

//     return input;
// }


// //Check speed , Match.floor Exercise::::::::::
// checkSpeed(131) ;
// function checkSpeed(speed) {

//     const speedLimit = 70;
//     const kmPerPoint = 5;
    
//     if (speed < speedLimit + kmPerPoint){
//         console.log('ok');
//         return;
//     }
//     const points = Math.floor((speed - speedLimit) / kmPerPoint);
//     if (points >= 12)
//         console.log('License Suspended');
//     else
//         console.log('Points:', points);  
// }


// Even Odd (showNumber) Exercise::::::::::::::
// showNumbers(10);
// function showNumbers(limit){
//     for (let i = 0; i <= limit; i++) {

//  1.   if (i % 2 === 0) console.log(i, 'Even');
//         else console.log(i, 'Odd');
    
//  2.  const message = (i % 2 === 0) ? 'Even' : 'Odd' 
//         console.log(i, message);
    
// }
// }


