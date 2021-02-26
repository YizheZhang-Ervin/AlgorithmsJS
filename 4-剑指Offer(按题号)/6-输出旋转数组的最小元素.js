// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
// 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
// NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
// 输入:[3,4,5,1,2]，输出:1

function findMin(arr){
    // 空数组
    if(arr.length==0){
        return 0;
    }
    let start = 0,
        end = arr.length-1,
        mid;
    // 判断是否搜索完
    while(start<end+1){
        // 中值索引值
        mid = Math.floor((start+end)/2);
        // 最小在右部: 中值>最右
        if(arr[mid]>arr[end]){
            start = mid + 1;
        // 最小在左部: 中值<最右
        }else if(arr[mid]<arr[end]){
            end = mid - 1;
        }
        // 找到目标: 中值<中值-1
        if(arr[mid]<arr[mid-1]){
            return arr[mid];
        }
    }
}

console.log(findMin([3,4,5,1,2]));

function minNumberInRotateArray(rotateArray)
{
    if(rotateArray.length==0) return 0;
    let left = 0,
        right = rotateArray.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(rotateArray[mid]>rotateArray[right]){
            left=mid+1;
        }else if(rotateArray[mid]<rotateArray[right]){
            right=mid-1;
        }
        if(rotateArray[mid]<rotateArray[mid-1]){
            return rotateArray[mid];
        }
    }
    return 0;
}
console.log(minNumberInRotateArray([3,4,5,1,2]));