// 无重复字符的最长字串
// "abcabcbb"的结果为3
// 方法:找出不包含重复字符的子串，然后找出长度最大的子串，返回长度
// 双指针滑动窗口剪切子串,不断移动右指针，遇到重复字符，就把左指针移到重复字符下一位，过程中记录窗口长度

var lens = function(s){
    let l = 0;
    let res = 0;
    const map = new Map();
    for(let r=0;r<s.length;r++){
        // 重复字符在滑动窗口内
        if(map.has(s[r]) && map.get(s[r])>=l){
            l = map.get(s[r])+1;
        }
        // 求最大子串长度
        res = Math.max(res,r-l+1);
        map.set(s[r],r);
    }
    return res;
}   