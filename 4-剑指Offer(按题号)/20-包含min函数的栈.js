// 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。

class Stack{
    constructor(){
        this.stack = [];
        this.minStack = [];
        this.temp = null;
    }
    push(val){
        // 全局最小值不为空
        if(this.temp!=null){
            // 压入值<全局最小值，最小栈压入压入值
            if(val<this.temp){
                this.stack.push(val);
                this.minStack.push(val);
            // 压入值>=全局最小值，最小栈压入全局最小值
            }else{
                this.stack.push(val);
                this.minStack.push(this.temp);
            }
        // 全局最小值为空，设置全局最小值为压入值
        }else{
            this.temp = val;
            this.stack.push(val);
            this.minStack.push(val);
        }
        
    }
    pop(){
        this.stack.pop();
        this.minStack.pop();
    }
    top(){
        return this.stack[this.stack.length-1];
    }
    min(){
        return this.minStack[this.minStack.length-1];
    }
}

let s = new Stack();
s.push(5);
s.push(3);
s.push(1);
console.log(s.top());
console.log(s.min());
s.pop()
console.log(s.min());

let minStackTest = ()=>{
    let stack = [];
    let minStack = [];
    let tempMin;
    function push(node)
    {
        stack.push(node);
        if(stack.length==0){
            tempMin = node;
        }else{
            if(node<tempMin){
                tempMin = node;
            }else{
                tempMin = tempMin || stack[0];
            }
        }
        minStack.push(tempMin);
    }
    function pop()
    {
        stack.pop();
        minStack.pop();
    }
    function top()
    {
        return stack[stack.length-1];
    }
    function min()
    {
        return minStack[minStack.length-1];
    }
    push(3)
    console.log(min())
    push(4)
    console.log(min())
    push(2)
    console.log(min())
    push(3)
    console.log(min())
    pop()
    console.log(min())
    pop()
    console.log(min())
    pop()
    console.log(min())
    push(0)
    console.log(min())
}

minStackTest();