// nested scope

function one(){
    const username = "sky"
     function two(){
        const website = "joker";
        console.log(username)
     }
   //   console.log(website)

     two()
}

one()

