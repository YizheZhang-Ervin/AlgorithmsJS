// 找出和为目标值的数组中的两个数,并返回两数的索引值
// [2,7,11,15]，找到目标9->2+7=9
// 方法:字典k存数，v存索引

var twoSum = function(nums,target){
    const map = new Map();
    for(let i=0;i<nums.length;i++){
        const n = nums[i];
        const n2 = target-n;
        if(map.has(n2)){
            return [map.get(n2),i];
        }else{
            map.set(n,i)
        }
    }
}
