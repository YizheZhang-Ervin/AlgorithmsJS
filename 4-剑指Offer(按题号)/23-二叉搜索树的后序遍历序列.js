// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
// 如果是则返回true,否则返回false。假设输入的数组的任意两个数字都互不相同。
// 输入:[4,8,6,12,16,14,10]，输出:true

function verifySquenceOfBST(sequence){
    // 序列空则false
    if(sequence.length==0 || !sequence){
        return false;
    }
    // 序列仅一个节点则true
    if(sequence.length==1){
        return true;
    }
    // 序列长度>1
    if(sequence.length>1){
        let root = sequence[sequence.length-1];
        let leftTree = true,
            rightTree = true,
            l = 0,
            r;
        // 找到左右子树分界点
        while(sequence[l]<root){
            l++;
        }
        r = l;
        // 如果右子树存在
        while(r<sequence.length-1){
            // 右子树节点值<根节点值，则false
            if(sequence[r]<root){
                return false;
            }
            r++;
        }
        // 递归左右子树
        if(l>0){
            leftTree = verifySquenceOfBST(sequence.slice(0,l));
        }
        if(l<sequence.length-1){
            rightTree = verifySquenceOfBST(sequence.slice(l,sequence.length-1));
        }
        return leftTree && rightTree;
    }
}

console.log(verifySquenceOfBST([1,2,3,4,5]));