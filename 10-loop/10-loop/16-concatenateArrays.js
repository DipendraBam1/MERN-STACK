let fruits = ["apple", "banana"];
let vegetables = ["carrot", "potato"];

let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];

/*
TODO: Create a function called concatenateArrays that takes two arrays and returns a new array with elements from both.

Example:
concatenateArrays(fruits, vegetables) ➞ ["apple", "banana", "carrot", "potato"]
concatenateArrays(numbers1, numbers2) ➞ [1, 2, 3, 4, 5, 6]
*/
function concatenateArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log(concatenateArrays(fruits, vegetables));
console.log(concatenateArrays(numbers1, numbers2));

// function concatenateArrays(arr1, arr2) {
//     let newArray = [];

//     for(let i = 0; i < arr1.length; i++) {
//         newArray.push(arr1[i]);
//     }

//     for(let i = 0; i < arr2.length; i++) {
//         newArray.push(arr2[i]);
//     }

//     return newArray;
// }

// console.log(concatenateArrays(fruits, vegetables));