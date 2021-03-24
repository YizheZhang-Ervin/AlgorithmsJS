// 字符串richText,是富文本,要显示在页面上，
// 要给其中只包含一个img元素的p标签增加一个叫pic的class

function richText(text) {
    var div = document.createElement('div');
    div.innerHTML = text;
    var p = div.getElementsByTagName('p');
    var i, len;
    for (i = 0, len = p.length; i < len; ++i) {
        if (p[i].getElementsByTagName('img').length === 1) {
            p[i].classList.add('pic');
        }
    }
    return div.innerHTML;
}