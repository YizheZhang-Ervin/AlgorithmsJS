// 数组去重
let unique = (arr)=>{
    let rst = [];
    // 遍历判断每个元素是否结果中已有
    arr.forEach(element => {
        if(rst.indexOf(element)<0){
            rst.push(element);
        }
    });
    return rst;
}
console.log(unique([1,2,2,3,3,3]));

// 数组扁平化
let flatten = (arr)=>{
    let rst = [];
    // 遍历判断是否为数组，是数组递归扁平加入结果，非数组直接加入结果
    arr.forEach(element=>{
        if(Array.isArray(element)){
            rst = rst.concat(flatten(element));
        }else{
            rst.push(element);
        }
    });
    return rst;
}
console.log(flatten([1,[2,[3,4],5]]));

// 对象合并
let merge = (...objs)=>{
    let rst = {};
    // 两个对象属性分别加入结果，重复属性的值变数组
    objs.forEach(obj=>{
        Object.keys(obj).forEach(key=>{
            if(rst.hasOwnProperty(key)){
                rst[key] = [rst[key],obj[key]];
            }else{
                rst[key] = obj[key];
            }
        })
    })
    return rst;
}
let obj1 = {a:[{x:2},{y:4}],b:1,c:200};
let obj2 = {a:{z:3},b:[2,3],c:"foo"};
console.log(merge(obj1,obj2));

// 对象浅克隆
let clone = (obj)=>{
    if(typeof obj=="object" && typeof obj!="null"){
        if(Array.isArray(obj)){
            return [...obj];
        }else{
            return {...obj};
        }
    }else{
        return obj;
    }
}
let obj3 = {x:"abc",y:{m:1},z:[1,2,3]};
console.log(clone(obj3));

// 对象深克隆
let deepclone = (obj)=>{
    // 存储已克隆对象
    let cache = new Map();
    let dClone = (obj,cache)=>{
        // 非对象
        if(typeof obj !="object") return obj;
        // null
        if(obj==null) return null;
        // 日期
        if(Object.prototype.toString.call(obj)=="[object Date]"){
            return new Date(obj);
        }
        // 正则表达式
        if(Object.prototype.toString.call(obj)=="[object RegExp]"){
            return new RegExp(obj);
        }
        // 判定是否已克隆
        if(cache.has(obj)){
            return cache.get(obj);
        }
        // 新建对象，并标明已克隆
        let newObj = new obj.constructor;
        cache.set(obj,newObj);
        // 遍历克隆
        for(let key in obj){
            // 键属于obj自身
            if(obj.hasOwnProperty(key)){
                newObj[key] = dClone(obj[key],cache);
            }
        }
        return newObj;
    }
    return dClone(obj,cache);
}
let obj4 = {
    a:1,
    b:[2,3],
    c:/^\d+$/,
    d:{x:1,y:[1,2],z:{zz:1}},
    e: Date.now(),
    f:"abc",
}
obj4.g = obj4.d;
obj4.d.r = obj4.g;
console.log(deepclone(obj4));

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
debounce(console.log("A"),300);

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
throttle(console.log("B"),300);

// bind实现
let bind = (Fn,obj,...args1)=>{
    // 返回的是函数
    return (...args2)=>{
        // obj没定义则指向全局
        if(obj==undefined || obj==null){
            obj = globalThis;
        }
        // 把绑定的函数作为对象的方法
        obj.temp = Fn;
        // 执行得结果
        let rst = obj.temp(...[...args1,...args2]);
        // 删除对象得方法
        delete obj.temp;
        // 返回结果
        return rst;
    }
}
let fn = function(...args){console.log(args)};
bind(fn,this,1)(2);

// new实现
let myNew = (conFn,...args)=>{
    let obj = {};
    // 调用构造函数
    let rst = conFn.call(obj,...args);
    // 给对象设置原型
    obj.__proto__ = conFn.prototype;
    // 调用的构造函数有返回值则返回返回值，否则返回obj
    return rst instanceof Object?rst:obj;
}
function Person(name, age) {
    this.name = name
    this.age = age
    // return {name,age};
}
console.log(myNew(Person, 'abc', 99));

