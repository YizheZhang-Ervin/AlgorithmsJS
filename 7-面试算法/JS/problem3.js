// 方法1:
var a1 = {
    i:0,
    toString(){
        return ++this.i;
    }
};

if(a1==1&&a1==2&&a1==3){
    console.log("success")
}

// 方法2:
var i=0;
Object.defineProperty(globalThis,"a2",{
    get(){
        return ++i;
    }
});
if(a2==1&&a2==2&&a2==3){
    console.log("success")
}

// 方法3:
var a3 = [1,2,3];
a3.toString = a3.shift;
if(a3==1&&a3==2&&a3==3){
    console.log("success")
}

