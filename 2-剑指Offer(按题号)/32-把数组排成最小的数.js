// 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
// 例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。
// 输入:[3,32,321]，输出:"321323"

function printMinNumber(numbers){
    // 数组为空，返回空串
    if(numbers==null || numbers.length<1){
        return "";
    }
    // 结果集
    let rst = "";
    // 冒泡排序，ij>ji，则i往后排
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            if(numbers[i]+""+numbers[j]>numbers[j]+""+numbers[i]){
                [numbers[i],numbers[j]] = [numbers[j],numbers[i]];
            }
        }
        // 已确定位置的i加入结果集
        rst+=numbers[i];
    }
    return rst;
}

function printMinNumber2(numbers)
{
    // number空返回""
    if(!numbers || numbers.length==0) return "";
    // 冒泡排序
    for(let i=0;i<numbers.length;i++){
        for(let j=0;j<numbers.length-i-1;j++){
            let num1 = numbers[j]+""+numbers[j+1],
                num2 = numbers[j+1]+""+numbers[j];
            if(num1>num2){
                [numbers[j],numbers[j+1]] = [numbers[j+1],numbers[j]];
            }
        }
    }
    return numbers.join("");
}

console.log(printMinNumber([3,32,321]));
console.log(printMinNumber2([3,32,321]));