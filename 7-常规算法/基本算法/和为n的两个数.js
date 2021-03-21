// 从列表中找出和为n的两个数，原理、时间、空间复杂度

let sumArr = (arr,n)=>{
    let dict = new Map();
    for(let i of arr){
        dict.set(i,i);
        let diff = n-i;
        if(dict.has(diff)){
            return [i,diff];
        }
    }
    return [];
}

// test
console.log(sumArr([1,2,3,4,5],7));