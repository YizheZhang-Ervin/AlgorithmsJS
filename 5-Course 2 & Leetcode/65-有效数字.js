// 有效数字
// 验证数字是否可以解释为十进制数字
// 构建表示状态的图，邻接表
// 遍历字符串，沿着图走，到某个节点无可走就返回false，遍历结束走到3/5/6就返回true否则false

var isNumber = function(s){
    const graph={
        0:{'blank':0,'sign':1,'.':2,'digit':6},
        1:{'digit':6,'.':2},
        2:{'digit':3},
        3:{'digit':3,'e':4},
        4:{'digit':5,'sign':7},
        5:{'digit':5},
        6:{'digit':6,'.':3,'e':4},
        7:{'digit':5}
    };
    let state = 0;
    for(c of s.trim()){
        if(c>'0'&&c<'9'){
            c = 'digit';
        }else if(c===" "){
            c = 'blank';
        }else if(c==="+" || c==='-'){
            c = 'sign';
        }
        state = graph[state][c];
        if(state===undefined){
            return false;
        }
    }
    if(state===3||state===5||state===6){
        return true;
    }
    return false;
}

console.log(isNumber("123"));
console.log(isNumber("abs"));