// 输入一个链表，输出该链表中倒数第k个结点。
// 输入:{1,2,3,4,5},1，输出:{5}

function findKthToTail(head, k){
    // 空链表或k<=0
    if(head==null || k<=0){
        return null;
    }
    // 两个指针
    let p1 = head,
        p2 = head;
    // 把p2指针前进k次
    while(k){
        // k比链表长得情况，返回空
        // k和链表一样长，不会执行到这
        if(p2==null) return null;
        p2 = p2.next;
        k--;
    }
    // p1,p2一起向前运行，直到p2走完(最后一个节点之后)
    while(p2){
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
}

let l1 = {val:1},
    l2 = {val:2},
    l3 = {val:3},
    l4 = {val:4},
    l5 = {val:5};
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
console.log(findKthToTail(l1,1));