/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

const lowest = 1;
const highest = 10;

function getArrayOfNumbers(lowest, highest) {
  const array = [];
  for (let i=lowest; i<=highest; i++) {
    array.push(i);
  }

  return array;
}

function multiplyAllNumbers(array) {
  return array.reduce((total, num) => {
    return total = total * num;
  }, 1);
}

function findSmallestNumber(smallestNum, array) {

  const lastNum = array[array.length-1];
  let nextNum;

  while (isDivisible(smallestNum, array)) {

    for (let i=1; i<array.length; i++) {
      if (smallestNum % array[i] === 0) {
        nextNum = smallestNum / array[i];
        break;
      };
    }

    if (isDivisible(nextNum, array)) {

      // console.log('inside if');
      smallestNum = nextNum;
    } else {
      return smallestNum;
    }
  }

  return smallestNum;
}

function isDivisible(smallestNum, array) {
  return array.reduce((divisibleByAll, num) => {
    if (smallestNum % num !== 0) {
      return false;
    }
    return divisibleByAll;
  }, true);
}

const array = getArrayOfNumbers(lowest, highest);

const total = multiplyAllNumbers(array);

console.log(total);

// console.log(isDivisible(23, [1, 2, 3, 4]));

console.log(findSmallestNumber(total, array));

