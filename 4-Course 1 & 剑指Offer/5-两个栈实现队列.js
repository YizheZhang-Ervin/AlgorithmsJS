// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

class Queue{
    constructor(){
        // 压入栈
        this.stack1 = [];
        // 弹出栈
        this.stack2 = [];
    }
    push(val){
        this.stack1.push(val);
    }
    pop(){
        // 弹出栈为空
        if(this.stack2.length==0){
            // 压入栈为空
            if(this.stack1.length==0){
                return null;
            // 压入栈不空
            }else{
                // 压入栈的所有数据弹出并压入到弹出栈
                while(this.stack1.length!=0){
                    this.stack2.push(this.stack1.pop());
                }
                return this.stack2.pop();
            }
        // 弹出栈不空    
        }else{
            return this.stack2.pop();
        }
    }
}

let q = new Queue();
q.push(1);
q.push(2);
console.log(q.pop());
console.log(q.pop());