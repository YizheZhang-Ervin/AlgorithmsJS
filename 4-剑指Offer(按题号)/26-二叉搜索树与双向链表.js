// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。

function convert(pRoot){
    // 根为空，返回null
    if(!pRoot){
        return null
    }
    // 无左右子树，返回根
    if(!pRoot.left&&!pRoot.right){
        return pRoot
    } 
    // 左子树转成双向链表
    let left=convert(pRoot.left);
    let p=left;
    //找到左子树双向链表的最右节点
    while(p&&p.right){
        p=p.right;
    }
    // 头节点应该在左子树最右节点的右边
    if(left){
        p.right=pRoot
        pRoot.left=p
    }
    // 右子树转成双向链表
    let right=convert(pRoot.right)
    // 头节点应该在左子树最右节点的左边
    if(right){
        right.left=pRoot
        pRoot.right=right
    }
    //left为空，表头为pRoot，反之则表头直接为left
    return left!=null?left:pRoot
}

let n5 = {val:7,left:null,right:null};
let n4 = {val:4,left:null,right:null};
let n3 = {val:12,left:null,right:null};
let n2 = {val:5,left:n4,right:n5};
let n1 = {val:10,left:n2,right:n3};
console.log(convert(n1));