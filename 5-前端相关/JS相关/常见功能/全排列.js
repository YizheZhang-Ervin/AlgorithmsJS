function permutate(str) {
    var result = [];
    if (str.length > 1) {
        var left = str[0];
        var rest = str.slice(1, str.length);
        // 余下的递归全排列
        var preResult = permutate(rest);
        for (var i = 0; i < preResult.length; i++) {
            // 内部全排列: 23->123/213/231，32->132/312/321
            for (var j = 0; j <= preResult[i].length; j++) {
                var tmp = preResult[i].slice(0, j) + left + preResult[i].slice(j, preResult[i].length);
                result.push(tmp);
            }
        }
    } else if (str.length == 1) {
        return [str];
    }
    return result;
}

// test
console.log(permutate("123"));