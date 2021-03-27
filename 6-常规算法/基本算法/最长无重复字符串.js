// 获取给定字符串中最长无重复字符串的子字符串，如'adgadgz'->'adgz'

// 字符串中没有重复字符的子串最大长度

// 方法1:
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
            slidingWindow.shift();
        }
    }
    return rst;
}

// 方法2:
let uniqueSubstr2 = (str1)=>{
    // 存放最长子串
    let rst = [];
    // 存放临时子串
    let temp = [];
    // 循环量
    let i = 0;
    // 循环全串
    while(i<str1.length){
        // 包含重复字符，队头出列
        while(temp.includes(str1[i])){
            temp.shift();
        }
        // 不重复字符队尾入列
        temp.push(str1[i]);
        // 判断是否是最长的子串
        if(temp.length>rst.length){
            rst = [...temp];
        }
        i++;
    }
    return rst.join("");
}

var str001 = "adgadgz";
var rst = uniqueSubstr(str001);
var rst2 = uniqueSubstr2(str001);
console.log(rst);
console.log(rst2);