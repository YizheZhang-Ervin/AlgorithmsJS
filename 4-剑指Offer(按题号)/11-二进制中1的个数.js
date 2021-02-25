// 输入一个整数，输出该数32位二进制表示中1的个数。其中负数用补码表示。
// 输入:10，输出:2

function numberOf1(n){
    // 计数countOf1
    let countOf1 = 0;
    while(n!=0){
        // console.log(n.toString(2),(n-1).toString(2))
        // 每与一次，去掉从低位到高位的连续零
        n = n & (n-1);
        // 计数+1
        countOf1++;
    }
    return countOf1;
}

console.log(numberOf1(10));