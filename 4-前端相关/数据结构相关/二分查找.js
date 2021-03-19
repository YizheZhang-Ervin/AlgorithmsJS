let bSearch = (arr,target)=>{
    let left = 0,
        right = arr.length-1;
    while(left<=right){
        let mid = Math.floor((left+right) / 2);
        if(arr[mid]==target){
            return mid;
        }
        // 应该在左部
        else if(target<arr[mid]){
            right = mid - 1;
        // 应该在右部
        }else if(target>arr[mid]){
            left = mid + 1;
        }
    }
    return -1;
}

console.log(bSearch([1,3,5,7,9],3));