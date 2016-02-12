# Promisex
Utilities for jQuery promises

* `promisex.runinSequence([calls])` - Takes an array of promise objects and runs them in sequence.


##### Example
```

var scripts: [
    'http://localhost:8080/build/manifest.js',
    'http://localhost:8080/build/vendor.js',
    'http://localhost:8080/build/app.js'
  ];

var calls = scripts.map(function(url) {
  return function() {return jQuery.getScript(url);};
});

promisex.runInSequence(calls)
.then(function() {
  //succeeded
}, function() {
  //failed
});

```
