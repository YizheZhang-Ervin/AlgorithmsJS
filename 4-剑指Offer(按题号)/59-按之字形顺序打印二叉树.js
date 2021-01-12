// 请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，
// 第三行按照从左到右的顺序打印，其他行以此类推。
// 输入:{8,6,10,5,7,9,11}，输出:[[8],[10,6],[5,7,9,11]]

function print(pRoot){
    // 存放奇数行的节点stack1，存放偶数行的节点stack2，判断是否为奇数行isOddRow，总结果集rst
    let stack1 = [],
        stack2 = [],
        p = pRoot,
        isOddRow = true,
        rst = [];
    stack1.push(p);
    // 根节点为空，则返回空数组
    if(!p){
        return rst;
    }
    // 奇数栈和偶数栈不空则循环
    while(stack1.length || stack2.length){
        // 存放临时结果
        let rstTemp = [];
        // 奇数行
        if(isOddRow){
            // 遍历奇数栈
            while(stack1.length){
                // 取栈顶节点
                let root = stack1.pop();
                // 节点值加入临时结果集
                rstTemp.push(root.val);
                // 节点的左右子树(即下一行)加入偶数栈中
                if(root.left){
                    stack2.push(root.left)
                }
                if(root.right){
                    stack2.push(root.right)
                }
            }
        // 偶数行
        }else{
            // 遍历偶数栈
            while(stack2.length){
                // 取栈顶节点
                let root = stack2.pop();
                // 节点值加入临时结果集
                rstTemp.push(root.val);
                // 节点的左右子树(即下一行)加入奇数栈中
                if(root.right){
                    stack1.push(root.right)
                }
                if(root.left){
                    stack1.push(root.left)
                }
            }
        }
        // 改变奇偶行标记
        isOddRow = !isOddRow;
        // 临时结果加入总结果集中
        rst.push(rstTemp);
    }
    return rst;
}

let n7 = {val:11,left:null,right:null};
let n6 = {val:9,left:null,right:null};
let n5 = {val:7,left:null,right:null};
let n4 = {val:5,left:null,right:null};
let n3 = {val:10,left:n6,right:n7};
let n2 = {val:6,left:n4,right:n5};
let n1 = {val:8,left:n2,right:n3};
console.log(print(n1));