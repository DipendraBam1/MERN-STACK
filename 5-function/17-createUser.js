/*
TODO: Create a function called createUser that takes name, age, and email, and returns a user object with those properties.

Example:
createUser("Ram", 25, "ram@email.com") ➞ { name: "Ram", age: 25, email: "ram@email.com" }
createUser("Sita", 22, "sita@email.com") ➞ { name: "Sita", age: 22, email: "sita@email.com" }
*/


let users = [];

function createUser(name, age, email) {
  users[users.length] = {
    name: name,
    age: age,
    email: email
  };
}

createUser("ram", 20, "ram@gmail.com");
createUser("shyam", 24, "shyam123@gmail.com");

console.log(users);
 
