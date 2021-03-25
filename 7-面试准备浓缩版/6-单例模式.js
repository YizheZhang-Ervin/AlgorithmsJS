class Singleton{
    constructor(){
        this.instance = null;
    }

    doSth(){
        console.log("doSth !");
        return this;
    }

    static getInstance(){
        if(!this.instance){
            this.instance = new Singleton();
        }
        return this.instance;
    }
}

// test
let s = Singleton.getInstance();
s.doSth().doSth();