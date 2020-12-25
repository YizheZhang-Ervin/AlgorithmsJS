//判断括号有效，()[]{}

var isValid = function(s){
    if(s.length%2===1){
        return false;
    }

    let stack = [];
    let temp = new Map();
    temp.set("(",")");
    temp.set("[","]");
    temp.set("{","}");

    for(let ele of s){
        // 左括号
        if(temp.has(ele)){
            // 左括号入栈
            stack.push(ele);
        // 右括号
        }else{
            // 栈顶元素
            let top = stack[-1];
            // 栈顶左括号元素与当前右括号元素匹配则弹出栈顶
            if(temp.get(ele)===top){
                stack.pop();
            }
        }
    }
    if(stack.length===0){
        return true;
    }else{
        return false;
    }
}

let rst1 = isValid("([{]){}");
let rst2 = isValid("()[]{}");
console.log(rst1,rst2)