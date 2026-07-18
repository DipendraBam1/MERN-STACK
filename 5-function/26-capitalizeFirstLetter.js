/*
TODO: Create a function called capitalizeFirstLetter that takes a string and returns the same string with the first letter capitalized.

Example:
capitalizeFirstLetter("hello") ➞ "Hello"
capitalizeFirstLetter("world") ➞ "World"
capitalizeFirstLetter("javascript") ➞ "Javascript"
*/

function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
    // return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter("hello"));

