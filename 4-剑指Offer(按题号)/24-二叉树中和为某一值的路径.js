// 输入一颗二叉树的根节点和一个整数，按字典序打印出二叉树中结点值的和为输入整数的所有路径。
// 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
// 输入:{10,5,12,4,7},22，输出:[[10,5,7],[10,12]]
// 输入:{10,5,12,4,7},15，输出:[]

function findPath(root,expectNumber){
    // 根节点空则返回[]
    if(root==null){
        return [];
    }
    // 结果集
    let rst = [];
    // 深度优先遍历
    dfs(root,rst,[],expectNumber);
    return rst;
}

function dfs(root,rst,item,target){
    if(root==null){
        return null;
    }
    // 不改变原数组，用临时变量存结果
    let itemTemp = item.slice(0);
    itemTemp.push(root.val);
    // 根节点值=目标值 且 左右子树为空，把路径加入结果集
    if(root.val==target && root.left==null && root.right==null){
        rst.push(itemTemp);
    // 根节点不等于目标值 或 左右子树不空，迭代深度优先遍历左右子树，目标值减去当前根节点值
    }else{
        dfs(root.left,rst,itemTemp,target-root.val);
        dfs(root.right,rst,itemTemp,target-root.val);
    }
}

let n5 = {val:7,left:null,right:null};
let n4 = {val:4,left:null,right:null};
let n3 = {val:12,left:null,right:null};
let n2 = {val:5,left:n4,right:n5};
let n1 = {val:10,left:n2,right:n3};

console.log(findPath(n1,22));
console.log(findPath(n1,15));