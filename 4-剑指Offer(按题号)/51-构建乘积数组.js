// 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],
// 其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。
// （注意：规定B[0] = A[1] * A[2] * ... * A[n-1]，B[n-1] = A[0] * A[1] * ... * A[n-2];）
// 对于A长度为1的情况，B无意义，故而无法构建，因此该情况不会存在。
// 输入:[1,2,3,4,5]，输出:[120,60,40,30,24]

function multiply(arr){
    let len = arr.length, 
        B = [];
    // 左下三角
    // 第0行是空所以B[0]赋值1，第1行*arr[0]···第n行*arr[n-1]
    let temp1 = 1;
    for(let i=0;i<len;i++){
        B[i] = temp1;
        temp1 *= arr[i];
    }
    // 右上三角
    // 第n-1行是空所以B[n-1]原值*1，第n-2行*arr[n-1]···第0行*arr[1]
    let temp2 = 1;
    for(let j=len-1;j>-1;j--){
        B[j] *= temp2;
        temp2 *= arr[j];
    }
    return B;
}

console.log(multiply([1,2,3,4,5]));

function multiply2(array)
{
    // 下三角
    let init = 1,
        B = [];
    for(let i=0;i<array.length;i++){
        B[i] = init;
        init *= array[i];
    }
    // 上三角
    let init2 = 1;
    for(let j=array.length-1;j>=0;j--){
        B[j] *= init2;
        init2 *= array[j];
    }
    return B;
}

console.log(multiply2([1,2,3,4,5]));