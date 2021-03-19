// 输入两个链表，找出它们的第一个公共结点。
// （注意因为传入数据是链表，所以错误测试数据的提示是用其他方式显示的，保证传入数据是正确的）

function findFirstCommonNode(pHead1, pHead2){
    if(pHead1==null || pHead2==null) return null;
    // 两表一起走，长多走的k为长出的部分
    let p1 = pHead1,
        p2 = pHead2,
        k = 0,
        flag = null;
    while(p1 || p2){
        if(p1 && p2){
            p1 = p1.next;
            p2 = p2.next;
        }else if(p1 && !p2){
            p1 = p1.next;
            k++;
            flag = "p1";
        }else if(!p1 && p2){
            p2 = p2.next;
            k++;
            flag ="p2";
        }
    }
    // 长表先走k步
    p1 = pHead1;
    p2 = pHead2;
    if(flag=="p1"){
        while(k){
            p1 = p1.next;
            k--;
        }
    }else{
        while(k){
            p2 = p2.next;
            k--;
        }
    }
    
    // 两表一起走，走到相同点即位公共点
    while(p1!=p2){
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
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