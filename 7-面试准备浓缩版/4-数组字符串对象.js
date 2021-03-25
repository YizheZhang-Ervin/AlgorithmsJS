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

// 原型继承
// 父类
function superType(){}
superType.prototype.dosth1=()=>{console.log("dosth1")}
// 子类
function subType(args){
    superType.call(this,args);  // 组合继承(构造函数继承)
}
// 继承
function inherit(subtype,supertype){
    // 克隆对象
    function cloneObject(obj){  
        function F(){}
        F.prototype = obj;
        return new F();
    }
    subtype.prototype = cloneObject(supertype.prototype);  // 原型式继承，创建、指定对象
    subtype.prototype.constructor = subtype;  // 组合继承(原型链继承)，增强对象
}
inherit(subType,superType);
subType.prototype.dosth2=()=>{console.log("dosth2")} // 要在继承后加方法

let sub = new subType();
let sub2 = new subType();
sub.dosth1();
sub.dosth2();
sub2.dosth1();
sub2.dosth2();