// 从字符串中查找并提取数字,并排序输出

let findNum = (str)=>{
    let arr = str.split(/\D+/);
    arr = arr.filter(val=>val!=="");
    arr.sort((a,b)=>a-b);
    return arr;
}

console.log(findNum("12ab111c1def"))