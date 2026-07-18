

const users = [
    {
        name:"Ram",
        percentage:98
    },
    {
        name:"john",
        percentage:65
    },
    {
        name:"sita",
        percentage:80
    },
]


/* 
Score Range	Letter Grade
90 - 100	A
80 - 89.9	B
70 - 79.9	C
60 - 69.9	D 
Below 60	F 
*/


/* TODO:
    add grade property to above users. for all of them.
*/


function calculateGrade(percentage) {

    if (percentage >= 90) {
        return "A";
    }
    else if (percentage >= 80) {
        return "B";
    }
    else if (percentage >= 70) {
        return "C";
    }
    else if (percentage >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}

for (let i = 0; i < users.length; i++) {

    users[i].grade = calculateGrade(users[i].percentage);

}

console.log(users);


/* 
    EXPECTED-OUTPUT on console.log(users)
    [
        {
            name:"Ram",
            percentage:98,
            grade:A
        },
        {
            name:"john",
            percentage:65,
            grade:D
        },
        {
            name:"sita",
            percentage:80,
            grade:B
        },
    ]
    
*/