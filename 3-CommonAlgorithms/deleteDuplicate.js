// 数组去重
// 一次循环+两个辅助变量
function deleteDuplicate(arr){
    var rst = {},newArr = [];
    for(let i=0;i<arr.length;i++){
        let key = arr[i];
        // 判断是否arr前段已有此值
        if(!rst[key]){
            rst[key] = 1;
            newArr.push(key);
        }
    }
    return newArr;
}

// 一次循环+一个辅助变量
function deleteDuplicate2(arr){
    var newArr = [];
    for(let i=0;i<arr.length;i++){
        if(newArr.indexOf(arr[i])<0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var arr001 = [1,2,2,2,3,3,3,4,5,6];
var rst001 = deleteDuplicate(arr001);
var rst002 = deleteDuplicate(arr001);
console.log(rst001);
console.log(rst002);