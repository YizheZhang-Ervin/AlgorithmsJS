// 环形链表，判断是否有环(尾元素指向-1说明没有环，其他代表链表节点的索引)
// 方法:快慢指针，如果指针可以遇到说明有环，遍历结束未遇到说明无环

var hasCircle=function(head){
    let p1 = head;
    let p2 = head;
    while(p1&&p2&&p2.next){
        p1 = p1.next;
        p2 = p2.next.next;
        // 指针相遇
        if(p1 === p2){
            return true;
        }
    }
    return false;
}
