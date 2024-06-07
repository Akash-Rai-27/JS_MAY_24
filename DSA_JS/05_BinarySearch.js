const arr = [2,4,6,8,10,12,14,16,18,20];
console.log(arr);
const target  = 2;

const result = binarySearch(arr,target);
console.log(result);

function binarySearch(arr, target){
    let start = 0;
    let end = arr.length -1;

    while(start<=end){
        let mid = Math.floor(start+(end-start)/2);

        if(target == arr[mid]){
            return mid;
        }

        if(target<arr[mid]){
            end = mid-1;
        }
        if(target>arr[mid]){
            start = mid+1;
        }

    }

    return -1;
}

// celing of  a number
// floor of a number


