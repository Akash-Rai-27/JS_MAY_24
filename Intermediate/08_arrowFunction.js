const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}

// user.welcomeMessage()
// user.username = "raka";
// user.welcomeMessage()


// function food(){
//     console.log(this);
// }
// food();

const food = ()=>{
    let username = "hungry"
    console.log(this);
}

food();

