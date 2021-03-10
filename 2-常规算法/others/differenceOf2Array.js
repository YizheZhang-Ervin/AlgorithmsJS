// 实现求两个集合A, B 的差集，<A-B>和<B-A>都要给出

function difference(set1,set2){
    // 筛出另一个集合中没有的元素
    var rst1 = set1.filter(x=>set2.indexOf(x)==-1),
    rst2 = set2.filter(x=>set1.indexOf(x)==-1),
    rst = `A-B is \[${rst1}\] & B-A is \[${rst2}\]`;
    return rst;
}

var set001 = [0,1,2,3];
var set002 = [2,3,4,5];
var rst = difference(set001,set002);
console.log("Difference: %s",rst);