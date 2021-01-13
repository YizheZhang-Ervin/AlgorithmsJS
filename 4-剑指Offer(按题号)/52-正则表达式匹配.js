// 请实现一个函数用来匹配包括'.'和'*'的正则表达式。
// 模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。 
// 在本题中，匹配是指字符串的所有字符匹配整个模式。
// 例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配
// 输入:"aaa","a*a"，输出:true

function match(s, pattern){
    // 结果集
    let dp = [];
    // 遍历字符串s
    for(let i=0;i<s.length;i++){
        dp[i]=[];
        // 遍历模式串pattern
        for(let j=0;j<=pattern.length;j++){
            // 检查是否匹配
            check(i,j,dp,s,pattern);
        }
    }
    return dp[s.length-1][pattern.length-1];
}

function check(i,j,dp,s,pattern){
    // 字符串和模式串都为空，则匹配
    if(i==0 && j==0){
        dp[i][j]=true;
    // 模式串为空，则不匹配
    }else if(j==0){
        dp[i][j]=false;
    }else{
        // 模式串前一个字符不是*
        if(pattern[j-1]!="*"){
            // 此时字符串非首字母 且 (字符串的前1个与模式串的前1个相同 或 模式串前一个为.号)
            if(i>=1&&(s[i-1]===pattern[j-1]||pattern[j-1]===".")){
                // 则 字符串的前i个和模式串的前j个 和 字符串的前i-1个和模式串的前j-1个 的匹配情况相同
                // 如ab和a.
                dp[i][j]=dp[i-1][j-1];
            }
        // 模式串前一个字符是*
        }else{
            // 模式串不是前两个字符
            if(j>=2){
                // 则 字符串的前i个和模式串的前j个 和 字符串的前i个和模式串的前j-2个 的匹配情况相同
                // 如abb和ab*
                dp[i][j]=dp[i][j-2];
            }
            // 字符串不是首字母 且 模式串不是前两个字符 且(字符串前1个和模式串的前2个相同 或 模式串前2个为.号)
            if(i>=1&&j>=2&&(s[i-1]===pattern[j-2]||pattern[j-2]===".")){
                // 则字符串的前i个和模式串的前j个 和 字符串的前i-1个和模式串的前j个 的匹配情况相同
                // 如abb和a.*
                dp[i][j]=dp[i][j]||dp[i-1][j];
            }
        }
    }
}

console.log(match("aaa","a*a"));