// 输入[1,2]和[3,4], 输出2.5(即(2+3)/2=2.5)
// 输入[1,3]和[2],输出2.0
// 暴力法:O(m+n)
// 切分法:时间复杂度:O(log(m+n))
// 切分法思路:在两个有序数组中寻找第K小的数,奇数时中位数下标:k=L/2+1,偶数时中位数下标:k=L/2及k+1=(L/2+1)/2
// 拓展:寻找两个无序数组的中位数:两个数组看成一个数组后快排(时间O(n)，空间O(1))
// 拓展2:十亿个服务器存大量数据，找这些服务器数据中的中位数:一台服务器主导选基准值，其他服务器各自快排，信息发回主机统计(时间O(nlogn))

let compute = function(arr1,arr2){
    let l1 = arr1.length,
    l2 = arr2.length;
    let k = Math.floor((l1+l2)/2);
    // 总个数为奇数，返回中间的数
    if((l1+l2)%2==1){
        return findKth(arr1,0,l1-1,arr2,0,l2-1,k+1);
    // 总个数为偶数，返回中间两数的均值
    }else{
        let rst = (findKth(arr1,0,l1-1,arr2,0,l2-1,k)+findKth(arr1,0,l1-1,arr2,0,l2-1,k+1))/2;
        return rst;
    }
}

let findKth = function(arr1,l1,h1,arr2,l2,h2,k){
    let m = h1-l1+1;
    let n = h2-l2+1;
    // 数组1比数组2长，则互换加速
    if(m>n){
        return findKth(arr2,l2,h2,arr1,l1,h1,k);
    }
    // 数组1没有值则直接返回数组2的第k个值
    if(m==0){
        return arr2[l2+k-1];
    }
    // 各只有一个时，返回两数组中的最小值即为中位数
    if(k==1){
        return Math.min(arr1[l1],arr2[l2]);
    }
    // 分别选两个数组的中间数
    let na = Math.min(Math.floor(k/2),m),
    nb = k-na,
    va = arr1[l1+na-1],
    vb = arr2[l2+nb-1];
    // 数组1中间=数组2中间，则中间数即为第k小的数
    if(va==vb){
        return va;
    // 数组1中间<数组2中间，第k小的数在数组1后半段或数组2前半段
    }else if(va<vb){
        return findKth(arr1,l1+na,h1,arr2,l2,l2+nb-1,k-na);
    // 数组1中间>数组2中间，第k小的数在数组1前半段或数组2后半段
    }else{
        return findKth(arr1,l1,l1+na-1,arr2,l2+nb,h2,k-nb);
    }

}

console.log(compute([1,2],[3,4,5]))
console.log(compute([1,2],[3,4]))
console.log(compute([1],[2]))