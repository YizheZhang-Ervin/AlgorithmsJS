// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
// 例如输入一个长度为9的数组[1,2,3,2,2,2,5,4,2]
// 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
// 输入:[1,2,3,2,2,2,5,4,2],输出:2

function MoreThanHalfNum(numbers){
    // 当前指针所指数字tempNum，当前计数tempCount，最终计数finalCount，输入长度len
    let tempNum,
        tempCount = 0,
        finalCount = 0,
        len = numbers.length;
    // 循环数组，两两比较
    numbers.forEach(ele=>{
        // 当当前计数为0时
        if(tempCount===0){
            tempNum = ele;
            tempCount++;
        // 当前计数不为0时
        }else{
            // 如果当前数字和之前的一样，计数+1
            if(tempNum == ele){
                tempCount++;
            // 如果当前数字和之前的不一样，计数-1
            }else{
                tempCount--;
            }
        }
    })
    // 循环结束后，全部两两抵消则说明不存在出现次数超过一半的数，返回0
    if(tempCount==0){
        return 0;
    }
    // 循环结束后，没有两两抵消完，则开始对对可能值计数
    finalCount = numbers.filter(ele=>ele==tempNum).length;
    // 如果计数结果比数组的一半长，则返回此数的计数
    // 如果计数结果没有数组一半长，则返回0
    return finalCount>Math.floor(len/2)?tempNum:0;
}

console.log(MoreThanHalfNum([1,2,3,2,2,2,5,4,2]));