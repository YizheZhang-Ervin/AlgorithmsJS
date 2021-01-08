// 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
// 请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
// 比如n=3时，2*3的矩形块有3种覆盖方法
// 输入:4，输出:5

function rectCover(number){
    let n1=1,
        n2=2,
        temp;
    for(let i=3;i<=number;i++){
        temp = n2;
        n2 = n1+n2;
        n1 = temp;
    }
    return n2;
}

console.log(rectCover(4));