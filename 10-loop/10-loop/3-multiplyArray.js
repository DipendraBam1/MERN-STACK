let numbers = [2, 3, 4, 5];

/*
TODO: Create a function called multiplyArray that takes an array of numbers and returns their product (all multiplied together).

Example:
multiplyArray(numbers) ➞ 120
multiplyArray([1, 2, 3]) ➞ 6
multiplyArray([10]) ➞ 10
*/
let result = 1;
function multiplyArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    result = arr[i] * result;
  }
  return result;
}

// console.log(multiplyArray(numbers));
// console.log(multiplyArray([1, 2, 3]));
// console.log(multiplyArray([10]));
