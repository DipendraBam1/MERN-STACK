let name = "ram";
let email = "ram@ram.com";
let password = "ram-password";

function checkPassword(pass){
if(pass == password){
    console.log("logged in sucessfull");
}else{
        console.log("invalid credential");

}

}

function checkCredential(emails,pass){
if(emails == email && pass == password){
    console.log("logged in sucessfull");
}else{
        console.log("invalid credential");

}

}

/* EXPECTED-OUTPUT */
checkPassword("ram-password"); //  logged in
checkPassword("ram-wrong-password"); //  Invalid Credentials
checkCredential("ram@ram.com","ram-password"); //  logged in

/* 
    TODO: 
    create a function checkPassword  
    and 
    if the password matches for above user, print  logged in else print invalid credentials


    as self-research check for Logical operators too AND(&&) , OR(||) , NOT(!)
    THEN , 
    MUTATE/UPDATE THE FUNCTION  checkPassword

    checkPassword("ram@ram.com","ram-password")   // user logged in 
    checkPassword("ram@ram.com","ram-wrong-password")   // Invalid Credentails
    checkPassword("shayam@shyam.com","ram-password")   // Invalid Credentails


*/
