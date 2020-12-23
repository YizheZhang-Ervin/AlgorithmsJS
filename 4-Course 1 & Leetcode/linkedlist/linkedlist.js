//链表

const a = {val:'a'};
const b = {val:'b'};
const c = {val:'c'};
a.next = b;
b.next = c;

//遍历
let p = a;
while(p){
    console.log(p.val);
    p = p.next;
}

//插入d
const d = {val:'d'};
b.next = d;
d.next = c;

//删除d
b.next = c;