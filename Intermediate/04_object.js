// const tinderUSer  = new Object(); --- singleton
// const tinderUSer = {}; --- non-singleton
const tinderUSer = {};

tinderUSer.id = "1234abc";
tinderUSer.name = "Sammy";
tinderUSer.isLoggedIn = false;
// console.log(tinderUSer);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "orangeCat@gmail.com"
    }
]