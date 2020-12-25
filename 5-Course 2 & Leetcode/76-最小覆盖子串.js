// 最小覆盖子串
// "ADOBECODBANC"中找"ABC"，输出"BANC"
// 不存在返回""
// 方法:找出所有包含T的子串，再找出长度最小的子串返回
// 双指针滑动窗口，移动右指针找到包含T的子串，再移动左指针尽量减少包含T的子串的长度

var minStr = function(s,t){
    let l = 0;
    let r = 0;
    const need = new Map();
    // 找出各个需要的字符及字符的个数
    for(let c of t){
        need.set(c,need.has(c)?need.get(c)+1:1);
    }
    let needType = need.size;
    let res = "";
    // 移动右指针
    while(r<s.length){
        // 有目标字符则需求-1
        const c = s[r];
        if(need.has(c)){
            need.set(c,need.get(c)-1);
            if(need.get(c)===0){
                needType -= 1;
            }
        }
        // 目标字符都包含后
        // 移动左指针
        while(needType===0){
            // 比较子串长度，存储最小字串
            const newRes = s.substring(l,r+1);
            if(!res || newRes.length<res.length){
                res = newRes;
            }
            // 移动左指针，判断移动之后目标字符覆盖情况
            const c2 = s[l];
            if(need.has(c2)){
                need.set(c2,need.get(c2)+1);
                if(need.get(c2)===1){
                    needType +=1;
                }
            }
            l+=1;
        }
        r+=1;
    }
    return res;
}

console.log(minStr("ADOBECODBANC","ABC"));