// 二分查找
let binSearch = (arr,target) =>{
    let left = 0,
        right = arr.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2),
            midVal = arr[mid];
        if(target>midVal){
            left = mid +1;
        }else if(target<midVal){
            right = mid-1;
        }else{
            return mid;
        }
    }
    return -1;
}
// console.log(binSearch([1,2,3,4,5],2));

// 冒泡
let bubbleSort =(arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}
// console.log(bubbleSort([5,4,3,2,1]));

// 选择
let selectSort = (arr)=>{
    for(let i=0;i<arr.length;i++){
        let tempMaxIdx = 0;
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]>arr[tempMaxIdx]){
                tempMaxIdx = j;
            }
        }
        [arr[tempMaxIdx],arr[arr.length-i-1]] = [arr[arr.length-i-1],arr[tempMaxIdx]];
    }
    return arr;
}
// console.log(selectSort([5,4,3,2,1]));

// 插入
let insertSort = (arr)=>{
    for(let i=1;i<arr.length;i++){
        let p = i-1,
            curVal = arr[i];
        while(curVal<arr[p] && p>-1){
            arr[p+1] = arr[p];
            p--;
        }
        arr[p+1] = curVal;
    }
    return arr;
}
// console.log(insertSort([5,4,3,2,1]));

// 希尔
let shellSort = (arr)=>{
    let gap = Math.floor(arr.length/2);
    for(let i=gap;i>0;i=Math.floor(i/2)){
        for(let j=i;j<arr.length;j++){
            let p = j-i,
                curVal = arr[j];
            while(curVal<arr[p] && p>-1){
                arr[p+i] = arr[p];
                p-=i;
            }
            arr[p+i] = curVal;
        }
    }
    return arr;
}
// console.log(shellSort([5,4,3,2,1]));

// 归并
let mergeSort = (arr)=>{
    let map = (arr)=>{
        if(arr.length==1) return arr;
        let mid = Math.floor(arr.length/2);
        let left = arr.slice(0,mid),
            right = arr.slice(mid);
        return reduce(map(left),map(right));
    }
    let reduce = (arr1,arr2)=>{
        let rst = [];
        while(0<arr1.length && 0<arr2.length){
            if(arr1[0]<arr2[0]){
                rst.push(arr1.splice(0,1)[0]);
            }else{
                rst.push(arr2.splice(0,1)[0]);
            }
        }
        return rst.concat(arr1,arr2);
    }
    return map(arr);
}
// console.log(mergeSort([5,4,3,2,1]));

// 快排
let quickSort = (arr)=>{
    if(arr.length<1) return arr;
    let mid = Math.floor(arr.length/2),
        midVal = arr.splice(mid,1)[0],
        leftArr = [],
        rightArr = [],
        p = 0;
    while(p<arr.length){
        if(arr[p]<midVal){
            leftArr.push(arr[p]);
        }else{
            rightArr.push(arr[p]);
        }
        p++;
    }
    return quickSort(leftArr).concat(midVal).concat(quickSort(rightArr));
}
// console.log(quickSort([5,4,3,2,1]));

// 手写bind/call/apply
let bind = (obj,fn) =>{
    return (...args)=>{
        if(!obj){
            obj = globalThis;
        }
        obj.temp = fn;
        let rst = obj.temp(...args);
        delete obj.temp;
        return rst;
    }
}
// bind(this,console.log)("abc");

// 手写promise
class IPromise{
    constructor(process){
        this.status = "pending";
        this.msg = "";
        process(this.resolve.bind(this),this.reject.bind(this));
    }
    resolve(data){
        this.status = 'fulfilled';
        this.msg = data;
    }
    reject(data){
        this.status = "rejected";
        this.msg = data;
    }   
    then(resolveFn,rejectFn){
        if(!resolveFn){
            rejectFn(this.msg);
            return this;
        }
    
        if(this.status=="fulfilled"){
            resolveFn(this.msg);
        }else if(this.status=="rejected"){
            rejectFn(this.msg);
        }
        return this;
    }
    catch(rejectFn){
        this.then(undefined,rejectFn);
    }
}
// let p = new IPromise((resolve,reject)=>{resolve("this is data")})
//         .then((msg)=>{console.log("resolve",msg)},(msg)=>{console.log("reject",msg)})

// 手写ajax封装promise
let ajaxPromise = (url,data)=>{
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open("GET",url);
        xhr.send(data);
        xhr.onreadystatechange = ()=>{
            if(xhr.status==200&&xhr.readyState==4){
                resolve(JSON.parse(xhr.responseText)); 
            }else{
                reject();
            }
        }
    })
}

