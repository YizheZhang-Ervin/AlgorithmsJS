// 宏任务: script，setTimeout，setInterval ，setImmediate，I/O，UI renderingnew ，Promise*
// 微任务: Promises.(then catch finally)，process.nextTick， MutationObserver
// 先完成同步，再队列取出异步
// 微任务->宏任务

let task1 = ()=>{
    // 1---同步
    console.log(1);
    // 宏
    setTimeout(() => {
        // 5---同步
        console.log(2);
        // 6---异步、微
        Promise.resolve().then(() => {
            console.log(3);
        });
    });
    // 2---宏
    new Promise((resolve, reject) => {
        console.log(4);
        resolve();
    // 4---异步、微
    }).then(() => {
        console.log(5);
    })
    // 7---宏
    setTimeout(() => {
        // 同步
        console.log(6);
    })
    // 3---同步
    console.log(7);
}

// 1->4->7->5->2->3->6
// task1();

let task2 = ()=>{
    let a = ()=>{
        // 同步
        console.log("a");
        // 异步、微
        Promise.resolve().then(()=>{
            console.log("e");
        })
    }
    let b = ()=>{
        // 同步
        console.log("b");
    }
    let c = ()=>{
        // 同步
        console.log("c");
    }
    let d = ()=>{
        // 宏
        setTimeout(a,0);
        // 异步、微
        var temp = Promise.resolve().then(b);
        // 宏
        setTimeout(c,0);
        // 同步
        console.log("d");
    }
    d();
}

// d->b->a->e->c
task2();