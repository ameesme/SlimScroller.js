# slimScroller.js
A slim smooth-scrolling script under 350 bytes (gzipped), with no other dependencies (No jQuery).

## Two versions
### [SlimScroller Base](https://github.com/ameesme/SlimScroller.js/blob/master/dist/slimScroller.min.js)
    325 bytes gzipped
    538 bytes uncompressed

The base version includes support for one type of scroll-target:
- CSS selector ( eg. `slimScroller.scroll("p:first-of-type")` )

### [SlimScroller Full](https://github.com/ameesme/SlimScroller.js/blob/master/dist/slimScroller.full.min.js)
    581  bytes gzipped
    1060 bytes uncompressed
The full version includes support for four types of scroll-targets:
- Position in pixels ( eg. `slimScroller.scroll(200)` )
- CSS selector ( eg. `slimScroller.scroll("p:first-of-type")` )
- Direct JavaScript HTML-element ( eg. `slimScroller.scroll(document.querySelector(p#hi))` )

### Hashtags
By executing `slimScroller.bind()` when the dom finishes loading, SlimScroller will also animate same-page hashtag-scrolling in anchor tags. 

## How to scroll
Just use the `slimScroller.scroll`-function with the following parameters.
- `Required` Scroll-target according to SlimScroller-version
- `Optional` Duration in `ms`
- `Optional` Switch to horizontal-scrolling in `boolean`
- `Optional` Callback-function with resulting scroll-position as parameter

## NPM
Yes. Use `npm install slimscroller`.

## Thanks
This is a smaller fork of [alicelieutier's smoothScroll](https://github.com/alicelieutier/smoothScroll).
