var slimScroller = {
    scroll: function (target, horizontal, time, callback) {
        'use strict';

        var easeInOutCubic = function (time) {
            return (time < 0.5) ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
        };
        var position = function (start, end, elapsed, duration) {
            return (elapsed > duration) ? end : start + (end - start) * easeInOutCubic(elapsed / duration);
        };

        var duration = time || 300;
        var start = (horizontal) ? window.pageXOffset : window.pageYOffset;
        var total = (horizontal) ? document.body.offsetWidth - window.innerWidth : document.body.offsetHeight - window.innerHeight;

        var targetPosition = (horizontal) ? document.querySelector(target).offsetLeft : document.querySelector(target).offsetTop;

        var clock = Date.now();
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame;

        var step = function () {
            var elapsed = Date.now() - clock;
            var finalPosition = position(start, targetPosition, elapsed, duration);
            if(horizontal){window.scroll(finalPosition, 0);}else{window.scroll(0, finalPosition);}
            
            if (elapsed > duration) {
                if (callback) {
                    callback(window.scrollY);
                }
            } else {
                requestAnimationFrame(step);
            }
        };
        step();
    }
};