# slimScroller.js
Smoothly scroll to positions on your website, under 350 bytes, no dependencies.

## Two versions
### [SlimScroller Base](https://github.com/ameesme/SlimScroller.js/blob/master/dist/slimScroller.min.js)
    343 bytes gzipped
    580 bytes uncompressed

The base version includes support for one type of scroll-target:
- CSS selector ( eg. `slimScroller.scroll("p:first-of-type")` )

### [SlimScroller Full](https://github.com/ameesme/SlimScroller.js/blob/master/dist/slimScroller.full.min.js)
    570  bytes gzipped
    1030 bytes uncompressed
The full version includes support for three types of scroll-targets:
- Position in pixels ( eg. `slimScroller.scroll(200)` )
- CSS selector ( eg. `slimScroller.scroll("p:first-of-type")` )
- Direct JavaScript HTML-element ( eg. `slimScroller.scroll(document.querySelector(p#hi))` )

### Hasthags
Want to bind SlimScroller to all anchor-tags on a page? Run `slimScroller.bind()` when the dom finishes loading. Only supported on [SlimScroller Full](https://github.com/ameesme/SlimScroller.js/blob/master/dist/slimScroller.full.min.js).

## How to use
Just use the `slimScroller.scroll`-function with the following parameters.
- `Required` Scroll-target (according to SlimScroller-version)
- `Optional` Scroll-duration (`ms`)
- `Optional` Horizontal-scrolling instead of vertical (`boolean`)
- `Optional` Callback-function with final scroll-position as parameter

## Demo
[View here](https://amees.me/files/public/SlimScroller.js/demo.html).

## NPM
Run `npm install slimscroller`.

##License (MIT)
Copyright © 2016 Mees Boeijen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
