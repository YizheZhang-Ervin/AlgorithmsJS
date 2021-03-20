// 宏任务: script，setTimeout，setInterval ，setImmediate，I/O，UI renderingnew ，Promise*
// 微任务: Promises.(then catch finally)，process.nextTick， MutationObserver
// 先完成同步，再队列取出异步
// 微任务->宏任务

// 1---同步
console.log(1);
// 同步、宏
setTimeout(() => {
    // 5---同步
    console.log(2);
    // 6---异步、微
    Promise.resolve().then(() => {
        console.log(3);
    });
});
// 2---同步、宏
new Promise((resolve, reject) => {
    console.log(4);
    resolve();
// 4---异步、微
}).then(() => {
    console.log(5);
})
// 7---同步、宏
setTimeout(() => {
    // 同步
    console.log(6);
})
// 3---同步
console.log(7);

// 1->4->7->5->2->3->6