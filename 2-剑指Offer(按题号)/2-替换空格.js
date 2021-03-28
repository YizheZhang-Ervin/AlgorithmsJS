// 请实现一个函数，将一个字符串中的每个空格替换成“%20”。
// 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

function replaceSpace(str){
    // 正则表达式replace
    // return str.replace(/\s/g,"%20");
    // split+join
    return str.split(" ").join("%20");
    // encodeURIComponent()方法则会使用对应的编码替换所有非字母数字字符
    // encodeURI只替换空格为%20
    // return encodeURI(str);
}

console.log(replaceSpace("We Are Happy"));