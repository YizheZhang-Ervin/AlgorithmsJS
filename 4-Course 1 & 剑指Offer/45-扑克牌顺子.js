// LL今天心情特别好,因为他去买了一副扑克牌,发现里面居然有2个大王,2个小王(一副牌原本是54张^_^)...
// 他随机从中抽出了5张牌,想测测自己的手气,看看能不能抽到顺子,如果抽到的话,他决定去买体育彩票,嘿嘿！！
// “红心A,黑桃3,小王,大王,方片5”,“Oh My God!”不是顺子.....
// LL不高兴了,他想了想,决定大\小 王可以看成任何数字,并且A看作1,J为11,Q为12,K为13。
// 上面的5张牌就可以变成“1,2,3,4,5”(大小王分别看作2和4),“So Lucky!”。LL决定去买体育彩票啦。 
// 现在,要求你使用这幅牌模拟上面的过程,然后告诉我们LL的运气如何， 如果牌能组成顺子就输出true，否则就输出false。
// 为了方便起见,你可以认为大小王是0。
// 输入:[0,3,2,6,4]，输出:true

function isContinuous(numbers){
    // 原数组长度lenNumbers
    // 除0后数组arr，除0后数组长度lenArr
    // 除0除重后的集合arrSet，除0除重后的集合长度lenSet
    // 集合最大值maxNum，集合最小值minNum
    let lenNumbers = numbers.length,
        arr = numbers.filter(num=>num!=0),
        lenArr = arr.length,
        arrSet = new Set(arr),
        lenSet = arrSet.size,
        minNum = Math.min(...arr),
        maxNum = Math.max(...arr);
    // 数组长度不为5
    if(lenNumbers!=5){
        return false;
    }
    // 数组最大值最小值差值>4
    if(Math.abs(maxNum-minNum)>4){
        return false;
    }
    // 数组有重复数字
    if(lenSet!=lenArr){
        return false;
    }
    return true;
}

console.log(isContinuous([0,3,2,6,4]));