# slimScroller.js
A smooth-scrolling script under 0.5 Kb (gzipped), with no dependencies.

##How to use
Just use the `slimScroller`-function with three parameters.
- `Required` Target position in `px`, a selector (`p:first-of-type`), or an HTML-element (`document.querySelector(p#hi)`)
- `Optional` Duration in `ms`
- `Optional` Switch to horizontal-scrolling in `boolean`
- `Optional` Callback-function

##How small is this
The tidy, uncompressed code is less than one kilobyte. The minified code is less than half a kilobyte.

##Example
```
slimScroller.scroll(200);
```

##Is it pretty?
I am not sure. It works great though.

##Thanks
This is a smaller fork of [alicelieutier's smoothScroll](https://github.com/alicelieutier/smoothScroll).
