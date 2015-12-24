# slimScroller.js
A slim smooth-scrolling script under 300 bytes (gzipped), with no other dependencies (No jQuery).

## Two versions
### [SlimScroller Base](https://github.com/ameesme/SlimScroller.js/blob/master/dist/slimScroller.min.js)
    540  bytes gzipped
    1010 bytes uncompressed
The base includes support for four types of scroll-targets:
- Position in pixels ( eg. `slimScroller.scroll(200)` )
- CSS selector ( eg. `slimScroller.scroll("p:first-of-type")` )
- Direct JavaScript HTML-element ( eg. `slimScroller.scroll(document.querySelector(p#hi))` )

### Hashtags
By executing `slimScroller.bind()` when the dom finishes loading, SlimScroller will also animate same-page hashtag-scrolling in anchor tags. 

### [SlimScroller Small](https://github.com/ameesme/SlimScroller.js/blob/master/dist/slimScroller.small.min.js)
    282 bytes gzipped
    464 bytes uncompressed

The small version includes support for one type of scroll-target:
- CSS selector ( eg. `slimScroller.scroll("p:first-of-type")` )

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
