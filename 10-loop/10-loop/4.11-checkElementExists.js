let vegetables = ["potato", "tomato", "onion", "carrot"];

/* 
TODO: Check if "tomato" exists in the vegetables array and print the result.
Also check if "cabbage" exists.

Hint: You can loop through the array or check each index!

Expected output:
tomato exists: true
cabbage exists: false
*/

function checkVegetables(veg) {
  let found = false;

  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i] == veg) {
      found = true;
    }
  }

  console.log(`${veg} exists: ${found}`);
}

checkVegetables("tomato");
checkVegetables("cabbage");
