
// search in String

// const str = "SandWorm";
// let target = 'u';
// console.log(searchInString(str,target))

function searchInString(str, target){
    if(str.length === 0){
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        if(str[i] === target){
            return true;
        }
    }

    return false;
}

// search in range

// const arr = [1,2,3,4,5,6,7,8,9,10];
// let target = 4;
// let start = 1;
// let end = 7;
// console.log(searchInRange(arr,target,start,end));

function searchInRange(arr, target, start,end){
    if(arr.length === 0){
        return -1;
    }

    for(let i= start; i<=end; i++){
        if(target === arr[i]) return i
    }
    return -1;
}



