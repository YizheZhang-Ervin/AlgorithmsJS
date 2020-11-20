// 二叉树中序遍历
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

var inOrder = function(root){
    const res = [];
    const rec = n=>{
        if(!n){
            return;
        }
        rec(n.left);
        res.push(n.val);
        rec(n.right);
    }
    rec(root);
    return res;
}

var inOrder2 = function(root){
    const res = [];
    const stack = [];
    let p = root;
    while(stack.length || p){
        // 左子树都入栈
        while(p){
            stack.push(p);
            p = p.left;
        }
        // 弹出栈顶
        const n = stack.pop();
        res.push(n.val);
        p = n.right;
    }
    return res;
}

console.log(inOrder(binaryTree));
console.log(inOrder2(binaryTree));

