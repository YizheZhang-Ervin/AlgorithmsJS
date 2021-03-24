// 1. bind/call/apply
let call = (Fn,obj,...args)=>{
    if(!obj){
        obj = globalThis;
    }
    obj.temp = Fn;
    let rst = obj.temp(args);
    delete obj.temp;
    return rst;
}

let bind = (Fn,obj,...args) => {
    return (...args2)=>{
        return call(Fn,obj,...args,...args2);
    }
}

// test
let obj = null;
call(console.log,obj,"haha","hehe");
bind(console.log,obj,"haha")("hehe");

// 2. 封装为promise
class IPromise{
    constructor(processCallback){
        this.status = "pending";
        this.msg = "";
        processCallback(this.resolve.bind(this),this.reject.bind(this));
    }
    // 决定对象状态
    resolve(resolveMsg){
        this.status = "fulfilled";
        this.msg = resolveMsg;
        console.log("new: ",this.status);
        console.log("new: ",this.msg);
    }
    reject(rejectMsg){
        this.status = "rejected";
        this.msg = rejectMsg;
        console.log("new: ",this.status);
        console.log("new: ",this.msg);
    }
    // 决定外部函数的成功失败
    then(resolveCallback,rejectCallback){
        // resolveCallback未定义，直接调用拒绝函数
        if(!resolveCallback){
            rejectCallback(this.msg);
            return this;
        }

        // Promise对象状态改为Resolved时调用 （必选）
        if(this.status=="fulfilled"){
            resolveCallback(this.msg);
        // Promise对象状态改为Rejected时调用 （可选）
        }else if(this.status=="rejected"){
            rejectCallback(this.msg);
        }
        return this;
    }
    catch(rejectCallback){
        this.then(undefined,rejectCallback);
        return this;
    }
}

// test
let processFn = (resolveFn,rejectFn) =>{
        resolveFn("this is msg")
    },
    resolveFn = (resolveMsg) =>{
        console.log("then: ",resolveMsg);
    },
    rejectFn = (rejectMsg)=>{
        console.log("then: ",rejectMsg);
    }
let p = new IPromise(processFn)
        .then(resolveFn,rejectFn)
        .catch(rejectFn)

// 3. 实现promise.all
let promiseAll = (promiseArr) =>{
    let isPromise = (obj)=>{
        return !!obj && (typeof(obj)==="object" || typeof(obj)==="function") && typeof(obj.then)==="function";
    }
    let rst = [];
    // 返回promise
    return new Promise((resolve,reject)=>{
        // 遍历promise数组
        promiseArr.forEach(element=>{
            // 是promise
            if(isPromise(element)){
                // promise.then
                element.then((data)=>{
                    // 返回的结果加入结果集
                    rst.push(data);
                    // 处理完全部promise数组，就resolve结果集
                    if(rst.length===promiseArr.length){
                        resolve(rst);
                    }
                },reject)
            // 不是promise，直接加入结果集
            }else{
                rst.push(element);
            }
        })
    })
}

// test
let p1 = Promise.resolve(3);
let p2 = 1337;
let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});
promiseAll([p1,p2,p3]).then((data)=>{console.log(data)});

// 4. promise+AJAX
let ajaxPromise = (url,data) =>{
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open("get",url);
        xhr.send(data);
        xhr.onreadystatechange=()=>{
            if(xhr.status==200 && xhr.readyState==4){
                resolve(JSON.parse(xhr.responseText));
            }else{
                reject();
            }
        }
    })
}

