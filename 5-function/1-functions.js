

let users = [
    {
        firstName: "john",
        lastName: "Doe",
        age: 10
    },
    {
        firstName: "Rajesh",
        lastName: "Hamal",
        age: 20
    },
    {
        firstName: "John",
        lastName: "Wick",
        age: 30
    },
]
function printUserDetails(index) {
   console.log(
 `name is ${users[index].firstName} ${users[index].lastName} and age is ${users[index].age}`  );
}
printUserDetails(0);
printUserDetails(1);
printUserDetails(2);

 

/* 
TODO: create a function printUserDetails and re-use it for all users 

output should be as follows 
    name is john doe and age is 10.
    name is rajesh hamal and age is 20.
    name is john wick and age is 30.
*/