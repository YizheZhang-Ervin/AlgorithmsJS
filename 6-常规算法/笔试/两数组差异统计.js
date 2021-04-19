// 输入：
// [a, b, c]
// [t, b, a, x]
// 输出：
// a move index 2
// c remove
// t append index 0
// x append index 3
// 实现一个 diff (oldData, newData){}

let diff =(oldData, newData)=>{
    let operation = [];
    // 遍历oldData，找到每个元素newData中的对应位置
    for(let i=0;i<oldData.length;i++){
        // case1: oldData的元素在newData中存在
        let idxInNewData = newData.indexOf(oldData[i]);
        if(idxInNewData!==-1){
            // oldData和newData索引位置不相同，move
            if(idxInNewData!==i){
                operation.push(oldData[i] + "" + " move index "+""+ idxInNewData);
            }
        }
        // case2: oldData的元素在newData中不存在，remove
        else if(idxInNewData===-1){
            operation.push(oldData[i] + "" + " remove");
        }
    }
    for(let j=0;j<newData.length;j++){
        let ele = newData[j];
        // case3: oldData的元素不存在，newData中存在，append
        if(oldData.indexOf(ele)===-1){
            operation.push(ele + "" + " append index " + j);
        }
    }
    return operation;
}

console.log(diff(["a", "b", "c"],["t", "b", "a", "x"]));