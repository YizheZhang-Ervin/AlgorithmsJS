// 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
// 输入:{8,6,10,5,7,9,11}，输出:[[8],[6,10],[5,7,9,11]]

function print(pRoot){
    // 存放奇数行的节点queue1，存放偶数行的节点queue2，判断是否为奇数行isOddRow，总结果集rst
    let queue1 = [],
        queue2 = [],
        isOddRow = true,
        rst = [],
        p = pRoot;
    queue1.push(p);
    // 根节点为空，则返回空数组
    if(!p){
        return rst;
    }
    // 奇数栈和偶数队列不空则循环
    while(queue1.length || queue2.length){
        // 存放临时结果
        let rstTemp = [];
        // 奇数行
        if(isOddRow){
            // 遍历奇数队列
            while(queue1.length){
                // 队头出队节点
                let root = queue1.shift();
                // 节点值加入临时结果集
                rstTemp.push(root.val);
                // 节点的左右子树(即下一行)加入偶数栈中
                if(root.left){
                    queue2.push(root.left);
                }   
                if(root.right){
                    queue2.push(root.right);
                }             
            }
        // 偶数行
        }else{
            // 遍历偶数队列
            while(queue2.length){
                // 队头出队节点
                let root = queue2.shift();
                // 节点值加入临时结果集
                rstTemp.push(root.val);
                // 节点的左右子树(即下一行)加入奇数栈中
                if(root.left){
                    queue1.push(root.left);
                }   
                if(root.right){
                    queue1.push(root.right);
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