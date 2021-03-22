// 合并两个有序数组，不使用sort，concat

let merge = (arr1,arr2) =>{
    let rst = [];
    let p1 = 0,
        p2 = 0;
    // arr1,arr2都没跑完
    while(arr1[p1] && arr2[p2]){
        let flag = arr1[p1]>arr2[p2];
        if(flag>0){
            rst.push(arr2[p2]);
            p2++;
        }else{
            rst.push(arr1[p1]);
            p1++;
        }
    }
    //防止arr1,arr2没有跑完
    rst = rst.concat(arr1.slice(p1),arr2.slice(p2));
    return rst;
}

// test
let arr1 = [1,3,5],
    arr2 = [2,4,6,8];
console.log(merge(arr1,arr2));