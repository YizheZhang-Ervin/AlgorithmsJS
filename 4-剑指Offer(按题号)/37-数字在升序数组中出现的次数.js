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
                right = mid - 1;
            }
        // 找下边界
        } else {
            // 中间值<目标值，目标在右，直到找到第一个小于目标值的位置
            if (arr[mid] < num) {
                left = mid + 1;
            // 中间值>=目标值，目标在左
            } else{
                right = mid - 1;
            }
        }
    }
    return left;
}

function countNum(arr, num) {
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