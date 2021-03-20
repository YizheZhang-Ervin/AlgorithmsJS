// 获取给定字符串中最长无重复字符串的子字符串，如'adgadgz'->'adgz'

// 字符串中没有重复字符的子串最大长度

function uniqueSubstr(str1){
    // 做一个滑动窗口
    var slidingWindow = [],
    lens = str1.length,
    left = 0,
    right = 0,
    maxSubStrLens = 0,
    rst;
    // 遍历str1
    while(left<lens && right<lens){
        let current = str1.charAt(right);
        // 如果字母不重复则加入窗口，右+1
        if(slidingWindow.indexOf(current)==-1){
            slidingWindow.push(current);
            right++;
            let newLen = right-left;
            // 并记录当前窗口长度，及最长子串
            if(newLen>maxSubStrLens){
                maxSubStrLens = newLen;
                rst = str1.slice(left,right);
            }
        // 重复则窗口左+1
        }else{
            left++;
            slidingWindow.pop();
        }
    }
    return rst;
}

var str001 = "adgadgz";
var rst = uniqueSubstr(str001);
console.log(rst);