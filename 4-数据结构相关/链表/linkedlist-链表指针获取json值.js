// 根据路径获取json中的值
const json = {a:{b:{c:1}}};
const path = ['a','b','c'];

// 用链表指针方问指定路径的值
const usell = (json)=>{
    let p = json;
    path.forEach(k=>{
        p=p[k];
    })
    return p;
}
console.log("指定路径的值为",sell(json));

// 用深度遍历方问所有json值
const dfs = (n,path) =>{
    console.log(n,path);
    Object.keys(n).forEach(k=>{
        dfs(n[k],path.concat(k));
    });
};
dfs(json,[]);