# 堆栈内存  
堆：存储引用类型值的空间  
栈：存储基本类型值和指定代码的环境  
  
# 对象  
对象的key数字和字符串等效  
Symbol作为键，都是唯一的  
key如果是对象，会转化成字符串[Obejct object]  
alert弹出的会转化成字符串  

# toString转换  
对象==字符串 对象.toString  
null==undefined 相等 但是和其他值不相等  
NaN！=NaN  
剩下的都转换成数字  
  
# new  
new()带参数列表(优先级19)比new不带参数列表(优先级18)先执行  
成员函数和new优先级都为19  
new X.getXX() 先X.getXX()再new  
new X().getXX() 先new再getXX()  
  
# vue数据绑定
- ES5: Object.defineProperty(obj,"xx",{get(){},set(val){}})  
    - 对原始数据克隆，分别给对象中每一个属性设置监听  
- ES6: new Proxy(obj,{get(){},set(val){}})  
  
# MVVM/MVC  
双向绑定: 视图改->数据改，数据改->视图改  
  
# react双向绑定
<input value={this.state.name} onChange={ev=>{this.setState({name:ev.target.value})}} />  

# 跨域  
- Jsonp: 只能get，不安全、有缓存、大小限制  
    - <script src="http://xx.com/?callback=func"></script>  
- iframe  
    - window.name  
    - document.domin  
    - location.hash  
    - post message  
- CORS服务端配置
    - res.header中Access-Control-Allow-Origin/Credentials/Headers/Methods  
    - req.method==="OPTION"?res.send("support cors"):next()  
- http Proxy  
    - webpack添加proxy(package.json中加proxy代理到的地址)  
- nginx反向代理  
    - 在build之后proxy不可以用，要服务器端nginx反向代理  
  
# 组件通信  
vue: 属性传递/发布订阅(EventBus)$on、$emit/provide、inject/slot/$parent、$children/vuex(一刷新就没，本地存储，类似redux，但localstorage刷新后还在)  
React: 属性/发布订阅/React.createContext/redux/react-redux/mobix/dva  
  
# session  
服务端设置session，服务器返回给客户端的信息，在响应头带set-cookie="connect.sid",客户端会把信息放到cookie中httponly，再次向服务器请求时请求头cookie中会带connect.sid  
  