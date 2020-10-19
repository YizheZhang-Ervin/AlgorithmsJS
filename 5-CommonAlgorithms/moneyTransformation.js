// 超大金额转换，1000000000->10,000,000,000

function moneyTrans(money){
    var rst = '',
    count = 0,
    moneyStr = (money || 0).toString(),
    moneyLen = moneyStr.length
    // 从后往前取值
    for(let i=moneyLen-1;i>=0;i--){
        count ++;
        if(count%3==0 && i!=0){
            rst = ","+moneyStr.charAt(i)+rst;
        }else{
            rst = moneyStr.charAt(i)+rst;
        }
    }
    return rst;
}

var money001 = 100000000;
var rst = moneyTrans(money001);
console.log(rst);