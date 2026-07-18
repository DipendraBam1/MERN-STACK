const users = [
  {
    name: "Ram",
    percentage: 98,
  },
  {
    name: "john",
    percentage: 65,
  },
  {
    name: "sita",
    percentage: 80,
  },
];

/* 
Score Range	Letter Grade
90 - 100	A
80 - 89.9	B
70 - 79.9	C
60 - 69.9	D 
Below 60	F 
*/

// TODO: add grade property to above users. for all of them.
function addGrade(users) {
 
  for (let i = 0; i < users.length; i++) {
    if (users[i].percentage >= 90) {
      users[i].grade = "A";
    } else if (users[i].percentage >= 80) {
      users[i].grade = "B";
    } else if (users[i].percentage >= 70) {
      users[i].grade = "C";
    } else if (users[i].percentage >= 60) {
      users[i].grade = "D";
    } else {
      users[i].grade = "F";
    }
   }

 }

addGrade(users);
console.log(users);
