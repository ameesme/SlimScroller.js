var tinySmoothScroller = function(pixels, horizontal, time, callback){
	var easeInOutCubic = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
	var position = function(start, end, elapsed, duration) {
		if (elapsed > duration) return end;
		return start + (end - start) * easeInOutCubic(elapsed / duration);
	}
	var duration = time || 300;
	var context = window;
	var start = (horizontal) ? window.pageXOffset : window.pageYOffset;
	var end = parseInt(pixels);

	var clock = Date.now();
	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame;

	var step = function(){
		var elapsed = Date.now() - clock;
		var finalPosition = position(start, end, elapsed, duration);
		(horizontal) ? window.scroll(finalPosition, 0) : window.scroll(0, finalPosition);
		
		if (elapsed > duration) {
			if (callback) {
				callback(pixels);
			};
		} else {
			requestAnimationFrame(step);
		}
	}
	step();
}