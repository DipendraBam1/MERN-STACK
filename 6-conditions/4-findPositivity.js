/* TODO:Write a program that takes a number as input and checks if it is positive, negative, or zero or not a number. 


If it is positive, output "The number is positive." 
If it is negative, output "The number is negative." 
If it is zero, output "The number is zero."
If it is not a number, output "The value is not a number"




OUTPUT:

findPositivity(0) -> the number is zero
findPositivity(100) -> the number is positive
findPositivity(-1) -> the number is negative
findPositivity("hello") -> the value is not a number 

 */

function findPositivity(nbr) {
  if (typeof nbr !== "number") {
    console.log("the value is not a number");
  } else if (nbr === 0) {
    console.log("the number is zero");
  } else if (nbr > 0) {
    console.log("the number is positive");
  } else {
    console.log("the number is negative");
  }
}

findPositivity(0);
findPositivity(100);
findPositivity(-1);
findPositivity("hello");
