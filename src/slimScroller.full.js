var slimScroller = function (){
    'use strict';

    var targetPosition,horizontal,clock,elapsed,duration,startPosition,total,callback;
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame;

    var scroll = function (target, horizontal, durationTime, callbackFunction) {
        duration = durationTime || 500;
        horizontal = horizontal || false;
        callback = callbackFunction || false;
        startPosition = (horizontal) ? window.pageXOffset : window.pageYOffset;
        total = (horizontal) ? document.body.scrollWidth : document.body.scrollHeight;
        targetPosition = (parsePosition(target) > total) ? total : parsePosition(target);

        clock = Date.now();
        step();
    };
    var easeInOutCubic = function (time) {
        return (time < 0.5) ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
    };
    var calculatePosition = function () {
        return (elapsed > duration) ? targetPosition : startPosition + (targetPosition - startPosition) * easeInOutCubic(elapsed / duration);
    };
    var parsePosition = function (target){
        var parseNumber = parseInt(target);
        var parseElement = target.offsetLeft;
        var parseSelector;
        try{
            parseSelector = document.querySelector(target);
        }catch(e){}

        if (parseNumber) {
            // Target is pixel value
            return parseNumber;
        }else if(parseSelector){
            // Target is CSS-selector
            return (horizontal) ? document.querySelector(target).offsetLeft : document.querySelector(target).offsetTop;
        }else if(parseElement !== undefined){
            // Target is HTML-element
            return (horizontal) ? parseElement : target.offsetTop;
        }else{
            // Unknown type
            throw new Error('Unknown type as target');
        }
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
    var bind = function (time, callbackFunction) {
        var allAnchors = document.querySelectorAll('a');
        var i;
        for (i = 0; i < allAnchors.length; i++) {
            if (allAnchors[i].href == window.location.href.split('#')[0] + '#' + allAnchors[i].href.split('#')[1]) {
                allAnchors[i].addEventListener('click', function (event) {
                    event.preventDefault();
                    slimScroller.scroll('#'+event.target.href.split('#')[1], null, time, callbackFunction);
                    window.location.href = event.target.href;
                    return;
                });
            }
        }
    };
    return {
        scroll: scroll,
        bind: bind
    };
}();
