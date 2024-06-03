const arr = [1,2,3,4,5,6,7,8,9,10];

let target = 5;

const result = linearSearch(arr, target);

if(result === -1){
    console.log("NOT FOUND")
}
else{
    console.log("at the index: "+ result);
}

function linearSearch (arr,target){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }
        
    }
    return -1;
}