// 如何得到一个数据流中的中位数？
// 如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。
// 如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。
// 我们使用Insert()方法读取数据流，使用GetMedian()方法获取当前读取数据的中位数。

class DataStream{
    constructor(){
        this.arr = [];
    }

    insert(num){
        // 把num插入arr最后
        this.arr.push(num);
        // 倒序遍历，比num大的数都往后排，把num插入到合适位置
        for(let i = this.arr.length-2;this.arr[i]>num;i--){
            [this.arr[i],this.arr[i+1]] = [this.arr[i+1],this.arr[i]];
        }
    }

    getMedian(){
        // 如果arr中有偶数个数
        if(this.arr.length%2==0){
            // 中位数取中间两数的平均(下标从0开始所以是l/2和l/2-1)
            return (this.arr[this.arr.length/2-1]+this.arr[this.arr.length/2])/2;
        // 如果arr中有奇数个数
        }else{
            // 中位数取中间数(下标从0开始，所以是l/2的向下取整)
            return this.arr[parseInt(this.arr.length/2)];
        }
    }
}

ds = new DataStream();
ds.insert(1);
ds.insert(1);
ds.insert(3);
// ds.insert(2);
console.log(ds.getMedian());