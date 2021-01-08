// 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
function entryNodeOfLoop(pHead){
    // 如果前三个节点中有空的说明没有环
    if (!pHead || !pHead.next || !pHead.next.next) {
        return null
    }
    // 快指针fast，慢指针slow
    let fast = pHead,
        slow = pHead;
    // 快指针2步2步走，慢指针1步1步走，直到快指针走完或快慢指针相遇
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
        // 快慢指针相遇
        if(fast==slow){
            break;
        }
    }
    // 如果快指针走完下一个是null说明无环
    if(fast==null || fast.next==null){
        return null;
    }
    fast = pHead;
    // 快指针从链表头重新走，慢指针原先位置继续走，快慢指针相遇的位置则为环的入口
    // 开始到入口d1=多个环+慢指针环内未走的部分d3
    while(fast!=slow){
        fast = fast.next;
        slow = slow.next;
    }
    return fast;
}

let l1 = {val:1},
    l2 = {val:2},
    l3 = {val:3},
    l4 = {val:4},
    l5 = {val:5},
    l6 = {val:6};
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
l5.next = l6;
l6.next = l3;
console.log(entryNodeOfLoop(l1));