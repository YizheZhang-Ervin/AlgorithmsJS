// 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。
// 假设压入栈的所有数字均不相等。
// 例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，
// 但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）
// 输入:[1,2,3,4,5],[4,3,5,1,2]，输出:false

function isPopOrder(pushV, popV){
    let stack = [];
    // 把压入队列中数字一个个压入栈
    for(let i=0;i<pushV.length;i++){
        stack.push(pushV[i]);
        // 每压入一个，就判断栈顶是否等于弹出队列的队头 且 栈是否为空
        while(stack.length!=0 && stack[stack.length-1]==popV[0]){
            // 移出弹出队列队头
            popV.shift();
            // 弹出栈顶
            stack.pop();
        }
    }
    // 栈空则说明是弹出序列
    return stack.length===0;
}

console.log(isPopOrder([1,2,3,4,5],[4,3,5,1,2]));
console.log(isPopOrder([1,2,3,4,5],[4,3,5,2,1]));