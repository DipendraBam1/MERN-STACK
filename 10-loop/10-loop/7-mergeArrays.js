let arr1 = [1, 2];
let arr2 = [3, 4];



function mergeArrays(arr1, arr2) {
    return arr1.concat (arr2); // return [...arr1,...arr2]
 }


let combined = mergeArrays(arr1, arr2);
console.log("combined:",combined)
/* EXPECTED output: 

    combined: [1,2,3,4]

*/