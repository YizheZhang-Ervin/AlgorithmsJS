// 输入一颗二叉树的根节点和一个整数，按字典序打印出二叉树中结点值的和为输入整数的所有路径。
// 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
// 输入:{10,5,12,4,7},22，输出:[[10,5,7],[10,12]]
// 输入:{10,5,12,4,7},15，输出:[]
let findPath = (root,sum)=>{
    if(!root) return [];
    let dfs = (pRoot,path)=>{
        path.push(pRoot.val);
        // 左右子树为空
        if(!pRoot.left && !pRoot.right){
            // 计算总和
            let tempsum = path.reduce((total,cur)=>total+=cur);
            if(tempsum==sum) rst.push(path);
            return;
        }
        // 递归左右子树
        if(pRoot.left){
            dfs(pRoot.left,[...path]);
        }
        if(pRoot.right){
            dfs(pRoot.right,[...path]);
        }
        
    }
    let rst = [];
    dfs(root,[]);    
    return rst;
}
// let n5 = {val:7,left:null,right:null};
// let n4 = {val:4,left:null,right:null};
// let n3 = {val:12,left:null,right:null};
// let n2 = {val:5,left:n4,right:n5};
// let n1 = {val:10,left:n2,right:n3};
// console.log(findPath(n1,22));

// 输入一棵二叉树，求该树的深度。
// 从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。
// 输入:{1,2,3,4,5,#,6,#,#,7}，输出:4
let treeDepth=(root)=>{
    if(!root) return 0;
    let d1 = treeDepth(root.left);
    let d2 = treeDepth(root.right);
    return Math.max(d1,d2)+1;
}
// let n7 = {val:7,left:null,right:null};
// let n6 = {val:6,left:null,right:null};
// let n5 = {val:5,left:n7,right:null};
// let n4 = {val:4,left:null,right:null};
// let n3 = {val:3,left:null,right:n6};
// let n2 = {val:2,left:n4,right:n5};
// let n1 = {val:1,left:n2,right:n3};
// console.log(treeDepth(n1));

// 输入一棵二叉树，判断该二叉树是否是平衡二叉树。
// 在这里，我们只需要考虑其平衡性，不需要考虑其是不是排序二叉树
// 平衡二叉树（Balanced Binary Tree），具有以下性质：
// 它是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。
// 输入:{1,2,3,4,5,6,7}，输出:true
let isBalanced =(root)=>{
    if(!root) return true;
    let dfs = (pRoot)=>{
        if(!pRoot) return 0;
        let d1 = dfs(pRoot.left),
            d2 = dfs(pRoot.right);
        return Math.max(d1,d2)+1;
    }
    let left = dfs(root.left);
    let right = dfs(root.right);
    return Math.abs(left-right)>1?false:true;
}

// let n7 = {val:7,left:null,right:null};
// let n6 = {val:6,left:null,right:null};
// let n5 = {val:5,left:null,right:null};
// let n4 = {val:4,left:null,right:null};
// let n3 = {val:3,left:n6,right:n7};
// let n2 = {val:2,left:n4,right:n5};
// let n1 = {val:1,left:n2,right:n3};
// console.log(isBalanced(n1));

