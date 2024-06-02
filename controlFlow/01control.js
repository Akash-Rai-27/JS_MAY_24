// if

// if(true){

// }

// comparison  <, >, <= , >=, == , != , ===

// if( isUserloggedIn){

// }

// switch

const month = 5;

switch(month){
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;

    default:
        console.log("default case match");
        break;
}



/*

falsy value

false, 0, -0, bigint 0n, "" , null, undefined, NaN


truty value

"0", "false", " ", [] ,{} , function(){}


*/

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

// nullish coalescing operator (??) : null undefined

let val1;
val1 = undefined ?? "batman";
console.log(val1);


//terniary Operator


// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >=90 ? console.log("more than 90") : console.log("less than 90" );