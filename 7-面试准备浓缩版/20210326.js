// 说说快速排序原理。时间、空间复杂度 
let quickSort = (arr)=>{
    if(arr.length<1) return arr;
    let mid = Math.floor(arr.length/2),
        midVal = arr.splice(mid,1)[0],
        left = [],
        right=[];
    arr.forEach(ele=>{
        ele>midVal?right.push(ele):left.push(ele);
    })
    return quickSort(left).concat(midVal).concat(quickSort(right));
}
// console.log(quickSort([5,4,3,2,1]));

// 两个栈实现队列
class Queue{
    constructor(){
        this.stack = [];
        this.stack2 = [];
    }
    queue(val){
        this.stack.push(val);
    }
    dequeue(){
        if(this.stack2.length>0) return this.stack2.pop();
        if(this.stack.length==0) return null;
        while(this.stack.length>0){
            this.stack2.push(this.stack.pop());
        }
        return this.stack2.pop();
    }
}
// let q1 = new Queue();
// q1.queue(1);
// q1.queue(2);
// console.log(q1.dequeue());
// console.log(q1.dequeue());
// console.log(q1.dequeue());

// 单向链表判断是否有环
let judgeCircle = (pHead)=>{
    let p1 = pHead,
        p2 = pHead;
    while(p2 && p2.next){
        p1 = p1.next;
        p2 = p2.next.next;
        if(p1==p2){
            return true;
        }
    }
    return false;
}
// let p3 = {val:3};
// let p2 = {val:2,next:p3};
// let p1 = {val:1,next:p2};
// p3.next = null;
// console.log(judgeCircle(p1));

