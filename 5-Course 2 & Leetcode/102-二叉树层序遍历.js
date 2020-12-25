// 二叉树层序遍历
// 逐层从左到右遍历
// 广度优先遍历，需要记录当前节点所处层级，方便将其加到不同数组中

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

var levelOrder = function(root){
    if(!root){
        return [];
    }
    const q = [[root,0]];
    const res = [];
    while(q.length){
        const [n,l] = q.shift();
        // 层未建立则建层放数
        if(!res[l]){
            res.push([n.val]);
        // 层已建立则直接放数
        }else{
            res[l].push(n.val);
        }
        if(n.left){
            q.push([n.left,l+1]);
        }
        if(n.right){
            q.push([n.right,l+1]);
        }
    }
    return res;
}

var levelOrder2 = function(root){
    if(!root){
        return [];
    }
    const q = [root];
    const res = [];
    while(q.length){
        let len = q.length;
        res.push([]);
        // 同一层级的都加入一个数组中
        while(len--){
            const n = q.shift();
            res[res.length-1].push(n.val);
            if(n.left){
                q.push(n.left);
            }
            if(n.right){
                q.push(n.right);
            }
        }
    }
    return res;
}

console.log(levelOrder(binaryTree));
console.log(levelOrder2(binaryTree));