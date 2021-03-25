// js怎么控制一次加载一张图片，加载完后再加载下一张

// 方法1

var obj = new Image();
obj.src = "http://xxx.jpg";
obj.onload = function () {
    console.log('图片的宽度为：' + obj.width + '；图片的高度为：' + obj.height);
    document.getElementById("mypic").innnerHTML = "<img src='" + this.src + "' />";
}

// 方法2

var obj = new Image();
obj.src = "http://xxx.jpg";
obj.onreadystatechange = function () {
    if (this.readyState == "complete") {
        console.log('图片的宽度为：' + obj.width + '；图片的高度为：' + obj.height);
        document.getElementById("mypic").innnerHTML = "<img src='" + this.src + "' />";
    }
}

// test
// <div id="mypic">onloading……</div>