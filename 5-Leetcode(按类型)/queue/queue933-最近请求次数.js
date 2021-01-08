//最近请求次数(3000ms内)
// 越早发出的越不在3000ms内
// [[],[1],[100],[3001],[3002]]
// [null,1,2,3,3]

// 类
var RecentCounter = function(){
    this.q = [];
}

RecentCounter.prototype.ping = function(t){
    // 新的入队
    this.q.push(t);
    // 超时的出队
    while(this.q[0]<t-3000){
        this.q.shift();
    }
    return this.q.length;
}

var test = function(input){
    let rc = new RecentCounter();
    let output = [];
    input.forEach((val)=>{
        if(val[0]==undefined){
            output.push(null);
        }else{
            output.push(rc.ping(val[0]));
        }
    })
    return output;
} 

console.log(test([[],[1],[100],[3001],[3002]]));