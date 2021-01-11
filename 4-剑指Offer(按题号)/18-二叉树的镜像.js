// 操作给定的二叉树，将其变换为源二叉树的镜像。
// 输入:8-6-10-5-7-9-11，输出:8-10-6-11-9-7-5

function mirror(root){
    let temp = null;
    if(root){
        // 根左右节点交换
        temp = root.left;
        root.left = root.right;
        root.right = temp;
        // 迭代执行左子树的左右节点交换，右子树的左右节点交换
        mirror(root.left);
        mirror(root.right);
    }
    return root;
}

let n7 = {val:11,left:null,right:null};
let n6 = {val:9,left:null,right:null};
let n5 = {val:7,left:null,right:null};
let n4 = {val:5,left:null,right:null};
let n3 = {val:10,left:n6,right:n7};
let n2 = {val:6,left:n4,right:n5};
let n1 = {val:8,left:n2,right:n3};

console.log(mirror(n1));