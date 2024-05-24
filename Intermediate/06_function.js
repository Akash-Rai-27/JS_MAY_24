function myfun(){
    console.log("Batman calls a funtion")
};

// myfun();

function addTwoNumbers(num1, num2){
    console.log(num1+num2);
}

// addTwoNumbers(22,22);
function loginUserMessage(username = "ginger"){
    return `${username} just logged in`
}

// console.log(loginUserMessage("potato"));

function addCartPrice(...num1){
    return num1;
}

console.log(addCartPrice(200, 200, 300, 400))

const user = {
    username: "hitesh",
    price: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`)
}

handleObject(user);