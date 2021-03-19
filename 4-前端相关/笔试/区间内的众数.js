// 众数
// 总共n个，求连续区间k内的众数
// 个数一样取最小值作为众数

let mode = (arr,k)=>{
    let rst = [];
    
    // find first mode number
    let findMode = (arr)=>{
        let map1 = new Map();
        let tempMaxVal = -1;
        let tempMaxIdx = [];
        for(let i=0;i<arr.length;i++){
            if(map1.has(arr[i])){
                let counts = map1.get(arr[i])+1
                map1.set(arr[i],counts);
                if(counts>tempMaxVal){
                    tempMaxVal = counts;
                    tempMaxIdx = [arr[i]];
                }else if(counts==tempMaxVal){
                    tempMaxIdx.push(arr[i]);
                }
            }else{
                map1.set(arr[i],1);
            }
        }
        if(tempMaxIdx.length===0) return Math.min(...arr);
            return Math.min(...tempMaxIdx);
    }

    let p1 = 0,
        p2 = p1+k-1;
    while(p2<arr.length){
        // find mode number
        rst.push(findMode(arr.slice(p1,p2+1)))
        // next loop
        p1++;
        p2++;
    }
    return rst;
}
console.log(mode("1 2 2 1 3".split(" "),3))


var majorityElement = function(nums) {
    let l = nums.length
    let map = new Map()
    let max = 0
    let item
    for (let i = 0; i < l; i++) {
        if(map.has(nums[i])) {
            let v = map.get(nums[i])
            map.set(nums[i],++v)
        } else {
            map.set(nums[i],1)
        }
    }
    for (let [key,value] of map.entries()) {
        if (value > max) {
            max = value
            item = key
        }
    }
    return item
};

var majorityElement2 = function(nums) {
    let l = nums.length
    let val = nums[0]
    let count = 1
    for (let i = 0; i < l; i++) {
       if (val === nums[i]) {
           count++
       } else {
           count--
           if (count <= 0) {
               val = nums[i]
               count = 1
           }
       }
    }
    return val
};