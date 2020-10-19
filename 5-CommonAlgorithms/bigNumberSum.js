// 超大整数相加

function bigNumSum(num1,num2){
    var n1 = num1.split("");
    var n2 = num2.split("");
    var current = 0;
    var rst = "";
    while(n1.length || n2.length || current){
        // 对应位相加
        current +=~~n1.pop()+~~n2.pop();
        // 相加结果放入最终结果中
        rst = current % 10 + rst;
        // 大于9则进位c=1，不进位c=0
        current = current % 9
    }
    // 去掉前面的多个0
    return rst.replace(/^0*/,'');
}

var num001 = "87349238473285973856723867325";
var num002 = "000034324382582347583275834758437853843853445";
var rst = bigNumSum(num001,num002);
console.log(rst);