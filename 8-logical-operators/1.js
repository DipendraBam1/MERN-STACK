let person1 = {
  age: 18,
  consent: true,
};

let person2 = {
  age: 20,
  consent: true,
};

/* 
    TODO: find if they are able to marry with each other. person1&2 , 3&4
    - criteras
        - both shuld be greater than 18
        - both shoulb have consent
*/

let person3 = {
  age: 20,
  consent: true,
};

let person4 = {
  age: 20,
  consent: true,
};

function canMarry(user1, user2) {
  if (
    user1.age > 18 &&
    user2.age > 18 &&
    user1.consent == true &&
    user2.consent == true
  ) {
    console.log("Users can marry !");
  } else {
    console.log("Users can't marry !");
  }
}

canMarry(person1, person2);
canMarry(person3, person4);
