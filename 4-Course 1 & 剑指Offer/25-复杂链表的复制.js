// 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，
// 另一个特殊指针random指向一个随机节点），请对此链表进行深拷贝，并返回拷贝后的头结点。
// （注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）

function clone(pHead){
    if(pHead==null){
        return null;
    }
    let curNode = pHead;
    // 复制各节点，加到原节点后
    while(curNode){
        // 新建node
        let cloneNode = {label:curNode.label};
        // 当前node的下一个节点
        let nextNode = curNode.next;
        // 把复制节点加入到原链表中
        curNode.next = cloneNode;
        cloneNode.next = nextNode;
        // 进下一个节点
        curNode = nextNode;
    }
    curNode = pHead;
    // 把原节点的random赋给复制节点的random
    while(curNode){
        // 如:A的随机指针指向C，则把C的next(即C1)赋给A的next(即A1)的random
        curNode.next.random = curNode.random==null?null:curNode.random.next;
        // 进下一个节点
        curNode = curNode.next.next;
    }
    curNode = pHead;
    let cloneNodeHead = pHead.next;
    // 断开新老节点(B给A.next，B1给A1.next)
    while(curNode){
        // 如A->A1->B->B1，取A1(即A的next)
        let cloneNode = curNode.next;
        // 如B赋给A的next
        curNode.next = cloneNode.next;
        // A1的next的next(即B1)赋给A1的next(即B)
        cloneNode.next = cloneNode.next==null?null:cloneNode.next.next;
        // 进下一个节点
        curNode = curNode.next;
    }
    return cloneNodeHead;
}

let l1 = {label:1},
    l2 = {label:2},
    l3 = {label:3};
l1.next = l2;
l2.next = l3;
l3.next = null;
l1.random = l3;
l2.random = l1;
l3.random = l2;
console.log(l1,clone(l1));