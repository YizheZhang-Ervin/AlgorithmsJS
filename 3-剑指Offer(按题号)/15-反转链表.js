// 输入一个链表，反转链表后，输出新链表的表头。
// 输入:{1,2,3}，输出:{3,2,1}

function reverseList(pHead){
    // 前一个结点pre，当前节点cur(从头节点开始)
    let pre = null,
        cur = pHead,
        temp = null;
    // 当前节点有值就循环
    while(cur){
        // 拿到当前节点的下一个节点
        temp = cur.next;
        // 当前节点的下一个节点指向前一个结点
        cur.next = pre;
        // 当前节点成为前一个结点
        pre = cur;
        // 当前节点的下一个节点成为当前节点 (进下一个节点处理)
        cur = temp;
    }
    return pre;
}

let l1 = {val:1},
    l2 = {val:2},
    l3 = {val:3};
l1.next = l2;
l2.next = l3;
console.log(reverseList(l1));

function ReverseList(pHead)
{
    let p1 = null,
        p2 = pHead,
        temp = null;
    while(p2){
        temp = p2.next;
        p2.next = p1;
        p1 = p2;
        p2 = temp;
    }
    return p1;
}
let l11 = {val:1},
    l22 = {val:2},
    l33 = {val:3};
l11.next = l22;
l22.next = l33;
console.log(ReverseList(l11));