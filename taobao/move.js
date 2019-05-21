/**
 * Created by chang on 2016/7/14.
 */
function getStyle(dom, attr) {
    if (dom.currentStyle) {
        return dom.currentStyle[attr];
    } else {
        return getComputedStyle(dom)[attr];
    }
}

/**
 * 移动
 * @param dom 元素
 * @param attr 属性
 * @param value 值
 * @param interval_time 间隔时间
 */
function move(dom, attr, value,interval_time) {
    clearInterval(dom.timer);
    /*dom.style.background = 'rgb(' + parseInt(Math.random() * 256) + ','
     + parseInt(Math.random() * 256) + ',' + parseInt(Math.random() * 256) + ')';*/
    dom.timer = setInterval(function () {
        //获取到css的值
        var args = parseInt(getStyle(dom, attr));
        var speed = (value - args) / 8;
        if (speed > 0) {
            speed = Math.ceil(speed);
        } else
            speed = Math.floor(speed);
        if (args == 0)
            clearInterval(dom.timer);
        else
            dom.style[attr] = args + speed + 'px';
    }, interval_time);
}