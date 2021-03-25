class Topic{
    constructor(subCallback){
        this.subArr = [];
        this.subCallback = subCallback;
    }
    // 增加订阅者
    addSub(sub){
        this.subArr.push(sub);
    }
    // 移除订阅者
    removeSub(sub){
        let idx = this.subArr.indexOf(sub);
        this.subArr.splice(idx,1);
    }
    // 主题更新(调用subscriber回调函数，作为publisher回调函数)
    notify(){
        // 调用订阅者的回调，更新信息
        this.subArr.forEach(ele=>{
            ele.updateInfo(this.subCallback);
        })
    }
}

class Subscriber{
    constructor(info){
        this.info = info;
    }
    // 主题更新 (作为topic回调函数)
    updateInfo(callback){
        this.info = callback(this.info);
        console.log("Subscriber信息更新: ",this.info);
    }
}

class Publisher{
    constructor(){
        this.topicArr = [];
    }
    // 发布主题
    addTopic(topic){
        this.topicArr.push(topic);
    }
    // 移除主题
    removeTopic(topic){
        let idx = this.topicArr.indexOf(topic);
        this.topicArr.splice(idx,1);
    }
    // 更新主题 (调用topic回调函数)
    publish(topic){
        let idx = this.topicArr.indexOf(topic);
        // 调用主题的回调，发布通知
        this.topicArr[idx].notify();
    }
}

// test
// 新主题
let t1 = new Topic(i=>i*2);
let t2 = new Topic(i=>i*3);
// 订阅者
let sub = new Subscriber(1);
// 给主题加订阅者
t1.addSub(sub);
t2.addSub(sub);
t2.removeSub(sub);
// 发布者
let pub = new Publisher();
// 发布者新增主题，发布主题
pub.addTopic(t1);
pub.addTopic(t2);
pub.removeTopic(t2);
pub.publish(t1);
