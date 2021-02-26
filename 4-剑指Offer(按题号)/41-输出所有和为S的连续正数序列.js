// 小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。
// 但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。
// 没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。
// 现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列?
// 输入:9，输出:[[2,3,4],[4,5]]

function FindContinuousSequence(sum){
    // 查找上限bound,临时结果存储于rst1,最终结果存储与rst2
    let bound = parseInt(sum/2),
        rst1 = [],
        rst2 = [];
    // 起始位i，增量值j
    for(let i=1;i<bound+1;i++){
        for(let j=1;j<bound+1;j++){
            let start = i,
                end = i+j,
                tempSum;
            // 区间总和
            tempSum = (start+end)*(j+1)/2;
            // 区间和=目标和
            if(tempSum==sum){
                rst1.push([start,end]);
                break;
            // 区间和>目标和
            }else if(tempSum>sum){
                break;
            }
        }
    }
    rst1.forEach(item=>{
        let start = item[0],
            end = item[1],
            tempArr = [];
        // 把区间内所有值加入临时数列
        for(let x = start;x<end+1;x++){
            tempArr.push(x);
        }
        rst2.push(tempArr);
    })
    return rst2;
}

console.log(FindContinuousSequence(3));