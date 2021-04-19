function openLock( deadends ,  target ) {
    let totalSteps = 0;
    let tempVal = "0000";
    while(tempVal!=target){
        // 遍历密码每一位
        for(let j = 0;j<target.length;j++){
            // 每位密码的可能性
            for(let i = parseInt(tempVal[j])+1;i<=parseInt(target[j]);i++){
                let temp = tempVal.substring(0,j)+""+ i +""+ tempVal.substr(j+1);
                // 进入死区
                if(deadends.indexOf(temp)!=-1){
                    tempVal = tempVal.substring(0,j)+""+ (i-1) +""+ tempVal.substr(j+1);
                }else{
                    totalSteps += 1;
                    tempVal = temp;
                }
                if(tempVal==target) return totalSteps;
            }
        }
    }
    return totalSteps;
}

console.log(openLock(["0201","0101","0102","1212","2002"],"0202"));

