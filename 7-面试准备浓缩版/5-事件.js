// 手写eventEmitter
class EventEmitter{
    constructor(){
        this.eventArr = {};
    }
    // 注册事件
    on(eventName,eventFn){
        // 事件列表不存在
        if(!this.eventArr[eventName]){
            this.eventArr[eventName] = [];
        }
        // 函数加入事件列表
        this.eventArr[eventName].push(eventFn);
        // 返回this
        return this;
    }
    // 触发事件
    emit(eventName,...args){
        // 事件列表不存在
        if(!this.eventArr[eventName]){
            return this;
        }
        // 触发事件
        this.eventArr[eventName].foreach(ele=>{
            ele.apply(this.args);
        })
        // 返回this
        return this;
    }
    // 关闭事件
    off(eventName,eventFn){
        // 事件列表不存在
        if(!this.eventArr[eventName]){
            return this;
        }
        // 函数为空,事件列表清空
        if(!eventFn){
            this.eventArr[eventName] = null;
            return this;
        }
        // 删除事件列表中的指定函数
        let idx = this.eventArr[eventName].indexOf(eventFn);
        this.eventArr[eventName].splice(idx,1);
        // 返回this
        return this;
    }
    // 只触发一次事件就注销
    once(eventName,eventFn){
        // 设置一次性函数: 函数+关闭
        let oneTime=()=>{
            eventFn.apply(this,arguments);
            this.off(eventName,eventFn);
        }
        // 一次性函数加入事件列表
        this.on(eventName,oneTime);
        // 返回this
        return this;
    }
}