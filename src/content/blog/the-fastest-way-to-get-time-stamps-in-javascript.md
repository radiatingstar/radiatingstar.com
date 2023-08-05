---
title: The fastest way to get time stamps in JavaScript
description: Performant ways of obtaining the current timestamp
date: '2014-03-15T13:00:00.000Z'
tags: 
  - javascript
---

Did you know you can convert a Date object to a number using the unary + operator? The operator tries to convert its operand to a number, so using `+new Date()` will output the current time in milliseconds. This might not be the best piece of code readability-wise, but more important — what is the best performance-wise way to count the time in JavaScript?

This is a serious question, especially when you're creating a game and counting the time passage between the game loops. You most likely don't want to waste too much of the CPU power for tasks that don't have that much impact on the gameplay.

I've done a quick research on this topic and found some JSperfs:

1.  [Quickest way to a UNIX Date](http://jsperf.com/date-now-vs-new-date-gettime/21)
2.  [getTime -vs -Now](http://jsperf.com/gettime-vs-now-0/6)

Both of the tests covers mainly the same scope of standard techniques: `Date.now()`, `new Date().getTime()` and `+ new Date()`. From this set, the fastest one is the `Date.now()`. It's not really a surprise. It doesn't have the overhead of creating a new object in a memory. What caught my attention, though, is the performance the new and shiny `performance.now` method ([read more about the new timing methods](http://www.html5rocks.com/en/tutorials/webperformance/usertiming/)) introduced in the second test. I'd guess it would be the fastest one here, but it wasn't in that scenario. A small update is required in order to take advantage of this method.

Take a look at the [updated version of the performance test](http://jsperf.com/gettime-vs-now-0/7).

<figure>
  <img src="/blog-assets/time-performance.png">
</figure>

(Please note, that in the figure above, Chrome 33 and Firefox 28 are the Android's versions of browsers.)

What I did was to store the `performance` property in a variable to minimise the lookup required for accessing its `now` method. It was a real boost for Internet Explorer, Firefox and Opera, but made it slower for Chrome, where (together with Opera) the `Date.now()` is the fastest.

Knowing that I made another JSperf's test that compares [performance of Date.now() and performance.now()](http://jsperf.com/performance-of-timers) and also makes them into a return value of a function. That way it's possible to create a code like below in order to use the most efficient way of timing.

```javascript
  var getTime = (function(){
  var perf = window.performance;

  // Assume browser sniffing for Firefox and IE.
  if (IE || FX) {
    return function() {
      return perf.now();
    }
  } else {
    return function() {
      return Date.now();
    }
  }
})();
```

That solution depends on some kind of browser sniffing and the performance knowledge we now have from the tests. The sniffing, though, is not a good practice, so another way to serve the best timing is to actually run a small test when a user visits a page or a game and — based on the data acquired — choose the best option.

```javascript
var checkTimerPerformance = function(){
  var perf = window.performance,
      t, stampDateNow, stampPerfNow, i;

  // Store the initial time.
  stampDateNow = Date.now();

  // Run Date.now() performance test.
  for ( i = 0; i < 100000 ; i += 1 ) {
    t = Date.now();
  }

  // Find out how long the Date.now() test took.
  stampDateNow = Date.now() - stampDateNow;

  // Run the test for performance.now() only if the browser supports it.
  if ( perf ) {
    // Start the timer for performance.now();
    stampPerfNow = Date.now();

    // Run performance.now() test.
    for ( i = 0; i < 100000 ; i += 1 ) {
      t = perf.now();
    }

    // Check the time of performance.now();
    stampPerfNow = Date.now() - stampPerfNow;
  } else {
    // If the browser doesn't have the performance.now method,
    // the Date.now() will be used by default.
    stampPerfNow = 0;
  }

  // If the Date.now() was faster, return it.
  if ( stampPerfNow > stampDateNow ) {
    return function() {
      return Date.now();
    };

    // Otherwise use the performance.now() method.
  } else {
    return function() {
      return perf.now();
    };
  }
};

var getTime = checkTimerPerformance();

// Then use the getTime() in your loop.
```

That code will run a quick test finding how long did it take to make a loop of 100 000 assignments and will return a function that will then return the outcome of using the most efficient timer method in the current browser.

One caveat of this solution is that it is not the most accurate and sometimes returns the slower method. It happens mainly in Chrome, where the difference between both methods wasn't that significant. It works rather well in other browsers and is still better that browser sniffing.
