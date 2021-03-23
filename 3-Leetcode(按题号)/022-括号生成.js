// 生成有效括号组合

let generateParentheses = (n)=>{
    // 定义结果集
    let rst = [];

    let recur = (left,right,str)=>{
        // 左右括号数量都为n
        if(left==n && right==n){
            rst.push(str);
            return;
        }
        // 加左括号
        if(left<n){
            recur(left+1,right,str+"(");
        }
        // 加右括号(右括号不能先于左括号添加)
        if(right<left){
            recur(left,right+1,str+")");
        }
    }
    recur(0,0,"");
    return rst;
}

console.log(generateParentheses(3));
// 00-10-20-30-31-32-33  ((()))
// 00-10-20-21-31-32-33  (()())
// 00-10-20-21-22-32-33  (())()
// 00-10-11-21-31-32-33  ()(())
// 00-10-11-21-22-32-33  ()()()