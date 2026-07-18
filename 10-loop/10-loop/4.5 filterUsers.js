let users = [
  {
    name: "ram",
    age: 15,
  },
  {
    name: "hari",
    age: 19,
  },
  {
    name: "shyam",
    age: 20,
  },
  {
    name: "gita",
    age: 21,
  },
  {
    name: "alex",
    age: 22,
  },
];

/* TODO: create an new array having user of age > 20 only */
// let newUser = [];
// function agerUsers(user) {
//   for (let i = 0; i < user.length; i++) {
//     if (user[i].age > 20) {
//       newUser.push(user[i]);
//     }
//   }
// }
// agerUsers(users);
// console.log(newUser);

// let newArrays = [];
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].age > 20) {
//       newArrays.push(users[i]);
//     }
//   }
//   console.log(newArrays);

 
 let newUsers=users.filter((user)=>{
  return user.age>20
})
 console.log(newUsers);
 