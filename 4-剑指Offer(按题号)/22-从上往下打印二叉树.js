// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
// 输入:{5,4,#,3,#,2,#,1}，输出:[5,4,3,2,1]

function printFromTopToBottom(root){
    // 要遍历节点的队列
    let queue = [root];
    // 结果集
    let rst = [];
    // 队列有值
    while(queue.length!=0){
        // 队头节点出队
        let cur = queue.shift();
        // 节点存在
        if(cur){
            // 结果集加入节点值
            rst.push(cur.val);
            // 节点左子树存在，加入到要遍历节点的队列中
            if(cur.left){
                queue.push(cur.left);
            }
            // 节点右子树存在，加入到要遍历节点的队列中
            if(cur.right){
                queue.push(cur.right);
            }
        }
    }
    return rst;
}

let n5 = {val:1,left:null,right:null};
let n4 = {val:2,left:n5,right:null};
let n3 = {val:3,left:n4,right:null};
let n2 = {val:4,left:n3,right:null};
let n1 = {val:5,left:n2,right:null};

console.log(printFromTopToBottom(n1));