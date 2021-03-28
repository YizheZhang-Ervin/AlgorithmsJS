// 将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。 
// 数值为0或者字符串不是一个合法的数值则返回0
// 输入一个字符串,包括数字字母符号,可以为空，如果是合法的数值表达则返回该数字，否则返回0
// 输入:"+2147483647"，输出:2147483647

function strToNum(str){
    let first = str[0],
        regStart = /[1-9\+\-]/,
        regStart2 = /[1-9\-]/,
        regOne = /[1-9]/,
        regContent = /^[0-9]*$/;
    //判断字符串长度为1时
    if(str.length==1){
        // 判断是否为数字1-9
        if(!regOne.test(str)){
            return 0;
        }
    }else{
        // 判断开头是否是正号、负号、数字
        if(!regStart.test(first)){
            return 0;
        }
        // 判断是否第一个数之后的串都是数字
        if(!regContent.test(str.slice(1))){
            return 0;
        }
    }
    // 如果数字或负号开头
    if(regStart2.test(first)){
        return Number(str);
    // 如果正号开头
    }else{
        return Number(str.slice(1));
    }
}

// console.log(strToNum("+122"));

function StrToInt(str)
{
    // 是否为空或者数字0
    // if(!str || 1*str==0) return 0;
    // 输出数字
    let rst = 1*str;
    return rst?rst:0;
}

console.log(StrToInt("abc"));