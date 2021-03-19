
// 给定若干个有限小数或者无限循环小数组成的求和表达式，请将小数转化为最简分数表示形式，并求和。
// 输入描述
// 整数部分零不省略，小数部分中循环节用括号标记出来
// 输出描述
// 将表达式转换为最简分数形式，并求和
// 样例输入
// 2.00+0.46+0.25(285714)
// 样例输出
// 2+23/50+177/700=1899/700

// input
let data = "2.00+0.46+0.25(285714)";

// operaiton
let sum = (data)=>{
    let rst = [];
    for(let i=0;i<data.length;i++){
        let temp = data[i].split("(");
        // no ()
        if(temp.length==1){
            rst.push(fraction(temp));
        // has ()
        }else{
            let temp0 = temp[0];
            let temp1 = temp[1].split(")")[0];
            rst.push(fractionLoop(temp0,temp1));
        }
    }
    let rst2 = "";
    let len = rst.length;
    for(let i=0;i<len;i++){
        if(i!=0){
           rst2 += "+";
        }
        rst2 += `${rst[i][0]}/${rst[i][1]}`;
    }
    rst2 += "=";
    return addFraction(rst2,rst);
}

let fraction = (floatNum)=>{
    // num of decimal part
    let dotIdx = floatNum.indexOf(".");
    let totalLen = floatNum.length;
    let numDecimal = totalLen-1-dotIdx;
    let bottom = 10**numDecimal;
    let top = parseFloat(floatNum)*bottom;
    return scale(top,bottom);
}

let fractionLoop = (noLoopNum,loopNum)=>{
    // input: 0.25,285714

    // 1
    let dotIdx = noLoopNum.indexOf(".");
    // 4
    let totalLen = noLoopNum.length;
    // 2
    let decimalLen = totalLen-1-dotIdx;
    // 0
    let intPart = noLoopNum.substring(0,dotIdx);
    // 25
    let decimalPart = noLoopNum.substr(dotIdx+1);
    // 25285714-25
    let top = parseInt(decimalPart + "" + loopNum)-parseInt(decimalPart);   
    // amount of 9
    let amount9 = "";
    for(let i=0;i<loopNum.length;i++){
        amount9 += ""+9;
    }
    let amount0 = ""
    for(let i=0;i<decimalLen;i++){
        amount0 += ""+0;
    }
    // 99999900
    let bottom = amount9+""+amount0;
    
    // if has intPart
    if(intPart!=0){
        top += bottom*intPart;
    }
    return scale(parseInt(top),parseInt(bottom));
}

let addFraction=(outputStr,arr)=>{
    let rst = [0,1];
    // add 2 by 2
    for(let i=0;i<arr.length;i++){
        rst = add2(rst,arr[i]);
    }
    // divide same diveder
    rst = scale(rst[0],rst[1]);
    return `${outputStr}${rst[0]}/${rst[1]}`;
}

// add2
let add2 = (f1,f2)=>{
    let rst = [];
    let x = lcm(f1[1],f2[1]);
    let y = f1[0]*(x/f1[1])+f2[0]*(x/f2[1]);
    let g = gcd(x,y);
    rst.push(y/g);
    rst.push(x/g);
    return rst;
}

// lcm
let lcm = (a,b) =>{
    if(a<b){
        [a,b] = [b,a];
    }
    for(let i=1;i<=b;i++){
        if((a*i)%b==0){
            return a*i;
        }
    }
}

// gcd
let gcd = (a,b)=>{
    if(a<b){
        [a,b] = [b,a];
    }
    return (a%b?gcd(a%b,b):b);
}

let scale = (top,bottom)=>{
    let rst = [];
    let gcdtb = gcd(top,bottom);
    let topNew = top,
        bottomNew=bottom;
    while(gcdtb>1 && Number.isInteger(gcdtb)){
        topNew = topNew/gcdtb;
        bottomNew = bottomNew/gcdtb;
        gcdtb = gcd(topNew,bottomNew);
    }
    rst.push(topNew);
    rst.push(bottomNew);
    return rst;
}
// output
console.log(sum(data));