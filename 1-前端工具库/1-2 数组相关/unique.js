function unique1(arr){
    const result = [];
    arr.forEach(item => {
        if(result.indexOf(item)===-1){
            result.push(item);
        }
    });
    return result;
}

function unique2(arr){
    const result = [];
    const obj = {};
    arr.forEach(item=>{
        if(obj[item]===undefined){
            obj[item] = true;
            result.push(item);
        }
    });
    return result;
}

function unique3(arr){
    // let set = new Set(arr);
    // let arr2 = [...set];
    // return arr2;
    return [...new Set(arr)];
}
// test
const arr= [1,2,2,3,4];
const result1 = unique1(arr);
const result2 = unique2(arr);
const result3 = unique3(arr);
console.log(result1);
console.log(result2);
console.log(result3);