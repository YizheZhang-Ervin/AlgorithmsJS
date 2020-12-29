// 输入[ [1,4,3,1,3,2], [3,2,1,3,2,4], [2,3,3,2,3,1] ]，输出4
// 里往外找O(n^3)
// 外往里找O(m*n*log(m+n))

class Cell {
    constructor(row, col, height) {
        this.row = row;
        this.col = col;
        this.height = height;
    }
}

class MaxHeap {
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
    remove(){
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
        return this.heap[0];
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
        if(this.heap[parentIndex] && this.heap[parentIndex].height<this.heap[index].height){
            this.swap(parentIndex,index);
            this.shiftUp(parentIndex);
        }
    }
    shiftDown(index) {
        var left = this.getLeftIndex(index)
        var right = this.getRightIndex(index)
        if (this.heap[left] && this.heap[left].height > this.heap[index].height) {
            this.swap(this.heap[index], this.heap[left])
            this.shiftDown(left)
        }
        if (this.heap[right] && this.heap[right].height > this.heap[index].height) {
            this.swap(this.heap[index], this.heap[right])
            this.shiftDown(right)
        }
    }
    insert(data) {
        this.heap.push(data)
        this.shiftUp(this.size() - 1)
    }
}

let volume = function (heights) {
    if (heights == null || heights.length == 0 || heights[0].length == 0) {
        return 0;
    }
    let m = heights.length,
        n = heights[0].length,
        queue = new MaxHeap(),
        visited = [];

    for (let i = 0; i < m; i++) {
        visited[i] = [];
        for (let j = 0; j < n; j++) {
            visited[i][j] = false;
        }
    }
    for (let i = 0; i < m; i++) {
        visited[i][0] = true;
        visited[i][n - 1] = true;
        queue.insert(new Cell(i, 0, heights[i][0]));
        queue.insert(new Cell(i, n - 1, heights[i][n - 1]));
    }
    for (let j = 0; j < n; j++) {
        visited[0][j] = true;
        visited[m - 1][j] = true;
        queue.insert(new Cell(0, j, heights[0][j]))
        queue.insert(new Cell(m - 1, j, heights[m - 1][j]));
    }
    let dirs = new Set([[-1, 0], [1, 0], [0, -1], [0, 1]]),
        total = 0;
    // BFS，从优先队列中取出最矮的方块
    while (queue.size() != 0) {
        let cell = queue.remove();
        for (let dir of dirs) {
            let row = cell.row + dir[0],
                col = cell.col + dir[1];
            // 该方向上的相邻方块能接多少雨水取决于它是否低于当前方块，新方块加到优先队列中
            if (row >= 0 && row < m && col >= 0 && col < n && !visited[row][col]) {
                visited[row][col] = true;
                total += Math.max(0, cell.height - heights[row][col]);
                queue.insert(new Cell(row, col, Math.max(heights[row][col], cell.height)));
            }
        }
    }
    return total;
}

console.log(volume([[1, 4, 3, 1, 3, 2], [3, 2, 1, 3, 2, 4], [2, 3, 3, 2, 3, 1]]))