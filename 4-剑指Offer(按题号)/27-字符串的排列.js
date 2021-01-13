// 输入一个字符串,按字典序打印出该字符串中字符的所有排列。
// 例如输入字符串abc,则按字典序打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
// 输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。
// 输入:"ab"，输出:["ab","ba"]

function permutation(str){
    // 字符串str空，返回空数组
    if(str.length==0){
        return [];
    }
    // 结果集rst
    let rst = [];
    // 字符串排列
    arrange(rst,"",str);
    return rst;
}

function arrange(rst,s,str){
    // 当字符串str最后一个字母处理完毕，所有处理结果加入结果集rst
    if(str.length==0){
        rst.push(s);
    }
    // 遍历整个字符串str
    for(let i=0;i<str.length;i++){
        // 如果前后字母一致则进下个循环
        if(i>0 && str[i]==str[i-1]){
            continue;
        }
        // 把第i个字母去除，形成新待排列的字符串str
        let newStr = str.slice(0,i)+str.slice(i+1);
        // 和上个递归的字母拼接
        let newS = s+str[i];
        // 递归
        arrange(rst,newS,newStr);
    }
}

console.log(permutation("ab"));