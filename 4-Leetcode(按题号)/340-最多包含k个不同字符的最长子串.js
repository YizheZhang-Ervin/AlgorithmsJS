// 输入"eceba",2, 输出3(ece长度3)
// 输入"aa",1, 输出2(aa长度2)
// 暴力法:O(n^2)
// 快慢指针:时间O(n),空间O(n)

let substrs = function (s, k) {
    // 统计不同字符
    let map = new Map(),
        maxs = 0;
    for (let i = 0, j = 0; j < s.length; j++) {
        let cj = s[j];
        // 快指针指向的字符加入map中，统计字符出现的次数
        map.set(cj, map.get(cj)?map.get(cj):0 + 1);
        // map大小超过k，将慢指针从map中删掉
        while (map.size > k) {
            let ci = s[i];
            map.set(ci, map.get(ci) - 1);
            if (map.get(ci) == 0) {
                map.delete(ci);
            }
            // 慢指针继续向前
            i++;
        }
        maxs = Math.max(maxs, j - i + 1);
    }
    return maxs;

}

console.log(substrs("eceba", 2))