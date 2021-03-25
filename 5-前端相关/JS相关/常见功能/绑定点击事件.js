// 使用原生javascript给下面列表中的li节点绑定点击事件,点击时创建一个Object对象,兼容IE和标准浏览器
{/* <ul id="nav"> 
<li><a href="http://11111">111</a></li> 
<li><a href="http://2222">222</a></li> 
<li><a href="http://333">333</a></li> 
<li><a href="http://444">444</a></li> 
</ul> 
Object: 
{
"index": 1, 
"name": "111", 
"link": "http://1111" 
} */}

var EventUtil = {
    getEvent: function (event) {
        return event || window.event;
    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    // 返回注册成功的监听器，IE中需要使用返回值来移除监听器 
    on: function (elem, type, handler) {
        if (elem.addEventListener) {
            elem.addEventListener(type, handler, false);
            return handler;
        } else if (elem.attachEvent) {
            function wrapper(event) {
                return handler.call(elem, event);
            };
            elem.attachEvent('on' + type, wrapper);
            return wrapper;
        }
    },
    off: function (elem, type, handler) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handler, false);
        } else if (elem.detachEvent) {
            elem.detachEvent('on' + type, handler);
        }
    },
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else if ('returnValue' in event) {
            event.returnValue = false;
        }
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else if ('cancelBubble' in event) {
            event.cancelBubble = true;
        }
    },
    /** 
    * keypress事件跨浏览器获取输入字符 
    * 某些浏览器在一些特殊键上也触发keypress，此时返回null 
    **/
    getChar: function (event) {
        if (event.which == null) {
            return String.fromCharCode(event.keyCode);// IE 
        }
        else if (event.which != 0 && event.charCode != 0) {
            return String.fromCharCode(event.which);// the rest 
        }
        else {
            return null;// special key 
        }
    }
};
var DOMUtil = {
    text: function (elem) {
        if ('textContent' in elem) {
            return elem.textContent;
        } else if ('innerText' in elem) {
            return elem.innerText;
        }
    },
    prop: function (elem, propName) {
        return elem.getAttribute(propName);
    }
};
var nav = document.getElementById('nav');
EventUtil.on(nav, 'click', function (event) {
    var event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    var children = this.children;
    var i, len;
    var anchor;
    var obj = {};
    for (i = 0, len = children.length; i < len; ++i) {
        if (children[i] === target) {
            obj.index = i + 1;
            anchor = target.getElementsByTagName('a')[0];
            obj.name = DOMUtil.text(anchor);
            obj.link = DOMUtil.prop(anchor, 'href');
        }
    }
    alert('index: ' + obj.index + ' name: ' + obj.name +
        ' link: ' + obj.link);
});
