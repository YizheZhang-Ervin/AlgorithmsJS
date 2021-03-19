// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
// 例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 
// 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
// 输入:[[1,2],[3,4]]，输出:[1,2,4,3]

function printMatrix2(matrix){
    // 起始行(上)top，起始列(左)left，结束行(下)bottom，结束列(右)right,输出结果arr
    let arr = [],
        top = 0,
        left = 0,
        right = matrix[0].length-1,
        bottom = matrix.length-1;
    // 判断界内有数字
    while(top<=bottom && left<=right){
        // 左->右
        let tmpCol = left;
        while(tmpCol<=right){
            arr.push(matrix[top][tmpCol]);
            // 向右一格
            tmpCol++;
        }
        // 顶上进下一行
        top++;
        // 上->下
        let tmpRow = top;
        while(tmpRow<=bottom){
            arr.push(matrix[tmpRow][right]);
            tmpRow++;
        }
        // 右边进左一列
        right--;
        
        // 出界提前结束
        if(top>bottom || left>right) return arr;
        
        // 右->左
        let tmpCol2 = right;
        while(tmpCol2>=left){
            arr.push(matrix[bottom][tmpCol2]);
            tmpCol2--;
        }
        // 下面进上一行
        bottom--;
        let tmpRow2 = bottom;
        // 下->上
        while(tmpRow2>=top){
            arr.push(matrix[tmpRow2][left]);
            tmpRow2--;
        }
        // 左面进右一列
        left++;
    }
    return arr;
}

console.log(printMatrix([[1,2,3],[4,5,6],[7,8,9]]))