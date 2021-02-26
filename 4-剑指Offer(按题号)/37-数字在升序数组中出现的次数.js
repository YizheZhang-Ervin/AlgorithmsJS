// 统计一个数字在升序数组中出现的次数。
// 输入:[1,2,3,3,3,3,4,5],3，输出:4

function findBound(arr, num, bound = "upper") {
    let left = 0,
        right = arr.length - 1,
        mid;
    while (left < right) {
        mid = Math.floor((left + right) / 2);
        // 找上边界
        if (bound == "upper") {
            // 中间值<=目标值，目标在右，直到找到第一个大于目标值的位置
            if (arr[mid] <= num) {
                left = mid + 1;
            // 中间值>目标值，目标在左
            } else{
                right = mid;
            }
        // 找下边界
        } else {
            // 中间值<目标值，目标在右，直到找到第一个小于目标值的位置
            if (arr[mid] < num) {
                left = mid + 1;
            // 中间值>=目标值，目标在左
            } else{
                right = mid;
            }
        }
    }
    return left;
}

function countNum(arr, num) {
    if(arr.indexOf(num)==-1){
        return 0
    }
    let upBound = findBound(arr, num, "upper"),
        lowBound = findBound(arr, num, "lower");
    // 如果上界在数组末尾
    if (arr[upBound] == num && upBound == arr.length - 1) {
        return upBound - lowBound + 1;
    }
    // 如果上界不在数组末尾
    return upBound - lowBound;
}

console.log(countNum([1,2,3,3,3,3,4,5],3));

function GetNumberOfK(data, k)
{
    if(data.indexOf(k)==-1){
        return 0
    }
    let left1 = 0,
        right1 = data.length-1,
        left2 = 0,
        right2 = data.length-1;
    // 查下界:最后一步是left=mid+1，所以left查到的是下边界的k
    while(left1<right1){
        let mid = Math.floor((left1+right1)/2);
        // 目标<=中间数，目标在左
        if(k<=data[mid]){
            right1 = mid;
        }else{
            left1 = mid+1;
        }
    }
    // 查上界: 最后一步是left=mid+1，所以left查到的是上边界的k后面一个数
    while(left2<right2){
        let mid = Math.floor((left2+right2)/2);
        if(k<data[mid]){
            right2 = mid;
        // 目标>=中间数，目标在右
        }else{
            left2 = mid+1;
        }
    }
    console.log(left2,left1)
    if(data[left2]==k && left2==data.length-1){
        return left2-left1+1;
    }
    return left2-left1;
}
console.log(GetNumberOfK([1,2,3,3,3,4,5],3));