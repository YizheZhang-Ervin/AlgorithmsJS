// 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。
// 输入:{67,0,24,58}，输出:[58,24,0,67]

function printListFromTailToHead(head){
    let p = head,
        rst = [];
    // p节点有值就循环遍历   
    while(p){
        // 头部插入p节点值
        rst.unshift(p.val);
        // 进下个节点
        p = p.next;
    }
    return rst;
}

let l1 = {val:67},
    l2 = {val:0},
    l3 = {val:24},
    l4 = {val:58};
l1.next = l2;
l2.next = l3;
l3.next = l4;
console.log(printListFromTailToHead(l1));
