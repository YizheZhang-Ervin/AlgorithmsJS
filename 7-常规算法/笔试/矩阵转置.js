function reverseMatrix(sourceArr) {
    var reversedArr = [];
    for (var n = 0; n < sourceArr[0].length; n++) {
        reversedArr[n] = [];
        for (var j = 0; j < sourceArr.length; j++) {
            reversedArr[n][j] = sourceArr[j][n];
        }
    }
    return reversedArr;
}

console.log(reverseMatrix([[1,2,3],[4,5,6]]))