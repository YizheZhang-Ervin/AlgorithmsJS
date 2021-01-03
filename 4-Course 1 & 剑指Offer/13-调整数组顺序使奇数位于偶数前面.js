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
                // 当后面再无奇数
                if(j==len-1){
                    return array;
                }
                j++;
            }
            // 第一个奇数
            let temp = array[j];
            for(let x=j; x>i;x--) {
                array[x] = array[x-1];
            }
            array[i] = temp;
        }
    }
    return array
}

console.log(reOrderArray([1, 2, 3, 4, 5]));