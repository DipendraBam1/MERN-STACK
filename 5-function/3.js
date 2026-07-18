let students = [
  {
    name: "Ramesh",
    scores: [
      { exam: "first-term", gpa: 2 },
      { exam: "second-term", gpa: 4 },
    ],
  },
  {
    name: "Rita",
    scores: [
      { exam: "first-term", gpa: 1.5 },
      { exam: "second-term", gpa: 4 },
    ],
  },
  {
    name: "Kiran",
    scores: [
      { exam: "first-term", gpa: 4 },
      { exam: "second-term", gpa: 2.9 },
    ],
  },
];

function userDetails(index) {
  let student = students[index];
  console.log(`${student?.name} scored gpa ${student?.scores[0].gpa} in ${student?.scores[0].exam} and ${student?.scores[1].gpa} in ${student?.scores[1].exam}
`);
}
userDetails(0);
userDetails(1);
userDetails(2);
userDetails(5); // doesnot give error cause we use '?' optional chaining

/*  
    using functon, achieve the following
    
    EXPECTED-OUTPUT: 
    ramesh scored gpa 2 in first-term and 4 in second-term
    rita scored gpa 1.5 in first-term and 4 in second-term
    kiran scored gpa 4 in first-term and 2.9 in second-term

*/
