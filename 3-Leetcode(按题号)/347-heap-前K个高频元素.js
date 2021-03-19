// 前K个高频元素
// nums=[1,1,1,2,2,3],k=2 ->[1,2]

// 用map
var topKFrequent = function (nums, k) {
    const map = new Map();
    nums.forEach(n => {
        map.set(n, map.has(n) ? map.get(n) + 1 : 1);
    });
    const list = Array.from(map).sort((a, b) => b[1] - a[1]);
    return list.slice(0, k).map(n => n[0]);
}

// 堆
class MinHeap {
    constructor() {
        this.heap = []
    }
    size() {
        return this.heap.length
    }
    swap(num1, num2) {
        const temp = this.heap[num1];
        this.heap[num1] = this.heap[num2];
        this.heap[num2] = temp;
    }
    peek(){
        return this.heap[0];
    }
    pop(){
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
    }
    getParentIndex(index) {
        if (index == 0) return undefined;
        return Math.floor((index - 1) / 2)
    }
    getLeftIndex(index) { 
        return index * 2 + 1 
    }
    getRightIndex(index) { 
        return index * 2 + 2 
    }
    shiftUp(index){
        if(index==0){
            return;
        }
        const parentIndex = this.getParentIndex(index);
        if(this.heap[parentIndex] && this.heap[parentIndex].value>this.heap[index].value){
            this.swap(parentIndex,index);
            this.shiftUp(parentIndex);
        }
    }
    shiftDown(index) {
        var left = this.getLeftIndex(index)
        var right = this.getRightIndex(index)
        if (this.heap[left] && this.heap[left].value < this.heap[index].value) {
            this.swap(this.heap[index], this.heap[left])
            this.shiftDown(left)
        }
        if (this.heap[right] && this.heap[right].value < this.heap[index].value) {
            this.swap(this.heap[index], this.heap[right])
            this.shiftDown(right)
        }
    }
    insert(data) {
        this.heap.push(data)
        this.shiftUp(this.size() - 1)
    }
}

// 用最小堆
var topKFrequent2 = function (nums, k) {
    const map = new Map();
    nums.forEach(n => {
        map.set(n, map.has(n) ? map.get(n) + 1 : 1);
    });
    const h = new MinHeap();
    map.forEach((value,key)=>{
        h.insert({value,key});
        if(h.size()>k){
            h.pop();
        }
    });
    return h.heap.map(a=>a.key);
}

// 测试
let nums = [6, 6, 6, 5, 5, 7];
let k = 2;
console.log(topKFrequent(nums, k))
console.log(topKFrequent2(nums, k))