// 两链表相加
// (2->4->3) + (5->6->4)
// 结果为7->0->8，因为342+465=807

var addTwo = function(l1,l2){
    // 遍历两个链表，个位相加到新链表，十位留到下一位去相加
    const l3 = new ListNode(0);
    let p1 = l1;
    let p2 = l2;
    let p3 = l3;
    let carry = 0;

    while(p1 || p2){
        const v1 = p1?p1.val:0;
        const v2 = p2?p2.val:0;
        const val = v1 + v2+ carry;
        // 要进位的值
        carry = Math.floor(val/10);
        // 把个位加到列表中
        p3.next = new ListNode(val%10);
        if(p1){
            p1 = p1.next;
        }
        if(p2){
            p2=p2.next;
        }
        p3 = p3.next;
    }
    if(carry){
        p3.next = new Nodelist(carry);
    }

    return l3.next;
} 
