let person1 = {
  firstName: "Ram",
  lastName: "Shrestha"
};

let person2 = {
  firstName: "Sita",
  lastName: "Gurung"
};

/*
TODO: Create a function called getFullName that takes a person object and returns their full name.

Example:
getFullName(person1) ➞ "Ram Shrestha"
getFullName(person2) ➞ "Sita Gurung"
*/
function getFullName(personObj){
  let fullName = personObj.firstName;
  let lastName = personObj.lastName;
  console.log(fullName,lastName);
}
getFullName(person1);
getFullName(person2);