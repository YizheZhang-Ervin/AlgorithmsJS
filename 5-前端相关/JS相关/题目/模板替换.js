// 以下函数的作用是?空白区域应该填什么

// define 
(function (window) { 
function fn(str) { 
this.str = str; 
}
fn.prototype.format = function () { 
var arg = __1__; 
return this.str.replace(__2__, function (a, b) { 
return arg[b] || ''; 
}); 
};
window.fn = fn; 
})(window); 

// use 
(function () { 
var t = new fn('<p><a href="{0}">{1}</a><span>{2}</span></p>'); 
console.log(t.format('http://www.alibaba.com', 'Alibaba', 'Welcome')); 
})(); 

// define部分定义一个简单的模板类，使用{}作为转义标记，中间的数字表示替换目标，format实参用来替换 
// 模板内标记 
// 横线处填： 
// 1. Array.prototype.slice.call(arguments, 0) 
// 2. /{s*(d+)s*}/g 