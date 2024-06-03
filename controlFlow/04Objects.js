const myObject = {
    js:'JavaScript',
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}

// for (const key in myObject) {
//     console.log(`${key} --> ${myObject[key]}`);
// }

const program = ['javascript','java','cpp','py','ruby'];

// for(const key in program){
//     console.log(program[key])
// }


const coding = ['js','ruby','java','python','cpp'];

// coding.forEach((item)=>{
//     console.log(item);
// })

// coding.forEach((item,index,ar)=>{
//     console.log(item);
//     console.log(index);
//     console.log(ar);
// })

const myCode = [
    {
        languageName:"JavaScript",
        languageFileName: "js"
    },
    {
        languageName:"Java",
        languageFileName: "java"
    },
    {
        languageName:"C++",
        languageFileName: "cpp"
    }
]

myCode.forEach((item)=>{
    console.log(item.languageName);
})

