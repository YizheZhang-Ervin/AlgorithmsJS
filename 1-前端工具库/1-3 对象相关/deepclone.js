// 无法克隆方法
// 循环引用无法解决
function deepclone1(target){
    // 创JSON格式字符串
    let str = JSON.stringify(target);
    let data = JSON.parse(str);
    return data;
}

// 解决了方法的克隆
function deepclone2(target){
    if(typeof target=="object" && target!==null){
        const result = Array.isArray(target)?[]:{};
        for(let key in target){
            if(target.hasOwnProperty(key)){
                result[key] = deepclone2(target[key]);
            }
        }
        return result;
    }else{
        return target;
    }
}

// 解决循环引用
function deepclone3(target,map=new Map()){
    if(typeof target=="object" && target!==null){
        // 每次克隆前判断是否已克隆过
        let cache = map.get(target);
        if(cache){
            return caches;
        }
        const result = Array.isArray(target)?[]:{};
        // 把已经克隆过的放入map，下次遇到就不需要再克隆了
        map.set(target,result);
        for(let key in target){
            if(target.hasOwnProperty(key)){
                result[key] = deepclone3(target[key],map);
            }
        }
        return result;
    }else{
        return target;
    }
}

// 遍历性能优化
function deepclone4(target){
    if(typeof target=="object" && target!==null){
        // 每次克隆前判断是否已克隆过
        let cache = map.get(target);
        if(cache){
            return caches;
        }
        let isArray = Array.isArray(target)
        const result = isArray?[]:{};
        // 把已经克隆过的放入map，下次遇到就不需要再克隆了
        map.set(target,result);
        // 优化: 数组foreach
        if(isArray){
            target.forEach((item,index)=>{
                result[index] = deepclone4(item,map);
            })
        // 优化: 对象获取键名再foreach
        }else{
            Object.keys(target).forEach(key=>{
                result[key] = deepclone4(target[key],map);
            })
        }
        return result;
    }else{
        return target;
    }
}

// test
const obj = {x:"abc",y:{m:1},z:[1,2,3]};
const result1 = deepclone1(obj);
const result2 = deepclone2(obj);
const result3 = deepclone3(obj);
const result4 = deepclone4(obj);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);