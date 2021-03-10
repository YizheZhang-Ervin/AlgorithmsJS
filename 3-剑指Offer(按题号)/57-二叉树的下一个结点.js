// 给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。
// 注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。

function getNext(pNode){
    // 节点空返回空
    if(pNode==null){
        return null;
    }
    // 节点有右子树，找到右子树的最左节点
    if(pNode.right){
        pNode = pNode.right;
        while(pNode.left){
            pNode = pNode.left;
        }
        return pNode;
    }
    // 节点无右子树，找节点的父节点
    while(pNode.next){
        let pRoot = pNode.next;
        // 如果节点是父节点的左子树，返回父节点
        if(pNode==pRoot.left){
            return pRoot;
        }
        // 如果节点是父结点的右子树，不断找父节点，直到找到某个结点是其父结点的左子树
        pNode = pNode.next;
    }
    return null;
}

// next指向父节点，left和right指向左右子树
let n7 = {val:7,left:null,right:null};
let n6 = {val:6,left:null,right:null};
let n5 = {val:5,left:null,right:null};
let n4 = {val:4,left:null,right:null};
let n3 = {val:3,left:n6,right:n7};
let n2 = {val:2,left:n4,right:n5};
let n1 = {val:1,left:n2,right:n3};
n1.next = null;
n2.next = n1;
n3.next = n1;
n4.next = n2;
n5.next = n2;
n6.next = n3;
n7.next = n3;
console.log(getNext(n2));