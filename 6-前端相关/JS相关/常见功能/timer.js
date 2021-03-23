// 2种方法实现for里面放settimeout合理输出 

let timerFor = () => {
    for (var i = 0; i < 3; i++) {
        // 立即执行函数，形成闭包，可访问外部函数变量
        ((i) => {
            console.log(i);             // 同步，0,1,2  
            setTimeout(() => {
                console.log(i);         // 最后执行，0,1,2
            }, 1000);
        })(i);
    }
}

let timerFor2 = () => {
    // setTimeout传入第三个参数
    for (var i = 0; i < 3; i++) {
        console.log(i);                    // 0,1,2
        setTimeout((j)=> {
            console.log(j);                // 最后执行 0，1，2
        }, 1000, i);
    }
}

// test
timerFor2();