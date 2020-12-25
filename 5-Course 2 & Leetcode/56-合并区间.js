// 输入[[1,3],[2,6],[8,10],[15,18]],输出[[1,6],[8,10],[15,18]]
// 用双指针previous和current
// 时间O(nlogn)，空间O(n)

let merge = function(intervals){
    //将所有区间按起始时间的先后顺序排序
    intervals.sort((a,b)=>{
        return (a[0]<b[0])?-1:((a[0]>b[0])?1:0);
    })
    let previous = null;
    let rst = [];
    for(let current of intervals){
        // 如果是第一个区间 或 这个区间没与前个区间重叠
        if(previous==null || current[0]>previous[1]){
            previous = current;
            rst.push(current);
        // 区间重叠则更新前一个区间的结束时间
        }else{
            previous[1]=Math.max(previous[1],current[1]);
        }
    }
    return rst;
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))