// 手写thunk
let thunk = (fn)=>{
    return (args)=>{
        return (callback)=>{
            return fn.call(this,args,callback);
        }
    }
}
let run = (fn)=>{
    let gen = fn();
    let next = (data,err)=>{
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
    let f1 = yield thunk(exe)("abc");
    console.log(f1);
}
// run(gen);

// 手写Iterator
let addIterator = (obj)=>{
    obj[Symbol.iterator] =()=>{
        let keys = Object.keys(obj),
            values = Object.values(obj),
            counts = 0,
            len = keys.length;
        return {
            next:()=>{
                if(counts<len){
                    return {
                        value:{k:keys[counts],v:values[counts++]},
                        done:false
                    }
                }else{
                    return {
                        value:null,
                        done:true
                    }
                }
                
            }
        }
    }
}
// let obj = {a:1,b:2};
// addIterator(obj);
// for(let {k,v} of obj){
//     console.log(k,v);
// }

// 防抖
let debounce = (fn,time)=>{
    let timerId = null;
    let control = (...args)=>{
        if(!timerId){
            clearTimeout(timerId);
        }
        timerId = setTimeout(()=>{
            fn.call(this,...args);
            timerId = null;
        },time)
    }
    return control;
}

// 节流
let throttle = (fn,time)=>{
    let start = 0;
    let control = (...args)=>{
        let now = Date.now();
        if(now-start>time){
            fn.call(this,...args);
            start = now;
        }
    }
    return control;
}

// 图片懒加载
let lazyLoad = (imgs)=>{
    let judgeShow = (ele)=>{
        let bound = ele.getBoundingClientRect().top;
        return bound<window.innerHeight;
    }
    Array.from(imgs).forEach(img=>{
        if(judgeShow(img)){
            if(!img.src){
                img.src = img.dataset.src;
            }
        }
    })
}

// 私有变量
let PrivateVar = (()=>{
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
// let p = new PrivateVar(123);
// console.log(p.getVal());

// 深克隆
let deepClone = (obj,map)=>{
    if(obj===null) return null;
    if(typeof obj!=="object") return obj;
    if(obj instanceof RegExp) return new RegExp(obj);
    if(obj instanceof Date) return new Date(obj);
    if(map.has(obj)){
        return map.get(obj);
    }
    let newObj = new obj.constructor;
    map.set(obj,newObj);
    Object.keys(obj).forEach(k=>{
        newObj[k] = deepClone(obj[k],map);
        
    })
    return newObj;
}
// let obj={a:[1],b:[2,3]};
// obj.b.push(obj.a);
// obj.a.push(obj.b);
// let map = new Map();
// console.log(deepClone(obj,map));

// 对象合并
let mergeObjs = (...objs)=>{
    let rst = {};
    objs.forEach(obj=>{
        Object.keys(obj).forEach(k=>{
            if(!rst.hasOwnProperty(k)){
                rst[k] = [obj[k]];
            }else{
                rst[k].push(obj[k]);
            }
        })
    })
    return rst;
}
let o1 = {a:1,b:2};
let o2 = {a:2,c:3};
// console.log(mergeObjs(o1,o2));

// 原型继承
function superType(){}
function subType(args){
    superType.call(this,args);
}
function inherit(subType,superType){
    subType.prototype = Object.create(superType.prototype);
    subType.prototype.constructor = subType;
}
// inherit(subType,superType);
// let s = new subType();
// console.log(s);

// 数组去重
let unique = (arr)=>{
    let rst = [];
    arr.forEach(ele=>{
        if(rst.indexOf(ele)===-1){
            rst.push(ele);
        }
    })
    return rst;
}
// console.log(unique([1,2,2,2,3]));

// 数组扁平化
let flatten =(arr)=>{
    let rst = [];
    arr.forEach(ele=>{
        if(Array.isArray(ele)){
            rst = rst.concat(flatten(ele));
        }else{
            rst.push(ele);
        }
    });
    return rst;
}
// console.log(flatten([[1,2],[3,4,5]]));

// 手写instanceof
let IInstanceOf = (obj,Fn) => {
    let proto = obj.__proto__;
    let prototype = Fn.prototype;
    while(proto){
        if(proto==prototype){
            return true;
        }
        proto = proto.__proto__;
    }
    return false;
}
// function Person(name){
//     this.name = name;
// }
// let p = new Person("abc");
// console.log(IInstanceOf(p,Person));

// 手写new
let newInstance = (construct,...args)=>{
    let obj = {};
    let rst = construct.apply(obj,args);
    Object.setPrototypeOf(obj,construct.prototype);
    return rst instanceof Object?rst:obj;
}
// function Person(name){
//     this.name = name;
// }
// let p = newInstance(Person,"abc");
// console.log(p.name);

// 单例模式
class Singleton{
    constructor(val){
        if(!Singleton.instance){
            Singleton.instance = this;
            this.val = val;
        }
        return Singleton.instance;
    }
    static getInstance(){
        return Singleton.instance;
    }
    getVal(){
        return this.val;
    }
}
// let s = new Singleton("123");
// let s2 = new Singleton("456");
// let s3 = Singleton.getInstance();
// console.log(s.getVal(),s2.val,s3.getVal());

// reduce模拟map
Array.prototype.selfMap = function(fn,callbackThis){
    let rst = [];
    this.reduce((total,curVal,curIdx,arr)=>{
        rst.push(fn.call(callbackThis,curVal,curIdx,arr));
    },null);
    return rst;
}
// console.log([1,2,3].selfMap(n=>n*n));

// repeat  
let repeat = (fn,times,wait)=>{
    return (args)=>{
        let counts = 0;
        let timer = setInterval(()=>{
            if(counts<times){
                fn.call(this,args);
                counts++;
            }else{
                clearInterval(timer);
            }
        },wait);
    }
}
// repeat(console.log,2,300)("abc");

// promise cancel
let promiseCancel = (promise,obj)=>{
    Promise.race([promise,new Promise((_,reject)=>{
        obj.cancel = ()=>{
            reject(new Error("Cancel"));
        }
    })]).catch(e=>console.log(e));
}
// let obj = {};
// let p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(123);
//     },300)
// })
// promiseCancel(p,obj);
// obj.cancel();

// 判断空对象
let judgeNullObj = (obj)=>{
    return JSON.stringify(obj)=="{}";
    // return Object.keys(obj).length==0;
    // return Object.getOwnPropertyNames(obj).length==0;
    // for(let i in obj){
    //     return false;
    // }
    // return true;
}
// console.log(judgeNullObj({}));