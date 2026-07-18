/* 
    TODO: 1
    create a function generateEvenNumber 
    and if we pass an arguement 10,
    then output should be 2, 4, 6, 8 ,10 

*/
function generateNumber(num) {
  for (i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
generateNumber(10);
/* 

    TODO: 2
    create a function identifyEvenNumber
    if we pass an arguement 2, 
    the result should be yes it is an even number

    if we pass an arguement 1, 
    the result should be No it is not an even number

    if we pass an arguement "hello", 
    the result should be the provided data is not an number. 




*/
function identifyEvenNumber(num){
if (typeof num !== "number") {
  console.log("the provided data is not an number");
} else if(num%2==0){
    console.log("yes it is an even number");
}
else {
    console.log("No it is not an even number")
}
}
identifyEvenNumber(2);
identifyEvenNumber(1);
identifyEvenNumber("hello");