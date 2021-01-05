// 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
// 输入一个数组,求出这个数组中的逆序对的总数P。
// 并将P对1000000007取模的结果输出。 即输出P%1000000007
// 输入:[1,2,3,4,5,6,7,0]，输出:7

class InversePairs{

    constructor(arr){
        this.counts = 0;
        this.arr = arr;
    }

    map(arr){
        let len = arr.length;
        // 数组为空
        if(len==0){
            return [];
        }
        // 数组仅一个数字
        if(len==1){
            return arr;
        }
        // 中值mid，数组左半leftArr，数组右半rightArr
        let mid = Math.floor(len/2),
        leftArr = arr.slice(0,mid),
        rightArr = arr.slice(mid),
        leftMap = this.map(leftArr),
        rightMap = this.map(rightArr);
        // 拉链对比，合并左半右半
        return this.reduce(leftMap,rightMap);
    }
    
    reduce(left,right){
        let startLeft = 0,
            endLeft = left.length,
            startRight = 0,
            endRight = right.length,
            rst = [];
        // 判断两个数组是否对比玩
        while(startLeft<endLeft && startRight<endRight){
            // 左数组头<右数组头
            if(left[startLeft]<right[startRight]){
                rst.push(left[startLeft]);
                startLeft++;
            // 左数组头>右数组头
            }else{
                rst.push(right[startRight]);
                startRight++;
                // 右数字的移动次数=逆序对个数
                this.counts = (this.counts+endLeft-startLeft)%1000000007;
            }
        }
        // 左数组对比完仍有剩余，加入结果中
        if(startLeft<endLeft){
            rst = rst.concat(left.slice(startLeft));
        }
        // 右数组对比完仍有剩余，加入结果中
        if(startRight<endRight){
            rst = rst.concat(right.slice(startRight));
        }
        return rst;
    }
}

let ip = new InversePairs([1,2,3,4,5,6,7,0]);
let rst = ip.map(ip.arr);
console.log(ip.counts);


