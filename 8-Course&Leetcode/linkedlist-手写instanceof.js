// 手写instanceof
// 遍历A原型链，如果找到B.prototype，返回true

var writeInstance = function(A,B){
    let p = A;
    while(p){
        if(p == B.prototype){
            return true;
        }
        p = p.__proto__;
    }
    return false;
}