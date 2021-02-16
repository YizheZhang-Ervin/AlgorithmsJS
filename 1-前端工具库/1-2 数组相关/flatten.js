function flatten1(arr){
    let result = [];
    arr.forEach(element => {
        if(Array.isArray(element)){
            result = result.concat(flatten1(element));
        }else{
            result = result.concat(element);
        }
    });
    return result;
}

function flatten2(arr){
    let result = [...arr];
    // array里面只要存在array
    while(result.some(item=>Array.isArray(item))){
        // 就把array展开并
        result = [].concat(...result);
    }
    return result;
}

// test
const arr = [1,2,[3,4,[5,6]]];
const result1 = flatten1(arr);
const result2 = flatten2(arr);
console.log(result1);
console.log(result2);