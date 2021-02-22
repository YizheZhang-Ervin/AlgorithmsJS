// js实现链表，双链表

class linkedList{
    constructor(v){
        this.nodeValue = v;
        this.nodeNext = null;
    }

    get value(){
        return this.nodeValue;
    }

    set value(v){
        this.nodeValue = v;
    }

    get next(){
        return this.nodeNext;
    }

    set next(next){
        this.nodeNext = next;
    }

}

class dualLinkedList{
    constructor(v){
        this.nodeValue = v;
        this.nodeNext = null;
        this.nodePrevious = null;
    }

    get value(){
        return this.nodeValue;
    }

    set value(v){
        this.nodeValue = v;
    }

    get next(){
        return this.nodeNext;
    }

    set next(nxt){
        this.nodeNext = nxt;
    }

    get prev(){
        return this.nodePrevious;
    }

    set prev(previous){
        this.nodePrevious = previous;
    }
}

ll001 = new linkedList(0);
ll002 = new linkedList(2);
ll001.value = 1;
console.log(ll001.value);
ll001.next = ll002;
console.log(ll001.next.value);
dll001 = new dualLinkedList(0);
dll002 = new dualLinkedList(1);
dll003 = new dualLinkedList(2);
dll001.next = dll002;
dll002.prev = dll001;
dll002.next = dll003;
dll003.prev = dll002;
console.log(dll001.next.value);
console.log(dll002.next.value);
console.log(dll003.prev.value);