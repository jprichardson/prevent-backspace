prevent-backspace
================

Is a client-side JavaScript component that prevents the backspace from navigating back in the browser.

You can use it with [browserify](https://github.com/substack/node-browserify) or [component](https://github.com/component/component).



Browserify
----------

    npm install prevent-backspace


Component
---------

    component install jprichardson/prevent-backspace



Example
------


```javascript
var preventBackspace = require('prevent-backspace')
preventBackspace() //hitting `backspace` outside of input, select, textarea or contentEditable will be swallowed
```


Credits
-------

This originated from this question: http://stackoverflow.com/questions/1495219/how-can-i-prevent-the-backspace-key-from-navigating-back. I repackaged [this answer](http://stackoverflow.com/a/8218367/10333) and removed jQuery dependence.



License
-------

(MIT License)

Copyright 2013, JP Richardson  <jprichardson@gmail.com>
