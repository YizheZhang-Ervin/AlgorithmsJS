// 1.深度优先遍历/广度优先遍历
const tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: "d",
                    children: []
                },
                {
                    val: 'e',
                    children: []
                }
            ]
        },
        {
            val: 'c',
            children: [
                {
                    val: "f",
                    children: []
                },
                {
                    val: 'g',
                    children: []
                }
            ]
        }
    ]
};

// (1)深度优先遍历:尽可能深的搜索树的分支
// 根->根的children挨个进行深度优先遍历
var dfs = function (root) {
    console.log(root.val);
    root.children.forEach(dfs);
}

// (2)广度优先遍历:先访问离根节点最近的节点
// 根入队，队头出队访问，队头children挨个入队，重复23步直到队列空
var bfs = function (root) {
    // 根放入队列
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        // 队头出队访问
        let n = queue.shift();
        console.log(n.val);
        // 队头children挨个入队
        n.children.forEach(child => {
            queue.push(child);
        })
    }
}

// 2.二叉树先中后序遍历
// 二叉树每个节点最多2个子节点
// 用Object模拟二叉树
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

// 先序遍历:根左右
const preorder = function (root) {
    if (!root) {
        return;
    }
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}
const preorder2 = function (root) {
    if (!root) {
        return;
    }
    const stack = [root];
    while (stack.length) {
        // 栈顶出栈
        const n = stack.pop();
        console.log(n.val);
        // 后出的先放入
        if (n.right) {
            stack.push(n.right);
        }
        // 先出的后放入
        if (n.left) {
            stack.push(n.left);
        }
    }
}

// 中序遍历:左根右
const inorder = function (root) {
    if (!root) {
        return;
    }
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}
const inorder2 = function (root) {
    if (!root) {
        return;
    }
    const stack = [];
    let p = root;
    while(stack.length || p){
        // 所有左树入栈
        while (p) {
            stack.push(p);
            p = p.left;
        }
        // 栈顶出栈
        const n = stack.pop();
        console.log(n.val);
        p = n.right
    }
}

// 后序遍历:左右根
const postorder = function (root) {
    if (!root) {
        return;
    }
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
}
const postorder2 = function (root) {
    if (!root) {
        return;
    }
    const stack = [root];
    const outputStack = [];
    // 输出栈中记录的顺序为根右左，输出时逆序输出左右根
    while(stack.length){
        const n = stack.pop();
        outputStack.push(n);
        if(n.left){
            stack.push(n.left);
        }
        if(n.right){
            stack.push(n.right);
        }
    }
    while(outputStack.length){
        const n = outputStack.pop();
        console.log(n.val);
    }
}

// 测试代码
var test = function () {
    console.log("深度优先遍历:")
    dfs(tree);

    console.log("广度优先遍历:")
    bfs(tree);

    console.log("先序遍历(递归):")
    preorder(binaryTree);
    console.log("先序遍历(非递归):")
    preorder2(binaryTree);

    console.log("中序遍历(递归):")
    inorder(binaryTree);
    console.log("中序遍历(非递归):")
    inorder2(binaryTree);

    console.log("后序遍历(递归):")
    postorder(binaryTree);
    console.log("后序遍历(非递归):")
    postorder2(binaryTree);
}();