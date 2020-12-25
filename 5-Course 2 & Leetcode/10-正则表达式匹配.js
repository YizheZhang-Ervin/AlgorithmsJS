// 输入"aa","a"->输出false
// 输入"aa","a*"->输出true
// 输入"ab",".*"->输出true
// 输入"aab","c*a*b"->输出true
// 实现.和*匹配
// 时间O(n^2)，空间O(n^2)

// 方法1:从前往后+回溯
let matchs1 = function(s,p){
    if(s==null || p==null){
        return false;
    }
    return isMatch(s,0,p,0);
}

let isMatch = function(s,i,p,j){
    let m = s.length,
    n = p.length;
    // 看pattern和字符串是否都扫描完毕
    if(j==n){
        return i==m;
    }
    // 看j指针下一个是否为星号，非星号则递归调用isMatch
    if(j==n-1 || p[j+1]!="*"){
        return (i<m) && (p[j]=="." || s[i]==p[j]) && (isMatch(s,i+1,p,j+1));
    }
    // j指向的字符下一个为星号，则不断的将它和星号做一个整体，分别表示空串，一个字符，两个字符等
    if(j<n-1 && p[j+1]=="*"){
        // i指向字符要和j的指向字符匹配
        while((i<m)&&(p[j]=='.' || s[i]==p[j])){
            // 有一种情况可以让s和p匹配则返回true
            if(isMatch(s,i,p,j+2)){
                return true;
            }
            // 无法匹配则i++，表示用星号组合去匹配更长的字符串
            i++;
        }
    }
    return isMatch(s,i,p,j+2);
}

// 方法2:从后向前
let matchs2 = function(s,p){
    if(s==null || p==null){
        return false;
    }
    return isMatch(s,s.length,p,p.length);
}

let isMatch2 =function(s,i,p,j){
    // p和s都空则匹配
    if(j==0){
        return i==0;
    }
    // p不空，s空，p由星号组成则一定匹配
    if(i==0){
        return j>1 && p[j-1]=="*" && isMatch2(s,i,p,j-2);
    }
    // p非星号，判断当前两个字符是否相等，如果相等，则递归看前面的字符
    if(p[j-1]!="*"){
        return isMatch2(s[i-1],p[j-1]) && isMatch2(s,i-1,p,j-1);
    }
    // p当前字符为星号，尝试用星号表示空串是否匹配，尝试用星号表示一个字符看是否匹配
    return isMatch2(s,i,p,j-2) || isMatch2(s,i-1,p,j) && isMatch22(s[i-1],p[j-2]);
}

let isMatch22 = function(a,b){
    return a==b || b==".";
}

// 方法2:从后向前+动态规划
let matchs3 = function(s,p){
    let m = s.length,
    n = p.length,
    dp = [];
    for(let i=0;i<m+1;i++){
        dp[i] = new Array();
        for(let j=0;j<n+1;j++){
            dp[i][j] = false;
        }
    }
    // 表示两字符串都为空时，互相匹配
    dp[0][0] = true;
    // 初始化第一行
    for(let k=1;k<=n;k++){
        // s为空，p的任一位置都得由一系列星号组成
        dp[0][k]=k>1 && p[k-1]=="*" && dp[0][k-2];
    }
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            // p当前字符非星号，判断当前两字符是否相等
            // 相等则看dp[i-1][j-1]的值
            
            if(p[j-1]!="*"){
                dp[i][j] = dp[i-1][j-1] && isMatch3(s[i-1],p[j-1]);
            // p当前字符为星号时，星号组合表示空串看是否匹配dp[i][j-2]，星号组合白哦是一个字符看是否匹配dp[i-1][j]
            }else{
                dp[i][j] = dp[i][j-2] || dp[i-1][j] && isMatch3(s[i-1],p[j-2]);
            }
        }
    }
    return dp[m][n];
}

let isMatch3 = function(a,b){
    return a==b || b==".";
}

console.log(matchs1("ab",".*"));
console.log(matchs2("ab",".*"));
console.log(matchs3("ab",".*"));