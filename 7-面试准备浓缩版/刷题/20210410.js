// 重建二叉树
// 输入:前序[1,2,3,4,5,6,7],中序[3,2,4,1,6,5,7]，输出:{1,2,5,3,4,6,7}
let rebuild = (pre,vin)=>{
    // 空节点
    if(vin.length<1){
        return null;
    }
    // 叶子节点
    if(vin.length==1){
        return {val:vin[0],left:null,right:null};
    }
    // 非叶子节点
    // 根
    let root = pre[0];
    let node = {val:root,left:null,right:null};
    // 左右树的中序和前序
    let splitPoint = vin.indexOf(root);
    let leftVin = vin.slice(0,splitPoint);
    let rightVin = vin.slice(splitPoint+1);
    let leftPre = pre.slice(1,leftVin.length+1);
    let rightPre = pre.slice(leftVin.length+1);
    // 递归左右树
    let leftTree = rebuild(leftPre,leftVin);
    let rightTree = rebuild(rightPre,rightVin);
    node.left = leftTree;
    node.right = rightTree;
    return node;
}
// console.log(rebuild([1,2,3,4,5,6,7],[3,2,4,1,6,5,7]));

// 树子结构
// 输入:{8,8,#,9,#,2,#,5},{8,9,#,2}，输出:true
let judgeSubTree = (tree1,tree2)=>{
    let hasSubTree =(root1,root2)=>{
        if(!root1 || !root2){
            return false;
        }
        // 判断根
        if(isSubTree(root1,root2)){
            return true;
        // 判断左右子树
        }else{
            return hasSubTree(root1.left,root2) || hasSubTree(root1.right,root2);
        }
    }
    let isSubTree =(root1,root2)=>{
        // root2空
        if(!root2) return true;
        // root1空
        if(!root1) return false;
        // root1和root2相等，递归判断左右子树
        if(root1.val==root2.val) return isSubTree(root1.left,root2.left) && isSubTree(root1.right,root2.right);
        // root1和root2不相等，false
        else return false;
    }
    return hasSubTree(tree1,tree2);
}
// let n8 = {val:5,left:null,right:null};
// let n6 = {val:2,left:n8,right:null};
// let n4 = {val:9,left:n6,right:null};
// let n2 = {val:8,left:n4,right:null};
// let n1 = {val:8,left:n2,right:null};
// let d4 = {val:2,left:null,right:null};
// let d2 = {val:9,left:d4,right:null};
// let d1 = {val:8,left:d2,right:null};
// console.log(judgeSubTree(n2,d1));

// 二叉树镜像
// 输入:8-6-10-5-7-9-11，输出:8-10-6-11-9-7-5
let mirror = (root)=>{
    if(!root) return null;
    if(root){
        [root.left,root.right] = [root.right,root.left];
        mirror(root.left);
        mirror(root.right);
    }
    return root;
}
// let n7 = {val:11,left:null,right:null};
// let n6 = {val:9,left:null,right:null};
// let n5 = {val:7,left:null,right:null};
// let n4 = {val:5,left:null,right:null};
// let n3 = {val:10,left:n6,right:n7};
// let n2 = {val:6,left:n4,right:n5};
// let n1 = {val:8,left:n2,right:n3};
// console.log(mirror(n1));

// 上到下打印二叉树
// 输入:{5,4,#,3,#,2,#,1}，输出:[5,4,3,2,1]
let printTree = (root)=>{
    let nodeArr = [root];
    let rst = [];
    while(nodeArr.length!=0){
        let root = nodeArr.shift();
        if(root) rst.push(root.val);
        if(root.left) nodeArr.push(root.left);
        if(root.right) nodeArr.push(root.right);
    }
    return rst;
}
// let n5 = {val:1,left:null,right:null};
// let n4 = {val:2,left:n5,right:null};
// let n3 = {val:3,left:n4,right:null};
// let n2 = {val:4,left:n3,right:null};
// let n1 = {val:5,left:n2,right:null};
// console.log(printTree(n1));

