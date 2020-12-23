// 有一个大数组,var a = [‘1′, ‘2’, ‘3’, …];
// a的长度是100,内容填充随机整数的字符串.请先构造此数组a,然后设计一个算法将其内容去重

function deleteDuplicate(arr){
    var rst = []
    for(let i=0;i<arr.length;i++){
        let key = arr[i];
        if(rst.indexOf(key)<0){
            rst.push(key);
        }
    }
    return rst;
}

function fillArray(arr,start,end){
    // 特殊情况处理
    start = start==undefined?1:start;
    end = end==undefined?100:end;
    if(end<=start){
        end = start + 100;
    }

    var width = end-start;
    for(let i=100;i>-1;i--){
        arr.push(""+(Math.floor(Math.random() * width) + start));
    }
    return arr
}

var arr001 = [];
var rst = fillArray(arr001,1,100);
var rst2 = deleteDuplicate(rst);
console.log(rst2);