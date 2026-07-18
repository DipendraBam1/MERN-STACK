let emptyArray = [];
let numbersArray = [1, 2, 3];

/*
TODO: Create a function called isArrayEmpty that takes an array and returns true if it's empty, false otherwise.

Example:
isArrayEmpty(emptyArray) ➞ true
isArrayEmpty(numbersArray) ➞ false
isArrayEmpty([]) ➞ true
*/

function isArrayEmpty(arr) {
  if (arr.length == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isArrayEmpty(emptyArray));
console.log(isArrayEmpty(numbersArray));
console.log(isArrayEmpty([]));
