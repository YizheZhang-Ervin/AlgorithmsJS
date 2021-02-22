// 统计字符串”aaaabbbccccddfgh”中字母个数或统计最多字母数
function countLetters(strs){
    var rst = {},maxLetter=[],maxCount=1;
    for(let i=0;i<strs.length;i++){
        let key=strs[i];
        if(!rst[key]){
            rst[key] = 1;
        }else{
            rst[key] += 1;
            if(rst[key]>maxCount){
                maxLetter.length = 0;              
                maxLetter.push(key);
                maxCount = rst[key];
            // 判断是否有多个元素出现次数一样多
            }else if(rst[key]==maxCount){
                maxLetter.push(key);
                maxCount = rst[key];
            }
        }
    }
    // console.log(rst);
    return maxLetter.join(',');
}

var strs001 = "aaaabbbccccddfgh";
var rst001 = countLetters(strs001);
console.log(rst001);