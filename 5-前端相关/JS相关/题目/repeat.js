// 实现 repeat 方法
// const repeatFunc = repeat(window.alert, 4, 3000)
// repeatFunc('test'); // 会 alert 4 次 test，每次间隔 3 秒

// 需要实现的函数 
function repeat (func, times, wait) {
    return (arg)=>{
        let counts = 0;
        let timer;
        timer = setInterval(() => {
            if(counts<times){
                func.call(this,arg);
                counts++;
            }else{
                clearInterval(timer);
            }
        }, wait);
    }
} 
// test
const repeatFunc = repeat(console.log, 4, 3000); 
repeatFunc("hellworld");//会输出4次 helloworld, 每次间隔3秒