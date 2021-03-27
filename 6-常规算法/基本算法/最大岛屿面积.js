
// 最大岛屿面积

function AreaMost() {
    this.area = 1,       // 初始化，记录某个页面
        this.position = []   // 存储当前岛屿点所在的坐标位置，是个二维数组。每个数组两个值，[x,y]
}
var gg = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
[0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
[0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]];

var maxAreaOfIsland = function (grid) {
    var rel = [];
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                var aa = new AreaMost();
                aa.position.push([i, j]);
                grid[i][j] = 0;
                // 扩展当前区域
                aa = expanding(i, j, aa, grid, true, true, true, true);
                rel.push(aa);
            }
        }
    }
    var maxArea = 0;
    for (var ind in rel) {
        if (rel[ind].area > maxArea) {
            maxArea = Number(rel[ind].area);
        }
    }
    return maxArea;
};
function expanding(x, y, target, grid, up, down, left, right) { // 先将area 递归寻找扩展
    if (up) {                                 // 直接传 x,y。值传递是 复制，不会被修改       
        if (isValid(x - 1, y, grid) && grid[x - 1][y] == 1) {   // 上  
            target.position.push([x - 1, y]);
            target.area++;
            grid[x - 1][y] = 0;
            expanding(x - 1, y, target, grid, true, false, true, true);
        }
    }
    if (down) {
        if (isValid(x + 1, y, grid) && grid[x + 1][y] == 1) {   // 下
            target.position.push([x + 1, y]);
            target.area++;
            grid[x + 1][y] = 0;
            expanding(x + 1, y, target, grid, false, true, true, true);
        }
    }
    if (left) {
        if (isValid(x, y - 1, grid) && grid[x][y - 1] == 1) {   // 左
            target.position.push([x, y - 1]);
            target.area++;
            grid[x][y - 1] = 0;
            expanding(x, y - 1, target, grid, true, true, true, false);
        }
    }
    if (right) {
        if (isValid(x, y + 1, grid) && grid[x][y + 1] == 1) {   //  右 
            target.position.push([x - 1, y]);
            target.area++;
            grid[x][y + 1] = 0;
            expanding(x, y + 1, target, grid, true, true, false, true);
        }
    }
    return target;
}
function isValid(x, y, grid) {
    if (0 <= x && x < grid.length && 0 <= y && y < grid[0].length) {
        return true;
    }
    return false;
}
console.log(maxAreaOfIsland(gg));