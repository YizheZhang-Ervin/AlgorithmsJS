// 反转链表
// 方法:双指针一前一后遍历链表，反转双指针(n+1的next指向n)

var reverseList = function(head){
    let p1 = head;
    let p2 = null;
    // p1在p2前面
    while(p1){
        const temp = p1.next;
        // p1的下一个指向p2
        p1.next = p2;
        // p2,p1向前移动
        p2 = p1;
        p1 = tmp;
    }
    return p2;
}