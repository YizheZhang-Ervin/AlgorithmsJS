// 最低价买入，最高价卖出
// input
let data = [20,18,29,17,22,21,30,19]

// special condition
if(data.length<2){
    return null;
}

// operation
let p1=0,
    p2=1,
    tempMax = data[1]-data[0],
    tempRst;

while(p1<data.length-1){
    p2 = p1+1;
    while(p2<data.length){
        let delta = data[p2]-data[p1];
        if(delta>tempMax){
            tempMax = delta;
            tempRst = data.slice(p1,p2+1);
        }
        p2++;
    }
    p1++;
}

// output
console.log(tempRst);
