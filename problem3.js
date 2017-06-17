/*
The prime factors of 13195 are 5, 7, 13 and 29.

Write a function that asks for a number and returns the prime factors of that number
*/
var prompt = require('prompt');
 
prompt.start();

function getNumber() {
  return new Promise((resolve, reject) => {
    prompt.get(['number'], function (err, result) {
      resolve(result.number);
    });
  });
}

function findLargestPrimes(startingVal) {
  const primeFactors = [];
  let denominator = 2;

  while (startingVal !== 1) {
    if (startingVal % denominator === 0) {
      primeFactors.push(denominator);
      startingVal = startingVal / denominator;
    } else {
      denominator++;
    }
  }

  return primeFactors;
}

getNumber()
  .then((number) => {
    console.log('largestPrimeFactors: ', findLargestPrimes(number));
  });