// 二叉搜索树后序遍历序列
// 输入:[4,8,6,12,16,14,10]，输出:true
let judgeBST = (seq)=>{
    if(seq.length==0) return false;
    if(seq.length==1) return true;
    // 根
    let root = seq[seq.length-1];
    // 左子树
    let p1 = 0;
    while(seq[p1]<root){
        p1++;
    }
    let leftSeq = seq.slice(0,p1);
    let p2 = p1;
    // 右子树
    while(p2<seq.length-1){
        if(seq[p2]<root){
            return false;
        }
        p2++;
    }
    let rightSeq = seq.slice(p1,seq.length-1);
    // 左右子树存在则递归
    let leftRst = true,
        rightRst = true;
    if(p1>0){
        leftRst = judgeBST(leftSeq);
    }
    if(p1!=seq.length-1){
        rightRst = judgeBST(rightSeq);
    }
    return leftRst && rightRst;
}
// console.log(judgeBST([4,8,6,12,16,14,10]));

// 二叉树中和为某一值的路径
// 输入:{10,5,12,4,7},22，输出:[[10,5,7],[10,12]]
let findPath = (pRoot,expectedNum)=>{
    let rst = [];
    let dfs = (root,path)=>{
        path.push(root.val);
        if(!root.left && !root.right){
            let tempSum = path.reduce((total,cur)=>total+=cur);
            if(tempSum==expectedNum){
                rst.push(path);
                return;
            }
        }
        if(root.left) dfs(root.left,[...path]);
        if(root.right) dfs(root.right,[...path]);
    }
    dfs(pRoot,[]);
    return rst;
}
// let n5 = {val:7,left:null,right:null};
// let n4 = {val:4,left:null,right:null};
// let n3 = {val:12,left:null,right:null};
// let n2 = {val:5,left:n4,right:n5};
// let n1 = {val:10,left:n2,right:n3};
// console.log(findPath(n1,22));

// 二叉树深度
// 输入:{1,2,3,4,5,#,6,#,#,7}，输出:4
let computeDepth =(root)=>{
    if(!root) return 0;
    return Math.max(computeDepth(root.left),computeDepth(root.right))+1;
}
// let n7 = {val:7,left:null,right:null};
// let n6 = {val:6,left:null,right:null};
// let n5 = {val:5,left:n7,right:null};
// let n4 = {val:4,left:null,right:null};
// let n3 = {val:3,left:null,right:n6};
// let n2 = {val:2,left:n4,right:n5};
// let n1 = {val:1,left:n2,right:n3};
// console.log(computeDepth(n1));

// 平衡二叉树
// 输入:{1,2,3,4,5,6,7}，输出:true
let isBalanced = (root)=>{
    if(!root) return true;
    let left = computeDepth(root.left);
    let right = computeDepth(root.right);
    return Math.abs(left-right)<=1;
}
// let n7 = {val:7,left:null,right:null};
// let n6 = {val:6,left:null,right:null};
// let n5 = {val:5,left:null,right:null};
// let n4 = {val:4,left:null,right:null};
// let n3 = {val:3,left:n6,right:n7};
// let n2 = {val:2,left:n4,right:n5};
// let n1 = {val:1,left:n2,right:n3};
// console.log(isBalanced(n1));

// 二叉树下一个节点
let nextNode = (root)=>{
    if(!root) return null;
    // 右子树,找最左
    if(root.right){
        root = root.right;
        while(root.left){
            root = root.left;
        }
        return root;
    }
    // 无右子树，判断是否为父节点左树
    while(root.next){
        let root2 = root.next;
        // 判断是否为父节点的左树
        if(root = root2.left){
            return root2;
        }
        root = root.next;
    }
    // 找不到
    return null;
}
// let n7 = {val:7,left:null,right:null};
// let n6 = {val:6,left:null,right:null};
// let n5 = {val:5,left:null,right:null};
// let n4 = {val:4,left:null,right:null};
// let n3 = {val:3,left:n6,right:n7};
// let n2 = {val:2,left:n4,right:n5};
// let n1 = {val:1,left:n2,right:n3};
// n1.next = null;
// n2.next = n1;
// n3.next = n1;
// n4.next = n2;
// n5.next = n2;
// n6.next = n3;
// n7.next = n3;
// console.log(nextNode(n2));

// 对称二叉树
// 输入:{8,6,9,5,7,7,5}，输出:false
let isSymmetrical = (root)=>{
    if(!root) return true;
    let compare = (left,right)=>{
        // 都空，true
        if(!left && !right) return true;
        // 有一个空，false
        if(!left || !right) return false;

        if(left.val==right.val){
            return compare(left.left,right.right) && compare(left.right,right.left);
        }else{
            return false;
        }
    }
    return compare(root.left,root.right);
}
// let l7 = {val:5,left:null,right:null};
// let l6 = {val:7,left:null,right:null};
// let l5 = {val:7,left:null,right:null};
// let l4 = {val:5,left:null,right:null};
// let l3 = {val:9,left:l6,right:l7};
// let l2 = {val:6,left:l4,right:l5};
// let l1 = {val:8,left:l2,right:l3};
// console.log(isSymmetrical(l1));

