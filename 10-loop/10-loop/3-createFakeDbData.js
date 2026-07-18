const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];

/* 

TODO: 
    From the above array create an new array of users with email and password 


    OUTPUT should be like following
    [
        { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
        { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
        { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
        { name: 'Anisha', email: 'anisha@gmail.com', password: 'anisha3' },
    ] 

*/

 
// let newUser = [];
// nepaliNames.forEach((name,idx)=>{
//   newUser.push({
//     name : name,
//     email : `${name}@gmail.com`,
//     password : `${name}${idx}`

//   })
// })
// console.log(newUser);


const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];

const users = nepaliNames.map((name, idx) => {
  return {
    name: name,
    email: `${name.toLowerCase()}@gmail.com`,
    password: `${name.toLowerCase()}${idx}`
  };
});

console.log(users);