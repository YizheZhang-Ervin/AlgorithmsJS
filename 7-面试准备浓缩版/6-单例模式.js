class Singleton{
    constructor(val){
        if(!Singleton.instance){
            Singleton.instance = this;
            this.val = val;
        }
        return Singleton.instance;
    }

    static getInstance(){
        return Singleton.instance;
    }

    getVal(){
        return this.val;
    }
}

// test
let s = new Singleton("123");
let s2 = new Singleton("456");
let s3 = Singleton.getInstance();
console.log(Singleton.instance,s,s2,s3);
console.log(s.getVal(),s2.val)