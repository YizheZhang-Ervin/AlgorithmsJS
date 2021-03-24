// 方法1
let splitNum = (str) => {
    var str1 = str.split("").reverse().join("");
    var newStr = str1.replace(/\d{3}/g, ()=>{
        return arguments[0] + ","
    });
    var newStr = newStr.split("").reverse().join("");
    return newStr;
}

// 方法2
function splitNum2(str) {
    var j = 0;
    for (var i = str.length - 1; i > 0; i--) {
        j++;
        if (j === 3) {
            str = str.substring(0, i) + "," + str.substring(i);
            j = 0;
        }
    }
    return str;
}

// test
var str = "1234567890";
console.log(splitNum(str));
console.log(splitNum2(str));