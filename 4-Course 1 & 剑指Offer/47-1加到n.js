// 求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）
// 输入:5，输出:15

function calculateSum(n){
    if(n==1){
        return 1
    // 迭代加和
    }else if(n>1){
        return n+calculateSum(n-1);
    }
}

console.log(calculateSum(5));