// 请实现一个函数，用来判断一棵二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的
// 输入:{8,6,6,5,7,7,5}，输出:true
// 输入:{8,6,9,5,7,7,5}，输出:false

function isSymmetrical(pRoot){
    // 根节点为空，则是对称的
    if(!pRoot){
        return true;
    }
    return compare(pRoot.left,pRoot.right);
}

function compare(left,right){
    // 左右子树都空，则是对称的
    if(!left && !right){
        return true;
    }
    // 左右子树仅一个空，则是不对称的
    if(!left || !right){
        return false;
    }
    // 左节点值不等于右节点值，则是不对称的
    if(left.val!==right.val){
        return false;
    }
    // 比较左子树的左节点和右子树的右节点 且 比较左子树的右节点和右子树的左节点
    return compare(left.left,right.right) && compare(left.right,right.left);
}

let n7 = {val:5,left:null,right:null};
let n6 = {val:7,left:null,right:null};
let n5 = {val:7,left:null,right:null};
let n4 = {val:5,left:null,right:null};
let n3 = {val:6,left:n6,right:n7};
let n2 = {val:6,left:n4,right:n5};
let n1 = {val:8,left:n2,right:n3};
console.log(isSymmetrical(n1));
let l7 = {val:5,left:null,right:null};
let l6 = {val:7,left:null,right:null};
let l5 = {val:7,left:null,right:null};
let l4 = {val:5,left:null,right:null};
let l3 = {val:9,left:l6,right:l7};
let l2 = {val:6,left:l4,right:l5};
let l1 = {val:8,left:l2,right:l3};
console.log(isSymmetrical(l1));