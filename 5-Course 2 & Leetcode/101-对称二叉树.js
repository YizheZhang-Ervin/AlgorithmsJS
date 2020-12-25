// 对称二叉树
// 检查二叉树是否镜像对称
// 方法:树1左子树合树2右子树是否镜像，树1右子树和树2左子树是否镜像
// 分:获取两个树的左子树和右子树
// 解:递归判断树1左子树和树2右子树是否镜像，树1右子树和树2左子树是否镜像
// 合:都成立且根节点值相同，则两个树就镜像

function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}

var isSymmetric = function(root){
    if(!root){
        return true;
    }
    const isMirrror = (l,r)=>{
        if(!l && !r){
            return true;
        }
        if(l && r && l.val===r.val && isMirrror(l.left,r.right) && isMirrror(l.right,r.left)){
            return true;
        }else{
            return false;
        }
    }
    return isMirrror(root.left,root.right);
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(2);
let node4 = new TreeNode(3);
let node5 = new TreeNode(4);
let node6 = new TreeNode(4);
let node7 = new TreeNode(3);
node1.left = node2;
node2.left = node4;
node2.right = node5;
node1.right = node3;
node3.left = node6;
node3.right = node7;

console.log(isSymmetric(node1));