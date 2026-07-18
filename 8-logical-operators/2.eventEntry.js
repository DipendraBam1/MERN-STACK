let users = [
  { name: "ram", member: true, hasTicket: false },
  { name: "hari", hasTicket: false },
  { name: "sita", member: false, hasTicket: false },
  { name: "shyam", member: false, hasTicket: true },
];

/* EXPECTED-OUTPUT
    ram can enter the event 
    hari can not enter the event 
    sita can not enter the event 
    shyam can enter the event 
*/
function canEnter(user) {
  for (i = 0; i < user.length; i++) {
    if (user[i].member == true || user[i].hasTicket == true) {
      console.log(`${user[i].name} can enter the event`);
    } else {
      console.log(`${user[i].name} can not enter the event`);
    }
  }
}
canEnter(users);

// function canEnter(user) {

//   if (user.member == true || user.hasTicket == true) {
//     console.log(`${user.name} can enter the event`);
//   } else {
//     console.log(`${user.name} can not enter the event`);
//   }

// }

// canEnter(users[0]);
// canEnter(users[1]);
// canEnter(users[2]);
// canEnter(users[3]);
