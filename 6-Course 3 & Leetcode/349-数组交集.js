// 数组交集,无序且唯一
// [1,2,2,1]和[2,2]->交集为[2]
// 方法:集合

var intersection = function(nums1,nums2){
    // 两个set方式
    // return [...new Set(nums1)].filter(item=>new Set(nums2).has(item));
    
    // 一个set，一个list方式
    // return [...new Set(nums1)].filter(item=>nums2.includes(item));

    //字典方式
    let map1 = new Map();
    nums1.forEach(n=>{
        map1.set(n,true);
    });
    const res = [];
    nums2.forEach(n=>{
        if(map1.get(n)){
            res.push(n);
            map1.delete(n);
        }
    })
    return res;
}

console.log(intersection([1,2,2,1],[2,2]))