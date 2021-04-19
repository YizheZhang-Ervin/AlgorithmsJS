function isValidSudoku( board ) {
    let rowLen = board.length;
    let colLen = board[0].length;
    let divide = rowLen / 3;
    let counts = (rowLen / 3);
    
    // row judge
    for(let i=0;i<rowLen;i++){
        let tempObj = {};
        for(let j=0;j<colLen;j++){
            if(!tempObj[board[i][j]]){
                tempObj[board[i][j]] = true;
            }else{
                if(board[i][j]!=".") return false;
            }
        }
    }
    // col judge
    for(let j=0;j<colLen;j++){
        let tempObj2 = {};
        for(let i=0;i<rowLen;i++){
            if(!tempObj2[board[i][j]]){
                tempObj2[board[i][j]] = true;
            }else{
                if(board[i][j]!=".") return false;
            }
        }
    }
    // square judge
    let r = 0,
        c = 0;
    while(counts*counts){
        let tempObj3 = {};
        for(let i=0;i<r;i++){
            for(let j=0;j<c;j++){
                if(!tempObj3[board[i][j]]){
                    tempObj3[board[i][j]] = true;
                }else{
                    if(board[i][j]!=".") return false;
                }
            }
        }
        counts--;
        if(counts%3==0){
            c += divide;
        }else{
            r += divide;
        }
    }
    return true;
    
}

let s = [["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
console.log(isValidSudoku(s));