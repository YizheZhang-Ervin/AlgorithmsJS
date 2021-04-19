function Person(name) {
    this.name = name;
}

Person.prototype.print = function () {
    return this.name;
};

Person('abc');
console.log(name); //① 'abc'

const a = new Person('abc').print.call({});
console.log(a); //② undefined

const fn = () => {
    this.x = 'z';
};

const b = { x: 'y' };
fn.call(b);
console.log(b); //③ { x: 'y' }