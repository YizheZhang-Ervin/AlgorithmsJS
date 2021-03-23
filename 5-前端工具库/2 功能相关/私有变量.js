var Pclass = (function(){
    const a = Symbol('a');
    const m = Symbol('m');
    class  Pclass {
        constructor(){
            this[a] = 'a这是私有变量';
            this.b = '变量B-外部可访问';
            this[m] = function(){
                console.log('私有方法');
            }
        }
        getA(){
            console.log(this[a]);
        }
        getM(){
            console.log(this[m]);
        }
    }
    return Pclass
}())
 
let pc = new Pclass() 
console.log(pc)  