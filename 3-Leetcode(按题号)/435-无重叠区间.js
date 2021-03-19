// 输入[[1,2],[2,3],[3,4],[1,3]]->输出1(即移出[1,3]后剩余区间无重叠)
// 输入[[1,2],[2,3]]->输出0(不用移除就可无重叠)
// 暴力法1:O(nlogn)+O(n*2^n)
// 暴力法2:prev表示前一个区间和curr表示当前区间
// 贪婪法1:按起始时间排序，求出最少删多少个区间
// 贪婪法2:按结束时间排序，求出最多多少个区间没重叠

// 暴力法2
let move1 = function(intervals){
    intervals.sort((a,b)=>{
        return (a[0]<b[0])?-1:((a[0]>b[0])?1:0);
    });
    return handleIntervals(-1,0,intervals);
}

let handleIntervals = function(prev,curr,intervals){
    // 判断是否已处理完，已处理完不需要删除直接返回
    if(curr==intervals.length){
        return 0;
    }
    // taken说明保留当前区间，最少需要删除多少其他区间
    // notaken说明删除当前区间，最少需要删除多少区间
    let taken = Number.MAX_SAFE_INTEGER,
    notaken;
    // prev和curr没重叠时保留当前区间curr
    if(prev==-1 || intervals[prev][1]<=intervals[curr][0]){
        taken = handleIntervals(curr,curr+1,intervals);
    }
    notaken = handleIntervals(prev,curr+1,intervals)+1;
    // 返回最小值(判断是否删除当前区间)
    return Math.min(taken,notaken);
}

// 贪婪法1
let move2 = function(intervals){
    if(intervals.length==0){
        return 0;
    }
    intervals.sort((a,b)=>{
        return (a[0]<b[0])?-1:((a[0]>b[0])?1:0);
    });
    // end最小结束时间点,count目前为止删了多少区间
    let end = intervals[0][1],
    count = 0;
    // 从第二个区间开始判断当前区间和前一个区间结束时间
    for(let i=1;i<intervals.length;i++){
        // 区间重叠:前一个结束>当前起始
        if(intervals[i][0]<end){
            // end记录两个结束时间的最小值，删去结束时间晚的
            end = Math.min(end,intervals[i][1]);
            count++;
        // 不重叠则更新end为当前区间结束时间
        }else{
            end = intervals[i][1];
        }
    }
    return count;
}

// 贪婪法2
let move3 =function(intervals){
    if(intervals.length==0){
        return 0;
    }
    intervals.sort((a,b)=>{
        return (a[1]<b[1])?-1:((a[1]>b[1])?1:0);
    });
    // end当前结束时间,count记录多少个没有重叠的区间
    let end = intervals[0][1],
    count = 1;
    // 从第二个区间开始遍历剩下的区间
    for(let i=1;i<intervals.length;i++){
        // 当前区间与前一个区间结束时间无重叠
        if(intervals[i][0]>=end){
            // 更新新结束时间，计数+1
            end = intervals[i][1];
            count++;
        }
    }
    // 总区间数-无重叠数 = 最少要删除的区间个数
    return intervals.length-count;
}

console.log(move1([[1,2],[2,3],[3,4],[1,3]]))
console.log(move1([[1,2],[2,3]]))
console.log(move2([[1,2],[2,3],[3,4],[1,3]]))
console.log(move2([[1,2],[2,3]]))
console.log(move3([[1,2],[2,3],[3,4],[1,3]]))
console.log(move3([[1,2],[2,3]]))