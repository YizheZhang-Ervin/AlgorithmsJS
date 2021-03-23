function lock() {
    this.locked = null;
}

lock.prototype.lock = async function () {
    if (this.locked === null)
        this.locked = [];
    else
        await new Promise(res => this.locked.push(res));
}

lock.prototype.unlock = function () {
    if (this.locked.length)
        this.locked.shift()();
    else
        this.locked = null;
};

// 死锁
(async () => {
    const a = new lock();
    process.on('beforeExit', () => {
        if (a.locked !== null)
            throw 'still locked';
    });
    await a.lock();
    await a.lock();
    throw 'unreachable';
})().catch(err => {
    console.log(err); process.exit(1);
});