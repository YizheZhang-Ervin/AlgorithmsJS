function A(val){
    this.a = val;
}

function B(val){
    this.b = val;
}

B.prototype = A;
let bb = new B(3,4);
console.log(bb.a,bb.b); // undefined 3