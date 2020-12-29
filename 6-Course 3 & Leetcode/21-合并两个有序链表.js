// 合并两个有序链表
// 方法:用指针遍历两个有序链表，比较当前节点，较小的接入新链表，并指针后移

function ListNode(val){
    this.val = val;
    this.next = null;
}

var mergeTwoLists = function(l1,l2){
    const res = new ListNode(0);
    // 指针指向新链表最后一个节点
    let p = res;
    let p1 = l1;
    let p2 = l2;
    while(p1 && p2){
        if(p1.val<p2.val){
            p.next = p1;
            p1 = p1.next;
        }else{
            p.next = p2;
            p2 = p2.next;
        }
        p = p.next;
    }
    if(p1){
        p.next = p1;
    }
    if(p2){
        p.next = p2;
    }
    return res.next;
}

// 两个链表
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(4);
node1.next = node2;
node2.next = node3;
let node4 = new ListNode(1);
let node5 = new ListNode(3);
let node6 = new ListNode(4);
node4.next = node5;
node5.next = node6;

let rst = mergeTwoLists(node1,node4);
console.log(rst.next,rst.next.next,rst.next.next.next);