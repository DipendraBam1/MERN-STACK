let users = [];

 function addNewUser(name, age, address) {
    let user = {
        name: name,
        age: age,
        address: address
    };

    users.push(user);
}

addNewUser("ram", 21, "kapan");
addNewUser("shyam", 22, "bagbazar");
addNewUser("hari", 22, "jamal");



console.log(users)
/* 
    EXPECTED-OUTPUT:

    [
        { name: 'ram', age: 21, address: 'kapan' },
        { name: 'shyam', age: 22, address: 'bagbazar' },
        { name: 'hari', age: 22, address: 'jamal' }
    ]

*/
