var newLeft = parseInt(list.style.left) + offset;//当前的偏移量+下一次的偏移量=新的偏移量
list.style.left = newLeft + "px";//当前的偏移值=新的偏移值
//以偏移的距离来判断是否跳回第一张和最后一张
if (newLeft > -600) {
    list.style.left = -3000 + "px";
}
if (newLeft < -3000) {
    list.style.left = -600 + "px";
}