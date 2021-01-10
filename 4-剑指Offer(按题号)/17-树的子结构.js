// 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
// 输入:{8,8,#,9,#,2,#,5},{8,9,#,2}，输出:true

function hasSubtree(pRoot1, pRoot2){
    // 有一棵树为空，则说明不是子结构
    if(!pRoot1 || !pRoot2){
        return false;
    }
    // 根开始就是子结构，则是子结构
    if(isSubTree(pRoot1, pRoot2)){
        return true;
    // 根开始不是子结构，则再判断左子树右子树是否是子结构    
    }else{
        return hasSubtree(pRoot1.left,pRoot2) || hasSubtree(pRoot1.right,pRoot2);
    }
}

function isSubTree(pRoot1, pRoot2){
    // 第二棵树为空，则是子结构
    if(!pRoot2){
        return true;
    }
    // 第一棵树为空，则不是子结构
    if(!pRoot1){
        return false;
    }
    // 节点值不同，则不是子结构
    if(pRoot1.val!=pRoot2.val){
        return false;
    // 节点值相同，则判定左子树和右子树是否相同
    }else{
        return isSubTree(pRoot1.left,pRoot2.left) && isSubTree(pRoot1.right,pRoot2.right);
    }
}

let n8 = {val:5,left:null,right:null};
let n6 = {val:2,left:n8,right:null};
let n4 = {val:9,left:n6,right:null};
let n2 = {val:8,left:n4,right:null};
let n1 = {val:8,left:n2,right:null};

let d4 = {val:2,left:null,right:null};
let d2 = {val:9,left:d4,right:null};
let d1 = {val:8,left:d2,right:null};

console.log(hasSubtree(n2,d1));