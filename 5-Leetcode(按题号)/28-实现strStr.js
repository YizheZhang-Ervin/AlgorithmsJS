// 输入"hello","ll",输出2
// 输入"aaaaa","bba",输出-1
// 暴力法O(m*n)
// KMP算法:跳跃挪动，O(m+n)
// 最长公共前缀和后缀LPS，如ABCDABD的LPS为0000120，LPS[4]的前缀有A/AB/ABC/ABCD，后缀有BCDA/CDA/DA/A，相同且最长的是A，则LPS为1

let strStr = function(haystack,needle){
    let m = haystack.length,
    n = needle.length;
    if(n==0){
        return 0;
    }
    // 求出needle的LPS
    let lps = getLPS(needle),
    i=0,
    j=0;
    while(i<m){
        // ij所指字符相等时，两个指针一起前进一步
        if(haystack[i]==needle[j]){
            i++;
            j++;
            // j扫描完needle说明haystack中已找到needle，立即返回haystack中的起始位置
            if(j==n){
                return i-n;
            }
        // ij所指字符不同时，跳跃操作
        }else if(j>0){
            j=lps[j-1];
        // j=0说明needle第一个字符已不同于haystack的字符，尝试对比haystack下一个字符
        }else{
            i++;
        }
    }
    // haystack中找不到needle返回-1
    return -1;
}

let getLPS = function(str){
    let lps = [],
    i = 1,
    lens = 0;
    // LPS第一个值为0，所以直接从第二个位置开始遍历
    while(i<str.length){
        // 两个字符相等
        // 如果i可以延续前缀和后缀，更新LPS为lens+1
        if(str[i]==str[lens]){
            lps[i++]=++lens;
        // 判断lens是否大于0，然后尝试第二长前缀后缀看看能否延续
        }else if(lens>0){
            lens=lps[lens-1];
        }else{
            i++;
        }
    }
    return lps;
}

console.log(strStr("hello","ll"));