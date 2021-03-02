// 请实现一个函数用来匹配包括'.'和'*'的正则表达式。
// 模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。 
// 在本题中，匹配是指字符串的所有字符匹配整个模式。
// 例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配
// 输入:"aaa","a*a"，输出:true

function match(str,pattern){
    let m = str.length;
    let n = pattern.length;
    let res = Array.from({length: m+1}, () => new Array(n + 1).fill(0));
    for(let i=0;i<m+1;i++){
        for(let j=0;j<n+1;j++){
            // pattern空->不匹配
            if(j==0){
                res[i][j] = i === 0;
            }else{
                // pattern前一位非*
                if(pattern[j - 1] != '*'){
                    // 此时字符串非首字母 且 (字符串的前1个与模式串的前1个相同 或 模式串前一个为.号)
                    // 则 字符串的前i个和模式串的前j个 和 字符串的前i-1个和模式串的前j-1个 的匹配情况相同
                    // 如ab和a.
                    if(i > 0 && (str[i - 1] === pattern[j - 1] || pattern[j - 1]=== '.')){
                        res[i][j] = res[i - 1][j - 1];
                    }
                // pattern前一个字符是*
                }else{
                    // pattern非前两个字符
                    if(j >= 2){
                        // 则 字符串的前i个和模式串的前j个 和 字符串的前i个和模式串的前j-2个 的匹配情况相同
                        // 如abb和ab*
                        res[i][j] |= res[i][j - 2];
                    }
                    // str非首字母 且 pattern不是前两个字符
                    // 且 (str前1个和pattern的前2个相同 或 pattern前2个为.号)
                    // 如abb和a.*
                    if(i >= 1 && j >= 2 && (str[i-1] == pattern[j-2] || pattern[j-2] == '.')) {
                        res[i][j] |= res[i-1][j];
                    }
                }
            }
        }
    }
    return Boolean(res[m][n]);
}

console.log(match("aaa","a*a"));
console.log(match("",""));
console.log(match("",".*"));
console.log(match("","."));
console.log(match("a",".*"));
