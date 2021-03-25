// 1. 全局变量
function foo() {
    bar1 = '1'; // 等价于: window.bar1 = '1'
    this.bar2 = '2'; // 等价于: window.bar2 = '2'
}

foo();

// 2. 循环引用
function func() {  
    let obj1 = {};  
    let obj2 = {};  
  
    obj1.a = obj2; // obj1 引用 obj2  
    obj2.a = obj1; // obj2 引用 obj1  
}

func(); // undefined

// 3. 被遗忘的计时器和回调函数
let someResource = getData();  
setInterval(() => {  
    const node = document.getElementById('Node');  
    if(node) {  
        node.innerHTML = JSON.stringify(someResource);  
    }  
}, 1000);

// 4. 没有清理的DOM元素的引用
var refA = document.getElementById('refA');
document.body.removeChild(refA);
// #refA不能回收，因为存在变量refA对它的引用。将其对#refA引用释放，但还是无法回收#refA。
//  解决方法：refA = null;

// 5. 给DOM对象增加的属性是一个对象的引用
var MyObject = {}; 
document.getElementById('myDiv').myProp = MyObject;
// 解决方法：在window.onunload事件中写上: document.getElementById('myDiv').myProp = null;

// 6. DOM对象和JS对象相互引用
function Encapsulator(element) { 
this.elementReference = element; 
element.myProp = this; 
} 
new Encapsulator(document.getElementById('myDiv'));
// 解决方法： 在window.onunload事件中写上: document.getElementById('myDiv').myProp = null;

// 7. 给DOM对象增加「attachEvent」或者「addEventListener」绑定事件
function doClick() {} 
element.attachEvent("onclick", doClick);
element.addEventListener("click", doClick);

// 8. 从外到内执行「appendChild」，这是即使调用「removeChild」也无法释放
var parentDiv = document.createElement("div"); 
var childDiv = document.createElement("div"); 
document.body.appendChild(parentDiv); 
parentDiv.appendChild(childDiv);
// 解决方法：从内到外「appendChild」
var parentDiv = document.createElement("div"); 
var childDiv = document.createElement("div"); 
parentDiv.appendChild(childDiv); 
document.body.appendChild(parentDiv);

// 9. 闭包
function outer() {
    const name = 'Jason';
    return function inner(){
        console.log(name);
    }
}
let p = outer();
p();