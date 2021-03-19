// 输入一棵二叉树，判断该二叉树是否是平衡二叉树。
// 在这里，我们只需要考虑其平衡性，不需要考虑其是不是排序二叉树
// 平衡二叉树（Balanced Binary Tree），具有以下性质：
// 它是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。
// 输入:{1,2,3,4,5,6,7}，输出:true

function isBalanced(pRoot){
    // 空树是平衡树
    if(!pRoot){
        return true;
    }
    // 迭代获取左右子树高度
    let left = treeDepth(pRoot.left);
    let right = treeDepth(pRoot.right);
    // 左右子树高度差的绝对值>1则为不平衡
    let diff = Math.abs(left - right)>1?false:true;
    return diff;
}

function treeDepth(pRoot){
    // 根节点空则高度0
    if(pRoot==null){
        return 0;
    }
    // 迭代获取左右子树高度
    let left = treeDepth(pRoot.left);
    let right = treeDepth(pRoot.right);
    // 每次迭代，选左右子树中更深的深度+1
    return Math.max(left,right)+1;
}

let n7 = {val:7,left:null,right:null};
let n6 = {val:6,left:null,right:null};
let n5 = {val:5,left:null,right:null};
let n4 = {val:4,left:null,right:null};
let n3 = {val:3,left:n6,right:n7};
let n2 = {val:2,left:n4,right:n5};
let n1 = {val:1,left:n2,right:n3};
console.log(isBalanced(n1));