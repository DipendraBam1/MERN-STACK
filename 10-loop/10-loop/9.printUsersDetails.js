let users = [
  {
    name: "ram",
    subjects: [
      {
        name: "python",
        price: 1000,
      },
      {
        name: "ai",
        price: 2000,
      },
    ],
  },
  {
    name: "hari",
    subjects: [
      {
        name: "python",
        price: 1000,
      },
      {
        name: "ai",
        price: 2000,
      },
    ],
  },
  {
    name: "sita",
    subjects: [
      {
        name: "python",
        price: 1000,
      },
      {
        name: "ai",
        price: 2000,
      },
      {
        name: "ml",
        price: 2000,
      },
    ],
  },
];

/* 
    output:

*/
function useris(user) {
  for (let i = 0; i < users.length; i++) {
    let username = users[i].name;

    if (username == user) {
      let newSubject = [];
      let totalCost = 0;
      for (let j = 0; j < users[i].subjects.length; j++) {
        newSubject.push(users[i].subjects[j].name);
        totalCost = totalCost + users[i].subjects[j].price;
      }

      console.log(
        `${username} is studying ${newSubject} and his total cost is ${totalCost}`,
      );
    }
  }
}

useris("ram");
useris("sita");
useris("hari");
