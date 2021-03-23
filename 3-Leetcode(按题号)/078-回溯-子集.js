// 子集
// 给定一组不含重复元素的整数数组，返回该数组所有可能的子集(解集不能包含重复子集)
// 方法:用递归模拟所有情况，保证接的数字都是后面的数字，收集所有到达递归重点的情况并返回
// 时间复杂度O(2^n)，空间复杂度O(n)

var subsets1 = function(nums){
    const res = [];
    const backtrack = (path,l,start)=>{
        if(path.length===l){
            res.push(path);
            return;
        }
        // 以1开始,2开始,3开始···的子集
        for(let i = start;i<nums.length;i++){
            backtrack(path.concat(nums[i]),l,i+1);
        }
    };
    // 子集长度为0,1,2,3···
    for(let i=0;i<=nums.length;i++){
        backtrack([],i,0);
    }
    return res;
}

let subsets2 = (nums)=>{
    let rst = [];
    let recur = (index,arr)=>{
        if(index==nums.length){
            rst.push(arr.slice());
            return;
        }
        arr.push(nums[index]);
        recur(index+1,arr);
        arr.pop();
        recur(index+1,arr);
    }
    recur(0,[]);
    return rst;
}

// test
console.log(subsets1([1,2,3]))
console.log(subsets2([1,2,3]))