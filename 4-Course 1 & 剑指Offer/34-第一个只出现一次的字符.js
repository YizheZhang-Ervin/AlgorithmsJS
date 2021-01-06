// 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,
// 并返回它的位置, 如果没有则返回 -1（需要区分大小写）.（从0开始计数）
// 输入:"google"，输出:4

function firstNotRepeatingChar(str){
    let len = str.length;
    for(let i=0;i<len;i++){
        // 第一次出现和最后一次出现在相同位置
        if(str.indexOf(str[i])==str.lastIndexOf(str[i])){
            return i;
        }
    }
    return -1;
}

console.log(firstNotRepeatingChar("google"));