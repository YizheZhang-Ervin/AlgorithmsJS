// 从一个包含学生成绩数组的中找到成绩第k好的所有学生的id
// 学生信息如下：[{score:89,id:1},{score:23,id:4}]。 
// 利用计数排序思想、时间、空间复杂度

let kthStudentId = (arr,k) =>{
    // 1. 存储成绩集 Map{score=>[id]}
    let scoreMap = new Map();
    arr.forEach(ele => {
        if(scoreMap.has(ele.score)){
            let lastVal = scoreMap.get(ele.score);
            scoreMap.set(ele.score,[...lastVal,ele.id]);
        }else{
            scoreMap.set(ele.score,[ele.id]);
        }
    });

    // 2. Map降序排序
    let keyArr = [],
        scoreMap2 = new Map();
    // 获取所有键
    for(let i of scoreMap.keys()){
        keyArr.push(i);
    }
    // 键排序
    keyArr.sort((x1,x2)=>x2-x1);
    // 创建新有序map
    keyArr.forEach(ele=>{
        scoreMap2.set(ele,scoreMap.get(ele));
    })
    
    // 3. 返回第K大的数
    // map可以有entries()/values()/keys()
    let counts = 0;
    for(let i of scoreMap2.entries()){
        if(counts==k){
            return i[1];
        }
        counts++;
    }
    return [];
}

// test
let arr = [{score:89,id:1},{score:23,id:4},{score:56,id:3}];
console.log(kthStudentId(arr,1));