// 链表倒数第k个节点 ，要求只扫一次且空间复杂度为O(1)
let lastKNode = (pHead,k) =>{
    if(!pHead || k<0) return null;
    let p1 = pHead,
        p2 = pHead;
    while(k>0){
        if(!p2) return null;
        p2 = p2.next;
        k--;
    }
    while(p2){
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
}
// let p3 = {val:3};
// let p2 = {val:2,next:p3};
// let p1 = {val:1,next:p2};
// p3.next = null;
// console.log(lastKNode(p1,1));

// 合并两个有序数组
let mergeList = (pHead1,pHead2)=>{
    if(!pHead1 || !pHead2) return pHead1 || pHead2;
    let p1 = pHead1,
        p2 = pHead2,
        newHead = {val:-1,next:null},
        p3 = newHead;
    while(p1 && p2){
        if(p1.val>p2.val){
            p3.next=p2;
            p2 = p2.next;
        }else{
            p3.next=p1;
            p1=p1.next;
        }
        p3 = p3.next;
    }
    if(p1){
        p3.next = p1;
    }
    if(p2){
        p3.next = p2;
    }
    return newHead.next;
}
// let p5 = {val:5};
// let p3 = {val:3,next:p5};
// let p1 = {val:1,next:p3};
// let p6 = {val:6};
// let p4 = {val:4,next:p6};
// let p2 = {val:2,next:p4};
// console.log(mergeList(p1,p2));

// 寻找两个链表的第一个公共节点
let firstPublicNode = (pHead1,pHead2)=>{
    if(!pHead1 || !pHead2) return null;
    let p1 = pHead1,
        p2 = pHead2,
        count1 = 0,
        count2 = 0,
        diff = 0;
    while(p1){
        count1++;
        p1 = p1.next;
    }
    while(p2){
        count2++;
        p2 = p2.next;
    }
    diff = count1-count2;
    p1 = pHead1;
    p2 = pHead2;
    if(diff>0){
        while(diff!=0){
            p1 = p1.next;
            diff--;
        }
    }else{
        while(diff!=0){
            p2 = p2.next;
            diff++;
        }
    }
    while(p1!=p2){
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
}
// let p6 = {val:6};
// let p5 = {val:5,next:p6};
// let p3 = {val:3,next:p5};
// let p1 = {val:1,next:p3};
// let p4 = {val:4,next:p5};
// let p2 = {val:2,next:p4};
// console.log(firstPublicNode(p1,p2));

// 平衡二叉树
let isBalanceTree =(root)=>{
    if(!root) return true;
    let dfs = (pRoot)=>{
        if(!pRoot) return 0;
        return Math.max(dfs(pRoot.left),dfs(pRoot.right))+1;
    }
    return Math.abs(dfs(root.left)-dfs(root.right))>1?false:true;
}
// let n7 = {val:11,left:null,right:null};
// let n6 = {val:9,left:null,right:null};
// let n5 = {val:7,left:null,right:null};
// let n4 = {val:5,left:n6,right:null};
// let n3 = {val:10,left:null,right:null};
// let n2 = {val:6,left:n4,right:null};
// let n1 = {val:8,left:n2,right:n3};
// console.log(isBalanceTree(n1));

// 二叉树先序遍历
let preOrder = (root,rst)=>{
    if(!root) return;
    rst.push(root.val);
    preOrder(root.left,rst);
    preOrder(root.right,rst);
}
// let n7 = {val:7,left:null,right:null};
// let n6 = {val:6,left:null,right:null};
// let n5 = {val:5,left:null,right:null};
// let n4 = {val:4,left:null,right:null};
// let n3 = {val:3,left:n6,right:n7};
// let n2 = {val:2,left:n4,right:n5};
// let n1 = {val:1,left:n2,right:n3};
// let rst = [];
// preOrder(n1,rst);
// console.log(rst);

// 深度优先搜索(二叉树是分为先中后，多叉树不分)
let dfs = (root,rst)=>{
    if(!root) return;
    rst.push(root.val);
    if(root.children){
        root.children.forEach(node=>{
            dfs(node,rst);
        })
    }
}
// let n7 = {val:7,children:null};
// let n6 = {val:6,children:null};
// let n5 = {val:5,children:null};
// let n4 = {val:4,children:null};
// let n3 = {val:3,children:null};
// let n2 = {val:2,children:[n5,n6,n7]};
// let n1 = {val:1,children:[n2,n3,n4]};
// let rst = [];
// dfs(n1,rst)
// console.log(rst);

// 蛇形层序遍历二叉树 
let printTree = (root)=>{
    let rst = [],
        stackOdd = [root],
        stackEven = [],
        isOdd = true;
    if(!root) return rst;
    while(stackOdd.length || stackEven.length){
        let temp = [];
        if(isOdd){
            while(stackOdd.length){
                let node = stackOdd.pop();
                temp.push(node.val);
                if(node.left){
                    stackEven.push(node.left);
                }
                if(node.right){
                    stackEven.push(node.right);
                }
            }
        }else{
            while(stackEven.length){
                let node = stackEven.pop();
                temp.push(node.val);
                if(node.left){
                    stackOdd.push(node.right);
                }
                if(node.right){
                    stackOdd.push(node.left);
                }
            }
        }
        isOdd =!isOdd;
        rst.push(temp);
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
// console.log(printTree(n1)); 

// 二叉树路径和:从二叉树的根到叶子节点称为一条路径，路径上每个节点的value之和为路径和值，本题要求所有的路径中是否存在一条和值为N的
let findTreePathSum=(root,target)=>{
    if(!root) return [];
    let rst = [];
    let dfs = (root,path)=>{
        path.push(root.val);
        if(!root.left && !root.right){
            let sumPath = path.reduce((total,cur)=>total+=cur);
            if(sumPath==target) rst.push(path);
            return;
        }
        dfs(root.left,[...path]);
        dfs(root.right,[...path]);
    }
    dfs(root,[]);
    return rst;
}
// let n5 = {val:7,left:null,right:null};
// let n4 = {val:4,left:null,right:null};
// let n3 = {val:12,left:null,right:null};
// let n2 = {val:5,left:n4,right:n5};
// let n1 = {val:10,left:n2,right:n3};
// console.log(findTreePathSum(n1,22));

// 二叉树形态
let treeForm = (nodeNum) =>{
    let rst = [1,1];
    for(let i=2;i<nodeNum+1;i++){
        rst[i]=0;
        for(let j=0;j<i;j++){
            rst[i]+=rst[j]*rst[i-j-1];
        }
    }
    return rst;
}
console.log(treeForm(5));

// 最大连续子数组和
let maxSumArr = (arr)=>{
    let maxTemp = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]+arr[i-1]>arr[i]){
            arr[i] = arr[i]+arr[i-1];
            if(arr[i]>maxTemp) maxTemp = arr[i];
        }
    }
    return maxTemp;
}
// console.log(maxSumArr([1,-2,3,10,-4,7,2,-5]))

// 最长无重复字符串
let maxSubString = (str)=>{
    let p1=0,
        p2=1,
        window = [str[0]],
        len=str.length,
        tempMax = 1,
        tempMaxStr = str[0];
    while(p2<len){
        if(window.indexOf(str[p2])<0){
            window.push(str[p2]);
            p2++;
            if(p2-p1>tempMax){
                tempMax = p2-p1;
                tempMaxStr = str.substring(p1,p2);
            }
        }else{
            p1++;
            window.shift();
        }
    }
    return tempMaxStr;
}
// console.log(maxSubString("adgadgz"));

// 数组中第 k 大
let kMax = (arr,k)=>{
    if(arr.length<k) return [];
    for(let i=1;i<arr.length;i++){
        let last = i-1,
            curVal = arr[i];
        while(curVal>arr[last] && last>-1){
            arr[last+1] = arr[last];
            last--;
        }
        arr[last+1] = curVal;
        if(i==k+1){
            return arr.slice(0,k);
        }
    }
}
// console.log(kMax([5,2,3,1,4],3));