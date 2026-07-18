let users = [
  {
    name: "ram",
    subjects: ["python", "ai", "ml"],
  },
  {
    name: "sita",
    subjects: ["python", "ml"],
  },
  {
    name: "hari",
    subjects: ["js", "node"],
  },
];


/* 
    output:
    ram is studying python, ai, ml
    sita is studying python, ml
    hari is studying js, node 

*/
function useris(user){
for(let i =0;i<users.length;i++){
  let username = users[i].name
if( username == user){
  console.log(`${username} is studying ${users[i].subjects}`)
}
  }
}
useris("ram");
useris("sita");
useris("hari");

