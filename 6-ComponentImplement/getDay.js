// 写出今天星期几

function getDay(){
    var days = ['Day7','Day1','Day2','Day3','Day4','Day5','Day6'];
    var date = new Date();
    var rst = 'Today is: '+days[date.getDay()];
    return rst;
}

var rst = getDay();
console.log(rst);