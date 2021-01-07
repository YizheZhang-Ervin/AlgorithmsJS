// 一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。

function findNumsAppearOnce(array){
    return array.filter(num=>array.indexOf(num)==array.lastIndexOf(num));
}

console.log(findNumsAppearOnce([1,1,2,3,3]))