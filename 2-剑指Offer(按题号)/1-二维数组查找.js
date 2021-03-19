// 在一个二维数组中（每个一维数组的长度相同）
// 每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
// 输入:7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]],输出:true

function findNum(target, array){
    // 总行数r，总列数c
    let r = array.length,
        c = array[0].length;
    // 第一行末尾坐标(rx,cx)
    let rx = 0,
        cx = c-1;
    // 判断当前值与目标值关系
    while(array[rx][cx]!==target){
        let cur = array[rx][cx];
        // 目标>当前值，则进入下一行
        if(target>cur){
            rx++;
        // 目标<当前值，则进入左边一列
        }else if(target<cur){
            cx--;
        }
        // 判断是否找到
        if(rx>r-1 || cx<0){
            return false;
        }
    }
    // 判断是否找到
    if(array[rx][cx]===target){
        return true;
    }
}

console.log(findNum(7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]));