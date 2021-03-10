// 给你一根长度为n的绳子，请把绳子剪成整数长的m段（m、n都是整数，n>1并且m>1，m<=n），
// 每段绳子的长度记为k[1],...,k[m]。请问k[1]x...xk[m]可能的最大乘积是多少？
// 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
// 输入一个数n，意义见题面。（2 <= n <= 60），输出答案。
// 输入:8,输出:18

function cutRope(number){
    // 总长度为2，剪成1*1
    if(number==2){
        return 1;
    }
    // 总长度为3，剪成2*1
    if(number==3){
        return 2;
    }
    // 总共可以剪成的3的段数count，余下部分长度rest
    // number>5,剪3
    let count = Math.floor(number/3),
        rest = number%3;
    // rest=0,正好全是3
    if(rest==0){
        return 3**count;
    }
    // rest=1,拿一个3出来组成4,剪2*2
    if(rest==1){
        return 3**(count-1)*2*2;
    }
    // rest=2，不剪单独一段2
    if(rest==2){
        return 3**count*2;
    }
}

console.log(cutRope(8));