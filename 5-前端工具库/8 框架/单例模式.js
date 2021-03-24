// 方法1：
const FooServiceSingleton = (function () {
  // 隐藏的Class的构造函数
  function FooService() { }

  // 未初始化的单例对象
  let fooService;

  return {
    // 创建/获取单例对象的函数
    getInstance: function () {
      if (!fooService) {
        fooService = new FooService();
      }
      return fooService;
    }
  }
})();

// test
console.log(FooServiceSingleton.getInstance());

// 方法2:
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