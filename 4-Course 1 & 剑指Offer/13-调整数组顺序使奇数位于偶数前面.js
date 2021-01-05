// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
// 使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，
// 并保证奇数和奇数，偶数和偶数之间的相对位置不变。

function reOrderArray(array) {
    let len = array.length;
    if(len <= 1){
        return array;
    }
    for (let i = 0; i < len; i++) {
        // 如果是偶数
        if (array[i] % 2 == 0) {
            // 找此数后第一个奇数
            let j = i + 1;
            while (array[j] % 2 == 0) {
                // 当后面再无奇数，返回数组
                if(j==len-1){
                    return array;
                }
                j++;
            }
            // 此数后第一个奇数
            let temp = array[j];
            // i及后面的偶数后移
            for(let x=j; x>i;x--) {
                array[x] = array[x-1];
            }
            // 把奇数放在i的地方
            array[i] = temp;
        }
    }
    return array
}

console.log(reOrderArray([1, 2, 3, 4, 5]));