

let dashboard = {
    total: 100,
    expired: 24,
    out_of_stock: 20
}
let nepali_digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

function changeToNepali(num){

    let str = num.toString();
    let nepaliNumber = "";
    for (let i =0;i<str.length;i++){
         nepaliNumber = nepaliNumber + nepali_digits[str[i]];
    }
return nepaliNumber;
}

dashboard.total=changeToNepali(dashboard.total);
dashboard.expired=changeToNepali(dashboard.expired);
dashboard.out_of_stock=changeToNepali(dashboard.out_of_stock);

console.log(dashboard);

/*

TODO: CONVERT THE  VALUES OF ABOVE OBJECT TO NEPALI 

__________________________________________________________________________________________________




You may need these concepts
    number.toString()
    string.trim()
    string.split()
    loop
    function


__________________________________________________________________________________________________

OUTPUT SHOULD BE AS BELOW

    dashboard = {
        total: "१००"
        expired: "२४",
        out_of_stock: "२०"
    }

    
*/

 