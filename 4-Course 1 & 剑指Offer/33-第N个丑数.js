// 把只包含质因子2、3和5的数称作丑数（Ugly Number）。
// 例如6、8都是丑数，但14不是，因为它包含质因子7。 
// 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
// 输入:7，输出:8

function uglyNum(idx){
    // 要第0个数，则返回0
    if(idx==0){
        return 0;
    }
    // 初始化数组及三个指针
    let arr = [1],
        p2 = 0,
        p3 = 0,
        p5 = 0;

    for(let i=1;i<idx;i++){
        // 取各指针对应的前一个丑数*(2或3或5)中结果的最小值
        arr[i] = Math.min(arr[p2]*2,arr[p3]*3,arr[p5]*5);
        // 是几的倍数，这个倍数的指针就+1
        if(arr[i]==arr[p2]*2){
            p2++;
        }
        if(arr[i]==arr[p3]*3){
            p3++;
        }
        if(arr[i]==arr[p5]*5){
            p5++;
        }
    }
    return arr[idx-1];
}

console.log(uglyNum(7));