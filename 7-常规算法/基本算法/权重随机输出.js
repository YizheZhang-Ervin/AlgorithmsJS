// 实现基于权重的抽奖
// 抽中物品1的权重为2，抽中物品2的权重1
// 那么，物品1的概率就是1/3，物品2的概率就是2/3
// 1的权重为1，则在数组中插入1个1，2的权重为2，则插入两个2
// 再对数组[1,2,2]进行随机抽取，就能实现基于权重的随机数了
// https://blog.csdn.net/xjtroddy/article/details/51488328

class weightRandom{
    constructor(config){
        this.config = config || new Map([[1,2],[2,1]]);
        this.pool = [];
        this.countExtract = 0;
        this.extracted = new Map();
        this.init();
    }

    // 初始化
    init(){
        for(let k of this.config.keys()){
            for(let c=0;c<this.config.get(k);c++){
                this.pool.push(k);
            }
        }
    }

    lottery(){
        // 判断是否全部奖已抽完
        if(this.countExtract==this.pool.length){
            return "奖已抽完";
        }
        // 抽奖
        let randomVal = this.extract();
        // 判断这个奖是否已抽完
        randomVal = this.control(randomVal);
        return randomVal;
    }

    extract(){
        // 抽奖
        return this.pool[Math.floor(Math.random() * this.pool.length)];
    }

    control(randomVal){
        // 这个奖已经发完
        while(this.extracted.get(randomVal)>=this.config.get(randomVal)){
            randomVal = this.extract();
        }
        // 已抽奖加入抽过的列表，并统计各奖抽的次数
        if(this.extracted.has(randomVal)){
            let count = this.extracted.get(randomVal);
            this.extracted.set(randomVal,count+1);
        }else{
            this.extracted.set(randomVal,1);
        }
        this.countExtract +=1;
        return randomVal;
    }
}

// test
let wr = new weightRandom();
let r1 = wr.lottery();
let r2 = wr.lottery();
let r3 = wr.lottery();
let r4 = wr.lottery();
console.log(r1,r2,r3,r4);

// 设计一个函数验证随机函数是否正确 

