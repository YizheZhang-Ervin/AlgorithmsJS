// 给定数组 ['1a','2b','13c','5a','3a','2c',] 
// 数组元素的格式是"1个数字(可能多位)"前缀与"1个字母"的组合，输出出现次数最多的字母对应的前缀数字之和。

// 遍历数组
// 取lastindex,统计次数
let countMax = (arr)=>{
    let map = new Map();
    let tempMax = 0;
    let tempSum = 0;
    arr.forEach((ele)=>{
        let word = ele[ele.length-1];
        let pre = parseInt(ele.substring(0,ele.length-1));
        let newCount;
        let newPre;
        //console.log(pre)
        if(map.has(word)){
            newCount = map.get(word)[0]+1;
            newPre = map.get(word)[1]+pre;
            if(newCount>tempMax){
                tempMax = newCount;
                tempSum = newPre;
            }
        }else{
            newCount = 1;
            newPre = pre;
        }
        map.set(word,[newCount,newPre]);
    });
    return tempSum;
}

console.log(countMax(['1a','2b','13c','5a','3a','2c',] ));
