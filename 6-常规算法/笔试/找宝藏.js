// X星人发现了一个藏宝图，在藏宝图中标注了N个宝库的位置。这N个宝库连成了一条直线，每个宝库都有若干枚金币。
// X星人决定乘坐热气球去收集金币，热气球每次最多只能飞行M千米（假设热气球在飞行过程中并不会发生故障）
// 此外，由于设计上的缺陷，热气球最多只能启动K次。
// X星人带着热气球来到了第1个宝库（达到第1个宝库时热气球尚未启动），收集完第1个宝库的金币后将启动热气球前往下一个宝库。
// 如果他决定收集某一个宝库的金币，必须停下热气球，收集完之后再重新启动热气球。当然，X星人每到一个宝库是一定会拿走这个宝库所有金币的。
// 已知每一个宝库距离第1个宝库的距离（单位：千米）和宝库的金币数量。
// 请问X星人最多可以收集到多少枚金币？

// 输入描述
// 单组输入。
// 第1行输入三个正整数N、M和K，分别表示宝库的数量、热气球每次最多能够飞行的距离（千米）和热气球最多可以启动的次数，
// 三个正整数均不超过100，相邻两个正整数之间用空格隔开。
// 接下来N行每行包含两个整数，分别表示第1个宝库到某一个宝库的距离（千米）和这个宝库的金币枚数。
// （因为初始位置为第1个宝库，因此第1个宝库所对应行的第1个值为0。）
// 输入保证所有的宝库按照到第1个宝库的距离从近到远排列，初始位置为第1个宝库。

// 输出描述
// 输出一个正整数，表示最多可以收集的金币数。

// 样例输入
// 5 10 2
// 0 5
// 8 6
// 10 8
// 18 12
// 22 15
// 样例输出
// 25

// 提示
// X星人启动热气球两次，分别收集第1个、第3个和第4个宝库的金币，一共可以得到的金币总数为5+8+12=25枚。

let [N,M,K] = "5 10 2".split(" ").map(Number);
let strArr = ["0 5","8 6","10 8","18 12","22 15"];
let map = {};
let result = 0;
let lastDistance = 0;
for(let i=0;i<N;i++){
    let arr = strArr[i].split(" ").map(Number);
    map[arr[0]]=arr[1];
}
result +=map[0];
for(let i=0;i<K;i++){
    let tempMax = 0;
    if(map[M+lastDistance]){
        tempMax = map[M];
        lastDistance = M;
    }else{
        let tempLastDistance = lastDistance;
        for(let j=0;j<M;j++){
            if(map[M+tempLastDistance-j]){
                let maxs = map[M+tempLastDistance-j];
                if(tempMax<maxs){
                    tempMax = maxs;
                    lastDistance = M+tempLastDistance-j;
                }
            }
        }
    }
    result += tempMax;
}
console.log(result);