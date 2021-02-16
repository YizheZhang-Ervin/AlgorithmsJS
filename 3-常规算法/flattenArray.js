// 函数,接受数组作为参数,数组元素为整数或者数组,元素含整数或数组
// 函数返回扁平化后的数组,如：[1, [2, [ [3, 4], 5], 6]] => [1, 2, 3, 4, 5, 6]

// 递归
function flattenArray(arr,rst){
    for(var i=0;i<arr.length;i++){
        var data = arr[i];
        if(typeof data === 'number'){
            rst.push(data);
        }else{
            flattenArray(data,rst);
        }
    }
}

var rst = [];
var arr001 = [1, [2, [ [3, 4], 5], 6]];
flattenArray(arr001,rst);
console.log(rst);