// 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
// 输入一个数组,求出这个数组中的逆序对的总数P。
// 并将P对1000000007取模的结果输出。 即输出P%1000000007
// 输入:[1,2,3,4,5,6,7,0]，输出:7

function InversePairs(data){
    let movement = 0;
    let map = (arr) =>{
        // 数组为空
        if(arr.length==0) return [];
        // 数组仅一个数字
        if(arr.length==1) return arr;
        // 中值mid，数组左半leftArr，数组右半rightArr
        let mid = Math.floor(arr.length/2);
        let left = arr.slice(0,mid);
        let right = arr.slice(mid);
        // 拉链对比，合并左半右半
        return reduce(map(left),map(right));
    }
    let reduce = (arr1,arr2) =>{
        let rst=[],
            p1=0,
            p2=0;
        // 判断两个数组是否对比完
        while(p1<arr1.length && p2<arr2.length){
            // 左数组头>右数组头
            if(arr1[p1]>arr2[p2]){
                rst.push(arr2[p2]);
                // 左数组大，右数组小->说明存在逆序对
                // 右数字总的移动次数==逆序对个数
                // 本次存在的逆序对个数==左数组总长-当前左数组索引位
                movement = (movement+arr1.length-p1)%1000000007;
                p2++;
            // 左数组头<右数组头
            }else{
                rst.push(arr1[p1]);
                p1++;
            }
        }
        // 两数组可能对比完仍有剩余，加入结果中
        return rst.concat(arr1.slice(p1),arr2.slice(p2));
    }
    map(data);
    return movement;
}
console.log(InversePairs([1,2,3,4,5,6,7,0]));