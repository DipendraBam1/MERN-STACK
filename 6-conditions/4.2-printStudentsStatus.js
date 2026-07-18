let users = [
  { name: "ram", percentage: 39 },
  { name: "sita", percentage: 50 },
  { name: "hari", percentage: 40 },
];

// 40 and > pass
// 40 and < fail

/*  EXPECTED-OUTPUT:

    ram has failed
    sita has passed 
    hari has passed 


*/
function checkResult(index) {
  // if (users[index].percentage >= 40) {
  //   console.log(`${users[index].name} has passed`);
  // } else {
  //   console.log(`${users[index].name} has failed`);
  // }
  let result = users[index].percentage >= 40 ? "pass" : "fail";
  console.log(`${users[index].name} has`, result);
}
checkResult(0);
checkResult(1);
checkResult(2);
