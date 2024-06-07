// const promiseOne = new Promise((resolve, reject)=>{

    
//     setTimeout(()=>{
//         console.log('Async task is compelete');
//         resolve();
//     },1000)
// });

// promiseOne.then(()=>{
//     console.log("Promise consumed")
// })


// const promiseThree = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//     resolve({username:"chai", email:"chai@example.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })

// const promiseFour = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             resolve({username:"chai",fame:"code"})
//         } else {
//             reject('Error something went wrong!!!')
//         }
//     },1000)
// })

// promiseFour

// .then((user)=>{
//     console.log(user)
//     return user.username;
// })

// .then((username)=>{
//     console.log(username);
// })

// .catch((error)=>{
//     console.log(error);
// })

// .finally(()=>{
//     console.log("finally exectured")
// })

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"Water",fame:"gunsss"})
        } else {
            reject('Error something went wrong with waterguns');
        }
    },1000)
})

async function consumePromiseFive(){

    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }

}

consumePromiseFive();