// 输入一个字符串,按字典序打印出该字符串中字符的所有排列。
// 例如输入字符串abc,则按字典序打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
// 输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。
// 输入:"ab"，输出:["ab","ba"]

function permutation(str)
{
    // 字符串空，返回空串
    if(!str) return [];
    let arr = [];
    let arrange = (rst,string)=>{
        // 如果string为空(处理完)，加入结果集
        if(!string) arr.push(rst);
        // 未处理完则遍历string
        for(let i=0;i<string.length;i++){
            // 和前一个字母一致则continue
            if(i>0 && string[i]==string[i-1]){
                continue;
            }
            // 当前字符和递归结果拼接
            let rst2 = rst+string[i];
            // 去除当前字符形成新串，继续递归
            let string2 = string.slice(0,i)+string.slice(i+1);
            arrange(rst2,string2);
        }
    }
    arrange("",str);
    return arr;
}

console.log(permutation("abc"));
console.log(permutation("abcc"));