// instanceof实现
let myInstanceOf = (obj,conFn)=>{
    let proFn = conFn.prototype;
    let proObj = obj.__proto__;
    while(proObj){
        if(proFn==proObj){
            return true;
        }
        proObj = proObj.__proto__;
    }
    return false;
}
let p = new Person();
console.log(myInstanceOf(p,Person));

// promise实现
class myPromise{
    constructor(process){
        this.status = "pending";
        this.msg = "";
        process(this.resolve.bind(this),this.reject.bind(this));
    }
    // 执行成功
    resolve(val){
        this.status = 'fulfilled';
        this.msg = val;
        console.log(this.msg);
    }
    // 执行失败
    reject(err){
        this.status = 'rejected';
        this.msg = err;
    }
    // 成功/失败后的操作
    then(success,fail){
        if(this.status === 'fulfilled') {
            success(this.msg)
        }
        if(this.status === 'rejected') {
            fail(this.msg)
        }
    }
}
let p1 = new myPromise(
    (resolve,reject)=>{resolve("resolve...");}
    ).then(
        (successMsg)=>{console.log(successMsg,"success")},
        (failMsg)=>{console.log(failMsg,"fail")}
    );

// sleep实现
let sleep = (time)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("resolved"),time);
    });
};
let exe1 = async ()=>{
    let tmp = await sleep(300);
    console.log("await success");
    return tmp;
};
let exe2 = ()=>{
    sleep(300).then((successMsg)=>{console.log(successMsg,"then success")});
}
// exe1();
// exe2();

// once实现
let once = (callback)=>{
    var tag = true;
    return ()=>{
        if(tag){
            tag=!tag;
            callback();
        }
    };
}
let o = once(()=>{console.log("once called")});
o();
o();

// 单例模式实现
class Singleton{
    constructor(name){
        if(!Singleton._instance){
            Singleton._instance = this;
            this.name = name;
        }
        return Singleton._instance;
    }

}
console.log(new Singleton("abc").name);
console.log(new Singleton("def").name);

// ajax实现
let ajax =()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("get","url",true);
    xhr.send("msg");
    xhr.onreadystatechange=()=>{
        if(xhr.readyState==4 && xhr.status==200){
            console.log(xhr.responseText);
        }
    }
}

// async(spawn函数)实现
let spawn = (genFn)=>{
    return new Promise((resolve,reject)=>{
        let gen = genFn();
        let next = (val)=>{
            let rst = gen.next(val);
            if(rst.done){
                resolve(rst.value);
            }else{
                rst.value.then((val)=>{next(val)});
            }
        }
        next();
    })
}
function* genFn(){
    let p1 = yield new Promise((resolve)=>setTimeout(()=>{resolve(1)},300));
    let p2 = yield new Promise((resolve)=>setTimeout(()=>{resolve(p1+1)},300));
    console.log(p1,p2);
}
// spawn(genFn);

// form序列化
let serialize = (form)=>{
    let rst = [];
    form.forEach(ele=>{
        rst.push(`${encodeURIComponent(ele.name)}=${encodeURIComponent(ele.value)}`);
    })
    return rst.join(" & ");
}
let form=[{name:"a",value:1},{name:"b",value:2},{name:"c",value:3}];
console.log(serialize(form));

// 图片懒加载实现(window.onscroll时触发)
let lazyLoad=(imgs)=>{
    let getTop=(ele)=>{
        let dis = ele.offsetTop;
        // 最近的父元素
        while(ele=ele.offsetParent){
            dis +=ele.offsetTop;
        }
        return dis;
    }
    // 滚动条位置+可视区域高度>当前元素与页面顶部的距离，就加载这个图片
    let de = document.documentElement;
    let ch = de.clientHeight;
    let st = de.scrollTop || document.body.scrollTop;
    imgs.forEach(ele=>{
        if(ch+st>getTop(ele)){
            ele.src = ele.getAttribute("data-src");
        }
    });
}
