function createArr(n,len){
    let arr = new Array(len).fill(null),
        temp = [];
    arr[0] = n;
    arr = arr.map((val,idx)=>{
        if(val==null){
            val = temp[idx-1]+1;
        }
        temp.push(val);
        return val;
    });
    return arr;
    
    // 普通方法:
    // let arr = new Array(len).fill(null);
    // arr[0] = n;
    // for(let i=1;i<arr.length;i++){
    //     arr[i] = arr[i-1]+1;
    // }
    // return arr;
}

function sumEqualN(count){
    let rst = [];
    let middle = Math.ceil(count/2);
    for(let i=1;i<=middle;i++){
        for(let j=2;;j++){
            let total = (i+(i+j-1))*(j/2);
            if(total>count){
                break;
            }else if(total==count){
                rst.push(createArr(i,j));
                break;
            }
        }
    }
    return rst;
}

console.log(sumEqualN(15));