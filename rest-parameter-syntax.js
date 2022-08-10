/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log('Sum:', sum);

// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log('Sum2:', sum2); //Last 3 numbers ignored as function defined to include 3 parameters


// Function using ...rest
const sumRest = (a, b, c, ...rest) => { //squashing any extra parameters passed in into a rest array within the function
    let sum = a + b + c;
    for (let i of rest) { //to iterate through the rest array and add each additional number
        sum += i;
    }

    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log(sum3)
