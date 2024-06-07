// floor of a number

const arr = [2,3,5,9,14,16,18];
let target = 10;

let result = arr[floorOfNumber(arr,target)];
console.log(result);


function floorOfNumber(arr, target){
    let start  = 0;
    let end = arr.length -1;

    while(start<=end){
        let mid = Math.floor(start+(end-start)/2);
        // console.log(mid);

        if(arr[mid] === target){
            return mid;
        }

        if(arr[mid]<target){
            start = mid+1;
        }

        else if(arr[mid]>target){
            end = mid -1;
        }
        
    }
    return end;
}