let numbers = [10, 20, 30, 40, 50];

/*
TODO: Create a function called calculateAverage that takes an array of numbers and returns their average.

Example:
calculateAverage(numbers) ➞ 30
calculateAverage([1, 2, 3]) ➞ 2
calculateAverage([5]) ➞ 5
*/

 function calculateAverage(arr) {
  let total = 0;

  arr.forEach((element) => {
    total = total + element;
  });

  return total / arr.length;
}

console.log(calculateAverage(numbers));
console.log(calculateAverage([1, 2, 3]));
console.log(calculateAverage([5]));
