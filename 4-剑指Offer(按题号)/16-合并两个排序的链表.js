// 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
// 输入:{1,3,5},{2,4,6}，输出:{1,2,3,4,5,6}

function merge(pHead1, pHead2){
    if(!pHead1 || !pHead2){
        return pHead1 || pHead2;
    }
    // 新链表头
    let node = {val:-1,next:null};
    // 新链表头指针p，链表1指针p1，链表2指针p2
    let p = node,
        p1 = pHead1,
        p2 = pHead2;
    // 链表1和2不空就循环
    while(p1 && p2){
        // 表头值小的链到新链表后面
        if(p1.val<p2.val){
            p.next = p1;
            p1 = p1.next;
        }else{
            p.next = p2;
            p2 = p2.next;
        }
        // 进下一个节点
        p = p.next;
    }
    // 有余下未遍历完的节点直接链到新链后面
    if(p1){
        p.next = p1;
    }
    if(p2){
        p.next = p2;
    }
    return node.next;
}

n6 = {val:6,next:null};
n5 = {val:4,next:n6};
n4 = {val:2,next:n5};
n3 = {val:5,next:null};
n2 = {val:3,next:n3};
n1 = {val:1,next:n2};
console.log(merge(n1,n4));
// console.log(merge(null,null));