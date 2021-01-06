// 请实现一个函数用来找出字符流中第一个只出现一次的字符。
// 例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。
// 当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。
// 如果当前字符流没有存在出现一次的字符，返回#字符。

class findNoDuplicateChar{
    constructor(){
        this.arr = [];
    }

    autoInsertAndFind(str){
        // 暂存不重复字符结果集
        let rst = [];
        // 把字符串拆为一个个字符插入，并查找第一个不重复的字符，并记录下来
        for(let i of str){
            this.insert(i);
            rst.push(this.find());
        }
        return rst;
    }
    insert(ch){
        let idx = this.arr.indexOf(ch);
        // 之前已有这个字符则从arr中删除这个字符
        if(idx>-1){
            this.arr.splice(idx,1);
        // 未出现过则放入这个字符
        }else{
            this.arr.push(ch);
        }
    }

    find(){
        // 当全是重复字符时，返回#
        if(this.arr.length==0){
            return "#"
        // 当没有重复字符时，返回第一个不重复的字符
        }else{
            return this.arr[0];
        }
    }

}

let fc = new findNoDuplicateChar();
let res = fc.autoInsertAndFind("google");
console.log(res);