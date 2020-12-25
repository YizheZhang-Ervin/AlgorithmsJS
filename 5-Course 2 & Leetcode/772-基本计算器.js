// 输入" 6-4 / 2 "->输出4
// 方法:两个栈，一个存数字，一个存符号

let calculateMain = function(strs){
    let queue = [];
    for(let c of strs){
        // 处理空格
        if(c!=" "){
            queue.push(c);
        }
    }
    queue.push("+");
    return calculate(queue);
}

let calculate = function(queue){
    let sign = "+",
    num = 0,
    stack = [];
    while(!(queue.length==0)){
        // 队头出队
        let c = queue.shift();
        // c是数字时
        if(!isNaN(c)){
            // 方法二: num = 10 * num + c - "0";
            num = parseInt(c);
        // 当遇到左括号时，开始递归调用，球的括号中计算结果，赋值给当前num
        }else if(c=="("){
            num = calculate(queue);
        }else{
            if(sign=="+"){
                stack.push(num);
            }else if(sign=="-"){
                stack.push(-num);
            }else if(sign=="*"){
                stack.push(stack.pop()*num);
            }else if(sign=="/"){
                stack.push(stack.pop()/num);
            }
            num = 0;
            sign = c;
            if(c==")"){
                break;
            }
        }
    }
    // 求总和
    let sum = 0;
    while(!stack.length==0){
        sum+=stack.pop();
    }
    return sum;
}

console.log(calculateMain(" 6-4 / 2 "));