// 在一个排序的链表中，存在重复的结点，
// 请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 
// 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
// 输入:{1,2,3,3,4,4,5}，输出:{1,2,5}

function deleteDuplication(pHead){
    // 建一个新链存不重复的节点
    let vHead = {val:null, next:pHead};
    let p = pHead,
        v = vHead;
    // 遍历原来链表
    while(p){
        // 链表还有后一项 且 现在节点值=下一个节点值
        if(p.next && p.val==p.next.val){
            // 进下一个节点
            p = p.next;
            // 循环找值相同的重复节点，并进下一个节点
            while(p.next && p.val==p.next.val){
                p = p.next;
            }
            // 重复节点找完后进下一个节点
            p = p.next;
            // 把进入的下一个节点连到新链上
            v.next = p;
        // 非重复节点 或 已到链表末尾
        }else{
            // 当前节点直接赋给新链指针
            v = p;
            // 进下一个节点
            p = p.next;
        }
    }
    // 返回新链的头
    return vHead.next;
}

let l1 = {val:1},
    l2 = {val:2},
    l3 = {val:3},
    l4 = {val:3},
    l5 = {val:3},
    l6 = {val:4};
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
l5.next = l6;
l6.next = null;
console.log(deleteDuplication(l1));