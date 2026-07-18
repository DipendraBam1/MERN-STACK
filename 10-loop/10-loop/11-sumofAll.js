

// function sum(...num){ //  change necessary parameters.
// let result =0;
// for(let i =0; i<num.length;i++){
// result = result + num[i];
// }
//     return result;
// }


// console.log(sum(1,2)) // 3
// console.log(sum(1,2,3)) //6
// console.log(sum(1,2,3,4)) // 10



function sum(...num){  
    let result =0;
  num.forEach((items)=>{
    result = result + items;
 })
 return result;
}
console.log(sum(1,2))
console.log(sum(1,2,3))
/* TODO: create a function is such a way that the function should handle all the arguements we pass to it.  */