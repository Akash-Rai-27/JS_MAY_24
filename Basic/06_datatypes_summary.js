/*
1. primative -- call by value [copy]
- string
- number
- boolean
- null
- undefined
- symbol
- bigint



2. non primative -- call by reference 
- Array
- Objects
- functions


*/

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id);
// console.log(anotherId);
// console.log(id === anotherId);

const heros = ["batman", "superman","wonder woman"];

let objValues = {
    name:"eagle",
    age : 22,
}


const myFunction = function(){
    console.log("Hello monkeys");
}

let bigMe = 1234n;
console.log(typeof bigMe);