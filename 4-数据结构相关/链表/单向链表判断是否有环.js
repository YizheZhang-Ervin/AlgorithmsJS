// 链表判断是否有环
let judgeCircle = (head)=>{
    // 快慢指针
    let p1 = head,
        p2 = head;
    while(p1 && p1.next && p1.next.next){
        p1 = p1.next;
        p2 = p2.next.next;
        if(p1==p2){
            return "Have Circle";
        }
    }
    return "No Circle";
}

// test
const a = {val:'a'};
const b = {val:'b'};
const c = {val:'c'};
a.next = b;
b.next = c;
c.next = null;
console.log(judgeCircle(a));