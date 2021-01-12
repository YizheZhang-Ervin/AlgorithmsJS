// 请实现两个函数，分别用来序列化和反序列化二叉树
// 二叉树的序列化是指：把一棵二叉树按照某种遍历方式的结果以某种格式保存为字符串，从而使得内存中建立起来的二叉树可以持久保存。
// 序列化可以基于先序、中序、后序、层序的二叉树遍历方式来进行修改，
// 序列化的结果是一个字符串，序列化时通过某种符号表示空节点（#），以 ！ 表示一个结点值的结束（value!）。
// 二叉树的反序列化是指：根据某种遍历顺序得到的序列化字符串结果str，重构二叉树。
// 例如，我们可以把一个只有根节点为1的二叉树序列化为"1,"，然后通过自己的函数来解析回这个二叉树
// 输入:{8,6,10,5,7,9,11}，输出:{8,6,10,5,7,9,11}

class SerializeTree{
    constructor(){
        this.arr = [];
    }

    serialize(pRoot){
        // 根节点为空则用#表示
        if(pRoot==null){
            this.arr.push("#");
        // 根节点不空
        }else{
            // 根节点值压入数组，继续递归序列化根节点的左右子树
            this.arr.push(pRoot.val);
            this.serialize(pRoot.left);
            this.serialize(pRoot.right);
        }
    }

    deserialize(arr){
        // 数组长度为0，则为空树
        if(arr.length==0){
            return null;
        }
        // 数组队头出队为节点值
        let nodeVal = arr.shift(),
            node;
        // 如果节点值为数字
        if(typeof nodeVal == "number"){
            // 新建节点，并递归余下数组作为节点的左右子树
            node = {val:nodeVal,left:null,right:null};
            node.left = this.deserialize(arr);
            node.right = this.deserialize(arr);
        }
        return node;
    }
}

let st = new SerializeTree();
let drst = st.deserialize([8,6,10,5,7,9,11]);
console.log(drst);
st.serialize(drst)
console.log(st.arr);