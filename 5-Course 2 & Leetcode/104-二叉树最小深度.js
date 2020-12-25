// 二叉树最小深度
// 使用广度优先遍历，遇到叶子节点，停止遍历，返回节点层级
const binaryTree = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
};

var minDepth = function(root){
    if(!root){
        return 0;
    }
    // 队列放节点和层级
    const q = [[root,1]];
    while(q.length){
        const [n,l] = q.shift();
        if(!n.left && !n.right){
            return l;
        }
        if(n.left){
            q.push([n.left,l+1]);
        }
        if(n.right){
            q.push([n.right,l+1]);
        }
    }
};

console.log(minDepth(binaryTree));