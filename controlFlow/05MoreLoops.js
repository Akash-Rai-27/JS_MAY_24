// const coding = ['js','ruby','java','python','cpp'];

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index);
// })


// filter


// const nums = [1,2,3,4,5,6,7,8,9,10];


// let newNums = nums.filter( (num)=> {
//     return num > 5
// })

// console.log(newNums);


// reduce

// const nums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = nums.map((num)=> num + 100);
// console.log(newNums);

// const newNums = nums
//                     .map((num)=>num*10)
//                     .map((num)=>num+1)
//                     .filter((num)=>num%2 != 0);

// console.log(newNums);


// reduce

// const nums = [1,2,3,4];
// const newNums = nums.reduce((acc, currval)=>{
//     return acc+ currval
// },0)
// console.log(newNums);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "devops course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 4999
    },
    {
        itemName: "java course",
        price: 1999
    }
]

const total = shoppingCart.reduce((acc,item)=>(acc+ item.price),0);
console.log(total);