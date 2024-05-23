// singleton
// object.create --> create singleton
// using consstructor --- singleton

// object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "hitesh",
    [mySym] : "jokeer",
    age: 20,
    location : "Kanpur",
    email: "sky@gmail.com",
    isLoggedIn : false,
    days:["Sunday","Saturday"],
}


jsUser.email = "orangecat@gmail.com";

// console.log(jsUser["days"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);
// console.log(jsUser["email"]);
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("night nighty party");
}

console.log(jsUser)
console.log(jsUser.greeting());