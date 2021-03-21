// 数组中第 k 大，有几种做法 答了排序后输出和最小堆
let kLargest = (root,k) =>{
    let rst = -1;
    // 中序遍历
    let traverse =(root)=>{
        if(!root) return;
        traverse(root.left);
        k--;
        if(k==0) rst = root.val;
        traverse(root.right);
    }
    traverse(root);
    return rst;
}

// test
let n1 = {val:4};
let n2 = {val:2};
let n3 = {val:5};
let n4 = {val:1};
let n5 = {val:3};
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
console.log(kLargest(n1,3));