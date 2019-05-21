/**
 * Created by chang on 2016/7/14.
 */
function getStyle(dom, attr) {
    if (dom.currentStyle) {
        return parseInt(dom.currentStyle[attr]);
    } else {
        return parseInt(getComputedStyle(dom)[attr]);
    }
}

/**
 * 移动
 * @param dom 元素
 * @param obj 对象{属性:值}
 * @param interval_time 间隔时间
 * @param speedArgs 速度参数 值越大速度越小
 * @param backFn 回调函数
 */
function move(dom, obj, interval_time, speedArgs, backFn) {
    clearInterval(dom.timer);
    /*dom.style.background = 'rgb(' + parseInt(Math.random() * 256) + ','
     + parseInt(Math.random() * 256) + ',' + parseInt(Math.random() * 256) + ')';*/
    dom.timer = setInterval(function () {
        var isStop = true;
        //获取到css的值
        for (var key in obj) {
            var args = parseInt(getStyle(dom, key));
            var speed = (obj[key] - args) / speedArgs;
            if (speed > 0) {
                speed = Math.ceil(speed);
            } else
                speed = Math.floor(speed);
            if (args != obj[key]) {
                isStop = false;
            }
            dom.style[key] = args + speed + 'px';
        }
        if (isStop) {
            clearInterval(dom.timer);
            if (backFn) {
                backFn();
            }
        }
    }, interval_time);
}