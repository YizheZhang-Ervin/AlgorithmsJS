// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
// 输入:[1,2,3,4,5,6,7],[3,2,4,1,6,5,7]，输出:{1,2,5,3,4,6,7}

function reConstructBinaryTree(pre, vin){
    // 空树
    if(vin.length<1){
        return null;
    }
    // 叶子节点
    else if(vin.length==1){
        let node = {val:vin[0],left:null,right:null};
        return node;
    }else{
        // 找到根，建立根节点
        let rootVal = pre[0];
        let rootIdx = vin.indexOf(rootVal);
        let rootNode = {val:rootVal,left:null,right:null};
        // 左右中序序列
        let leftVin = vin.slice(0,rootIdx)
        let rightVin = vin.slice(rootIdx+1)
        // 左右前序序列
        let leftPre = pre.slice(1,leftVin.length+1);
        let rightPre = pre.slice(leftVin.length+1,pre.length);
        // 给根节点加上左右子树，并返回根节点
        rootNode.left = reConstructBinaryTree(leftPre,leftVin);
        rootNode.right = reConstructBinaryTree(rightPre,rightVin);
        return rootNode;
    }
}

console.log(reConstructBinaryTree([1,2,3,4,5,6,7],[3,2,4,1,6,5,7]));