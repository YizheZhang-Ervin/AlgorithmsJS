// 输入一棵二叉树，求该树的深度。
// 从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。
// 输入:{1,2,3,4,5,#,6,#,#,7}，输出:4

function treeDepth(pRoot){
    // 根节点为空则深度为0
    if(pRoot==null){
        return 0;
    }
    // 待访问节点的队列
    let queue = [pRoot];
    // 每层已访问的节点数count，每层总共有的节点数round，当前深度depth
    let count = 0,
        round = 1,
        depth = 0;
    // 队列不为空
    while(queue.length!=0){
        // 已访问节点数+1
        count++;
        // 队头节点出队
        let cur = queue.shift();
        // 节点存在
        if(cur){
            // 节点有左子树，左子树加入队列
            if(cur.left){
                queue.push(cur.left);
            }
            // 节点有右子树，右子树加入队列
            if(cur.right){
                queue.push(cur.right);
            }
            // 当前层已访问节点=总共节点数，则重置当前层已访问节点及总共节点数，深度+1
            if(count==round){
                count = 0;
                round = queue.length;
                depth++;
            }
        }
    }
    return depth;
}

function treeDepth2(pRoot){
    // 根节点为空则深度为0
    if(pRoot == null){
        return 0;
    } 
    // 迭代获取左右子树深度
    var left = treeDepth2(pRoot.left);
    var right = treeDepth2(pRoot.right);
    // 每次迭代，选左右子树中更深的深度+1
    return Math.max(left,right)+1
}

let n7 = {val:7,left:null,right:null};
let n6 = {val:6,left:null,right:null};
let n5 = {val:5,left:n7,right:null};
let n4 = {val:4,left:null,right:null};
let n3 = {val:3,left:null,right:n6};
let n2 = {val:2,left:n4,right:n5};
let n1 = {val:1,left:n2,right:n3};
console.log(treeDepth(n1));
console.log(treeDepth2(n1));