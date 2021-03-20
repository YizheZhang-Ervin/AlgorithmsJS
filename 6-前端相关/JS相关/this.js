// this由a调用，指向a对象
var a = {
    b: 'b',
    c: function () {
        console.log(this.b);
    }
}
a.c();

// 箭头函数，this指向父级对象(即全局)
var a = {
    b: 'b',
    c: () => {
        console.log(this.b);
    }
}
a.c();

// this由全局调用，指向全局对象
var a = {
    b: 'b',
    c: function () {
        console.log(this.b);
    }
}
let d = a.c;
d();