// 之字形打印二叉树
// 输入:{8,6,10,5,7,9,11}，输出:[[8],[10,6],[5,7,9,11]]
let printTreeZ=(root)=>{
    if(!root) return [];
    let stack1 = [root];
    let stack2 = [];
    let rst = [];
    let isOdd = true;
    while(stack1.length!=0 || stack2.length!=0){
        let temp = [];
        if(isOdd){
            while(stack1.length!=0){
                let root = stack1.pop();
                temp.push(root.val);
                if(root.left) stack2.push(root.left);
                if(root.right) stack2.push(root.right);
            }
        }else{
            while(stack2.length!=0){
                let root = stack2.pop();
                temp.push(root.val);
                if(root.right) stack1.push(root.right);
                if(root.left) stack1.push(root.left);
            }
        }
        rst.push(temp);
        isOdd = !isOdd;
    }
    return rst;
}
// let n7 = {val:11,left:null,right:null};
// let n6 = {val:9,left:null,right:null};
// let n5 = {val:7,left:null,right:null};
// let n4 = {val:5,left:null,right:null};
// let n3 = {val:10,left:n6,right:n7};
// let n2 = {val:6,left:n4,right:n5};
// let n1 = {val:8,left:n2,right:n3};
// console.log(printTreeZ(n1));

// 二叉树打印多行
let printTreeS=(root)=>{
    if(!root) return [];
    let queue1 = [root];
    let queue2 = [];
    let rst = [];
    let isOdd = true;
    while(queue1.length!=0 || queue2.length!=0){
        let temp = [];
        if(isOdd){
            while(queue1.length!=0){
                let root = queue1.shift();
                temp.push(root.val);
                if(root.left) queue2.push(root.left);
                if(root.right) queue2.push(root.right);
            }
        }else{
            while(queue2.length!=0){
                let root = queue2.shift();
                temp.push(root.val);
                if(root.right) queue1.push(root.left);
                if(root.left) queue1.push(root.right);
            }
        }
        rst.push(temp);
        isOdd = !isOdd;
    }
    return rst;
}
// let n7 = {val:11,left:null,right:null};
// let n6 = {val:9,left:null,right:null};
// let n5 = {val:7,left:null,right:null};
// let n4 = {val:5,left:null,right:null};
// let n3 = {val:10,left:n6,right:n7};
// let n2 = {val:6,left:n4,right:n5};
// let n1 = {val:8,left:n2,right:n3};
// console.log(printTreeS(n1));

// 序列化二叉树
// 输入:{8,6,10,5,7,9,11}，输出:{8,6,10,5,7,9,11}
class SerializeTree{
    constructor(){
        this.arr = [];
    }
    serialize(root){
        if(!root) this.arr.push("#");
        else{
            this.arr.push(root.val);
            this.serialize(root.left);
            this.serialize(root.right);
        }
    }
    deserialize(seq){
        if(seq.length==0) return null;
        let root = seq.shift();
        let node;
        if(typeof root=="number"){
            node = {val:root,left:null,right:null};
            node.left = this.deserialize(seq);
            node.right = this.deserialize(seq);
        }
        return node;
    }
}
// let st = new SerializeTree();
// let drst = st.deserialize([8,6,10,5,7,9,11]);
// console.log(drst);
// st.serialize(drst)
// console.log(st.arr);

// 二叉搜索树第k小结点
// 输入:{5,3,7,2,4,6,8},3，输出:{4}
let kthNode =(pRoot,k)=>{
    if(k==0) return null;
    let rst = [];
    let search = (root)=>{
        if(!root) return null;
        search(root.left);
        rst.push(root.val);
        search(root.right);
    }
    search(pRoot);
    return rst[k-1];
}
// let n7 = { val: 8, left: null, right: null };
// let n6 = { val: 6, left: null, right: null };
// let n5 = { val: 4, left: null, right: null };
// let n4 = { val: 2, left: null, right: null };
// let n3 = { val: 7, left: n6, right: n7 };
// let n2 = { val: 3, left: n4, right: n5 };
// let n1 = { val: 5, left: n2, right: n3 };
// console.log(kthNode(n1, 3));
