// 射击
// n为射击次数
// arr为每次射击可得分数
// 多次射击可击中0或1次或2次，多次击中分数为 ai | aj

let n =3;
let arr = [1,2,3];
let result = 0;
for(let i=0;i<arr.length;i++){
    result+=arr[i]
    for(let j=i+1;j<arr.length;j++){
        result += arr[i]|arr[j];
    }
}
console.log(result);
