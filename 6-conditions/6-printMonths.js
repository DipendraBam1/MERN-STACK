/* 

create a function  getMonthName  to get the name of different months. 

   let name =  getMonthName(1)
   console.log(name)

    TODO:
    if i pass argument 1, it should give me January
    if i pass argument 2, it should give me February
    and so on....

    if i pass other than 1 to 12, it should give not a valid input

    
*/

/* 
    if else vs switch
*/

function getMonthName(month) {
  switch (month) {
    case 1:
      return "January";

    case 2:
      return "February";

    case 3:
      return "March";

    case 4:
      return "April";

    case 5:
      return "May";

    case 6:
      return "June";

    case 7:
      return "July";

    case 8:
      return "August";

    case 9:
      return "September";

    case 10:
      return "October";

    case 11:
      return "November";

    case 12:
      return "December";

    default:
      return "not a valid input";
  }
}

console.log(getMonthName(1));
console.log(getMonthName(2));
console.log(getMonthName(12));
console.log(getMonthName(15));
