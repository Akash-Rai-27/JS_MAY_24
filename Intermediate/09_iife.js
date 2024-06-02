// immediately invoked function ecpression (iife)
 // ()()

(function chai () {
    console.log('DB connected');
})();

// (()=>{
//     console.log("DB connected again");
// })();

((name)=>{
    console.log(`DB connect two ${name}`);
})("batman");