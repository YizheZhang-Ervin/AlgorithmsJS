// 防抖: 规定时间内只让最后一次生效
let debounce = (callback,time)=>{
    let timer = null;
    return (e)=>{
        // 已触发过计时器，则清除
        if(timer!=null){
            clearTimeout(timer);
        }
        // 设置计时器
        timer = setTimeout(()=>{
            callback.call(this,e);
            // 计时器结束
            timer = null;
        },time)
    }
}
// debounce(console.log("A"),300);

// 节流: 一段时间内重复触发只执行一次
let throttle = (callback,time)=>{
    let start = 0;
    return (e)=>{
        // 当前时间
        let now = Date().now();
        // 已过规定时间即可触发
        if(now-start>time){
            callback.call(this,e);
            // 设置新的开始时间
            start = now;
        }
    }
}
// throttle(console.log("B"),300);

// 手写thunk
let thunk = (fn)=>{
    return (...args)=>{
        return (callback)=>{
            fn.apply(this,[...args,callback]);
        }
    }
}
let run = (fn)=>{
    let gen = fn();
    let next = (data)=>{
        let rst = gen.next(data);
        if(rst.done) return;
        rst.value(next);
    }
    next();
}
let exe = (str,callback)=>{
    console.log("this is str",str);
    // 返回数据给调用方
    callback("this is callback");
};
let gen = function*(){
    let f1 = yield thunk(exe)("args 1");
    console.log(typeof f1);
    let f2 = yield thunk(exe)("args 2");
    console.log(f2);
}

// test
run(gen);

// 手写Iterator
let addIterator = (obj)=>{
    obj[Symbol.iterator] = ()=>{
        let keys = Object.keys(obj);
        let values = Object.values(obj);
        let len = keys.length;
        let n = 0;
        return {
            next:()=>{
                if(n<len){
                    return {
                        value:{k:keys[n],v:values[n++]},
                        done:false
                    }
                }else{
                    return {
                        value:"",
                        done:true
                    }
                }
            }
        }
    }
}

// test
// let obj = {a: 100,b: 200}
// addIterator(obj);
// for (let { k, v } of obj) {
//     console.log(k, v)
// }

// 图片懒加载
let lazyLoad = (imgArr) => {
    let isOut = (element)=>{
        // 元素距离顶部
        let distance = element.getBoundingClientRect().top;
        // 元素距离顶部<可视高度
        return distance <= window.innerHeight;
    }
    imgArr.foreach(img=>{
        if(isOut(img)){
            // 判断图片是否已经加载
            if(!img.src){
                img.src = img.dataset.src;
            }
        }
    })
}

// 私有变量
let PrivateVarBridge = (()=>{
    let key = Symbol("key");
    class PrivateVarClass{
        constructor(val){
            this[key] = val;
        }
        getVal(){
            return this[key];
        }
    }
    return PrivateVarClass;
})();

// test
// let p = new PrivateVarBridge(123);
// let p2 = new PrivateVarBridge(456);
// console.log(p.getVal());
// console.log(p2.getVal());