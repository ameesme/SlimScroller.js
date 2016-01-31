var slimScroller = function (){
    'use strict';

    var targetPosition,horizontal,clock,elapsed,duration,startPosition,total,callback,elementPosition;
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame;

    var scroll = function (target, horizontal, durationTime, callbackFunction) {
        duration = durationTime || 500;
        horizontal = horizontal || false;
        callback = callbackFunction || false;
        startPosition = (horizontal) ? window.pageXOffset : window.pageYOffset;
        total = (horizontal) ? window.innerWidth : window.innerHeight;
        elementPosition =(horizontal) ? document.querySelector(target).offsetLeft : document.querySelector(target).offsetTop;
        targetPosition = (elementPosition > total) ? total : elementPosition;

        clock = Date.now();
        step();
    };
    var easeInOutCubic = function (time) {
        return (time < 0.5) ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
    };
    var calculatePosition = function () {
        return (elapsed > duration) ? targetPosition : startPosition + (targetPosition - startPosition) * easeInOutCubic(elapsed / duration);
    };
    var step = function () {
        elapsed = Date.now() - clock;
        var stepPosition = calculatePosition();

        if (horizontal){
            window.scroll(stepPosition, 0);
        }else{
            window.scroll(0, stepPosition);
        }
        if (elapsed > duration) {
            if (callback) {
                callback([window.scrollX,window.scrollY]);
            }
        } else {
            requestAnimationFrame(step);
        }
    };
    return {
        scroll: scroll
    };
}();