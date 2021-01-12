// 给定一棵二叉搜索树，请找出其中的第k小的结点。
// 输入:{5,3,7,2,4,6,8},3，输出:{4}

function kthNode(pRoot, k) {
    // 搜索第0大返回空
    if (k == 0) {
        return null;
    }
    // 结果集
    let arr = [];
    // 递归搜索
    search(pRoot, arr);
    // 返回第k小的节点值
    return arr[k - 1];
}

function search(pRoot, arr) {
    // 节点空返回null
    if (!pRoot) {
        return null;
    // 中序遍历
    } else {
        search(pRoot.left, arr);
        arr.push(pRoot.val);
        search(pRoot.right, arr);
    }
}

let n7 = { val: 8, left: null, right: null };
let n6 = { val: 6, left: null, right: null };
let n5 = { val: 4, left: null, right: null };
let n4 = { val: 2, left: null, right: null };
let n3 = { val: 7, left: n6, right: n7 };
let n2 = { val: 3, left: n4, right: n5 };
let n1 = { val: 5, left: n2, right: n3 };
console.log(kthNode(n1, 3));