// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
// 使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，
// 并保证奇数和奇数，偶数和偶数之间的相对位置不变。

function reOrderArray(array) {
    if(array.length <= 1){
        return array;
    }
    // 遍历数组
    for(let i=0;i<array.length;i++){
        // 如果是偶数
        if(array[i]%2==0){
            let tmpIdx = i+1;
            // 找到此数后面第一个奇数
            while(array[tmpIdx]%2==0){
                // 后面无奇数则返回数组
                if(tmpIdx==array.length-1) return array;
                tmpIdx++;
            }
            // 偶数i后的其他所有数后移，奇数提前
            let firstOdd = array[tmpIdx];
            while(tmpIdx>i){
                array[tmpIdx] = array[tmpIdx-1];
                tmpIdx--;
            }
            // 把奇数放在i的地方
            array[i] = firstOdd;
        }
    }
    // 返回数组
    return array;
}

function reOrderArray2( array ) {
    let even = array.filter(ele=>ele%2==0);
    let odd = array.filter(ele=>ele%2!=0);
    return odd.concat(even);
}

console.log(reOrderArray([1, 2, 3, 4, 5]));
console.log(reOrderArray2([1, 2, 3, 4, 5]));