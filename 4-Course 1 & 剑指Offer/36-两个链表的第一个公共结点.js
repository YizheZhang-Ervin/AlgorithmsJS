// 输入两个链表，找出它们的第一个公共结点。
// （注意因为传入数据是链表，所以错误测试数据的提示是用其他方式显示的，保证传入数据是正确的）

function findFirstCommonNode(p1, p2){
    if(p1==null || p2==null){
        return null;
    }
    let count1 = 0,
        count2 = 0,
        pHead1 = p1,
        pHead2 = p2;
    while(pHead1){
        count1++;
        pHead1 = pHead1.next;
    }
    while(pHead2){
        count2++;
        pHead2 = pHead2.next;
    }
    pHead1 = p1;
    pHead2 = p2;
    if(count1>count2){
        let diff = count1-count2;
        while(diff){
            pHead1 = pHead1.next;
            diff--;
        }
    }else{
        let diff = count2-count1;
        while(diff){
            pHead2 = pHead2.next;
            diff--;
        }
    }
    while(pHead1!=pHead2){
        pHead1 = pHead1.next;
        pHead2 = pHead2.next;
    }
    return pHead1;    
}

let m1 = {val:4},
    m2 = {val:5},
    m3 = {val:6},
    m4 = {val:7};
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = null;

let l1 = {val:1},
    l2 = {val:2},
    l3 = {val:3};
l1.next = l2;
l2.next = l3;
l3.next = m3;
console.log(findFirstCommonNode(l1,m1));