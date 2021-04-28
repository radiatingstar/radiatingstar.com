---
title: CSS @keyframes Animations With LESS
date: '2012-03-22T14:00:00.000Z'
tags: [CSS, LESS]
---

Defining CSS animations is a pain due to the vendor prefixes. We have to not only define animation property five times with four prefixes and one without prefix, but also we have to create five keyframes in the same way. This won't be a real problem when you design your animation for one browser and at the end copy your result into four other @keyframes. But then, what will happen when you will need to change something? Yep – another copypasta. Yet another change? You know where this is going to. But there is a solution.

The prefixes issue is one of the main reason behind why CSS pre-procesors like [LESS](http://lesscss.org/) and [SASS](http://sass-lang.com/) gained popularity. They let us define a predefined classes (mixins) that will contain the prefixed properties inside and, in the actual code, we just need to refer to those classes and easily get a set of properties with prefixes.

The example how it is done in LESS

```less
/* The mixin with prefixed properties. */
.box-shadow-mixin (@arguments) {
  -webkit-box-shadow: @arguments;
  -mox-box-shadow: @arguments;
  box-shadow: @arguments;
}

/* A class we want to put box-shadow into. */
.class {
  .box-shadow-mixin(1px, 1px, black);
}
```

That way we easily get a class with three different box-shadow properties. How could we use this great feature to create keyframes? At first sight it might seems to be a difficult task. In mixins we're using sets of properties that need to have a prefix but @keyframes are more like classes than properties even though we need them prefixed.

## @keyframes with LESS

The solution will slightly differ from what we always do with mixins but the whole philosophy behind that will stay the same. We just need to think about what is inside of @keyframes as a set of properties that can be put inside @keyframes like other mixins. Lets start with declaring @keyframes.

```less
@-webkit-keyframes some-animation {.mixi-frames;}
@-moz-keyframes some-animation {.mixi-frames;}
@-ms-keyframes some-animation {.mixi-frames;}
@-o-keyframes some-animation {.mixi-frames;}
@keyframes some-animation {.mixi-frames;}
```

As you can see we put inside @keyframes a .mixi-frames class. It will be our mixin class we will use so that we will need to only change that class and all @keyframes will update itself. Lets declare a simple keyframes:

```less
.mixi-frames () {
  from {width: 254px;}
  to {width: 512px;}
}
```

And we're done. After compilation of a .less file the code will look like that:

```less
@-webkit-keyframes some-animation {
  from {width: 254px;}
  to {width: 512px;}
}
@-moz-keyframes some-animation {
  from {width: 254px;}
  to {width: 512px;}
}
@-ms-keyframes some-animation {
  from {width: 254px;}
  to {width: 512px;}
}
@-o-keyframes some-animation {
  from {width: 254px;}
  to {width: 512px;}
}
@keyframes some-animation {
  from {width: 254px;}
  to {width: 512px;}
}
```

Now, any time you would like to change the code inside @keyframes, you will just need to change the code inside .mixi-frames class and all @keyframes will update automatically. You can now test how animation will look in any browser without too much hassle.

## How to make it even easier

As you have probably found, we still need to write @keyframes with every prefix possible. It's a bit annoying. I've tried a "Yo Dawg" solution – putting a mixin in a mixin. Unfortunately it hasn't worked since LESS doesn't allow putting variables into classes' and properties' names. Something like that won't work:

```less
.keyframes-mixin (@name, @frames) {
  @-webkit-keyframes @name {@frames}
  @-moz-keyframes @name {@frames}
  @-ms-keyframes @name {@frames}
  @-o-keyframes @name {@frames}
  @keyframes @name {@frames}
}
```

It might work in SASS, though. SASS allows variables in names – it's called [interpolation](http://sass-lang.com/tutorial.html#interpolation). I don't know SASS too well so I can't really quarantee it's a valid solution.

## 3L to the rescue

If you're the LESS fan-boy or fan-girl you might want to use [Lots of Love for LESS](http://mateuszkocz.github.com/3l/) – the awesome (let me boast a bit) collection of mixins and some other nice things. 3L has a feature to help you creating animations with the smallest code possible. You just do something like that:

```less
/* Import all prefixed @keyframes. */
@import 'animation1';

/* Create a mixin for @keyframes. */
.animation1 () {
  /* Your @keyframes properties */
}

/* Create an animation. */
.some-class {
  .animation(animation1 1s);
}
```

And you have your animation on .some-class object with all prefixes and unprefixed included!

3L lets you do even more awesome thing like [help your SEO with CSS](/how-to-improve-seo-with-css), integrate with Twitter's Bootstrap, use multiple shadows and [more](3l-the-grat-collection-of-mixins-for-less-introduction). So what are you waiting for? Do something awesome with [3L](http://mateuszkocz.github.com/3l/)!

## Post Scriptum

Animations are still a beta feature. You have to be careful if you wish to use other prefixed properties inside of @keyframes. It's the same kind of problem as with [transitions with transformations](/transition-with-transform-cant-be-future-proof).
