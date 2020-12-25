// 最长子串，必须连续
// 不等于子序列，子序列可以不连续
// 输入"pwwkew"，输出3(即wke)
// 输入"abcabcbb"，输出3
// 暴力法:时间O(n^3)
// 线性法(快慢指针):时间O(n)，空间:O(n)
// 优化线性法(快慢指针)
// 方法:找出不包含重复字符的子串，然后找出长度最大的子串，返回长度
// 双指针滑动窗口剪切子串,不断移动右指针，遇到重复字符，就把左指针移到重复字符下一位，过程中记录窗口长度

let check1 = function(strs){
    let set = new Set(),
    maxLen = 0;
    // 终止条件为快指针到字符串末尾
    for(let l=0,r=0;r<strs.length;r++){
        // 快指针碰到重复字符，则从慢指针开始删字符，删一个慢指针向前移一格，直到不包含重复字符为止
        while(set.has(strs[r])){
            set.delete(strs[l]);
            l++;
        }
        // 字符加入集合中
        set.add(strs[r]);
        // 记录最长子串长度
        maxLen = Math.max(maxLen,set.size);
    }
    return maxLen;
}

var check2 = function(s){
    let map = new Map(),
    maxLen = 0;
    for(let l=0,r=0;r<strs.length;r++){
        // 快指针指的元素已存在过，且快指针指的元素的位置在慢指针右侧(即重复字符在滑动窗口内)
        if(map.has(strs[r]) && map.get(strs[r])>=l){
            // 遇到重复字符，就把左指针移到重复字符下一位
            l = map.get(strs[r])+1;
        }
        // 求最大子串长度
        maxLen = Math.max(maxLen,r-l+1);
        map.set(strs[r],r);
    }
    return maxLen;
}   

console.log(check1("pwwkew"),check2("pwwkew"));