
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


// Exercise::::::::::: count the number fo truthy values

// const array = [0, null, undefined, '' , 2, 3,5];
// console.log(countTruthy(array));
// function countTruthy(array) {
//     let count = 0;
//         for (let value of array)
//             if (value)
//                 count++;
//         return count;
// }


//Exercise::::::::: Show properties

// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };
// showProperties(movie);

// function showProperties(obj) {
//     for (let key in obj)
//         if (typeof obj[key] === 'string')
//             console.log(key, obj[key]);
// }


// //Exercise::::::::: Sum fo multiples of 3 and 5
// console.log(sum(10));

// function sum(limit){
//     let sum = 0;

//     for (let i = 0; i <= limit; i++)
//         if (i % 3 === 0 || i % 5 === 0)
//             sum += i;

//     return sum;
// } 
          

// Exercise:::::::::: average of arrays, calculating grade

// // console.log(calculateGrade(marks));

// function calculateGrade(array) {
//     let sum = 0;
//     for (let value of array)
//         sum += value;
//     return average = sum / array.length;
// }

// function calculateGrade(marks) {
//     const average = calculateAverage(marks);
//     if (average < 60) return 'F';
//     if (average < 70) return 'D';
//     if (average < 80) return 'C';
//     if (average < 90) return 'B';
//     return 'A';
// }

// //Exercise:::::::::::: show stars

// showStars(5);

// function showStars(rows) {
//     for (let row = 1; row <= rows; row++){
//         let pattern = '';
//         for (let i = 1; i < row; i++)
//             pattern += '*';
//         console.log(pattern);
//     }
// }

//Exercise::::::::::::::: Show Prime Numbers Upto n

showPrimes(15);

function showPrimes(limit) {
    for ( let number = 2; number <= limit; number++) 
            if (isPrime(number)) console.log(number);
        
}
    
function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0) 
            return false;
    
    return true;
}