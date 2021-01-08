// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
// 例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 
// 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
// 输入:[[1,2],[3,4]]，输出:[1,2,4,3]

function printMatrix(matrix){
    // 起始行(上)rStart，起始列(左)cStart，结束行(下)rEnd，结束列(右)cEnd,输出结果rst
    let rEnd = matrix.length-1,
        cEnd = matrix[0].length-1,
        rStart = 0,
        cStart = 0,
        rst = [];
    // 判断是否遍历完
    while(rStart<rEnd+1 && cStart<cEnd+1){
        let r1,
            r2,
            c1,
            c2;
        // 左->右,变的是c1
        c1 = cStart;
        while(c1<cEnd+1){
            rst.push(matrix[rStart][c1]);
            c1++;
        }
        // 进下一行
        rStart++;
        // 上->下，变的是r1
        r1 = rStart;
        while(r1<rEnd+1){
            rst.push(matrix[r1][cEnd]);
            r1++;
        }
        // 进左一列
        cEnd--;

        // 起始行>结束行 或 起始列>结束列 则提前结束
        if(cStart>cEnd || rStart>rEnd){
            return rst;
        }

        // 右->左，变的是c2
        c2 = cEnd;
        while(c2>cStart-1){
            rst.push(matrix[rEnd][c2]);
            c2--;
        }
        // 进上一行
        rEnd--;
        // 下->上，变的是r2
        r2 = rEnd;
        while(r2>rStart-1){
            rst.push(matrix[r2][cStart]);
            r2--;
        }
        // 进右一列
        cStart++;
    }
    return rst;
}

console.log(printMatrix([[1,2,3],[4,5,6],[7,8,9]]))