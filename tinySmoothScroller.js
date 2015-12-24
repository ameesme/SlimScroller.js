var tinySmoothScroller = function (target, horizontal, time, callback) {
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

    var parseNumber = parseInt(target);
    var parseElement = target.offsetLeft;
    var parseSelector;
    try{
        parseSelector = document.querySelector(target);
    }catch(e){}

    var targetPosition;
    if (parseNumber) {
        // Target is pixel value
        targetPosition = (parseInt(target) > total) ? total : parseInt(target);
    }else if(parseSelector){
        // Target is CSS-selector
        targetPosition = (horizontal) ? document.querySelector(target).offsetLeft : document.querySelector(target).offsetTop;
    }else if(parseElement !== undefined){
        // Target is HTML-element
        targetPosition = (horizontal) ? parseElement : target.offsetTop;
    }else{
        // Unknown type
        console.error('Unknown type as target');
    }

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
};
