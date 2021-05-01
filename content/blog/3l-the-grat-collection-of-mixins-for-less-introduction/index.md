---
title: 3L - the Great Collection of Mixins for LESS - Introduction
date: '2012-03-22T15:00:00.000Z'
tags: [CSS, LESS, Project]
---

I've made an awesome collection of mixins for LESS – Lots of Love for LESS. I might be boasting a bit too much but I do really believe I did something great! Before you [get 3L](http://mateuszkocz.github.com/3l/) or see the project [on GitHub](https://github.com/mateuszkocz/3l), read why it will help you making your website awesome! If you know what LESS and mixins are, [skip the first part](#skip).

## LESS and mixins

LESS is a great tool that lets web developers do basic operations including variables, mixins and mathematical functions in CSS. LESS speeds up greatly the process of writing CSS and helps to keep clean and easy to read code. [Check on the LESS' website why it's awesome!](http://lesscss.org/)

Mixins are predefined classes that are meant to be included inside other classes. Using mixins we can minimise the code by typing only a mixin's name and putting some arguments inside. The example of mixin:

```less
/* The mixin. */
.size (@width, @height) {
  width: @width;
  height: @height;
}

/* Objects using the mixin below. */
.object1 {
  .size(10px, 20px);
}
.object2 {
  .size(30px, 40px);
}
```

That way we get a two object with different sizes and we needed only one line do declare it using a predefined mixin. The greatest value of mixins lays with properties that need a browser type prefixes (vendor prefixes).

## <a name="skip"></a>Big collection of mixins

Most of mixins deal with the prefixes hell. Some of them add a bit more value, though. The mixins included in 3L are:

*   [box-shadow](#box-shadow),
*   [border-radius](#border-radius) together with classes for rounding specific corner (round-top-corners for example)
*   [box-sizing](#box-sizing),
*   [background-clip](#background-clip),
*   [opacity](#opacity),
*   [gradients](#gradients),
*   [background-size](#background-size),
*   [columns](#columns),
*   [transforms (2D and 3D)](#transforms),
*   [transition](#transition),
*   [animation and @keyframes](#animations),
*   [flex-box](#flex-box),
*   [SEO helper class](#seo),
*   [supporting classes from HTML5 Boilerplate](#supporting),
*   [clearfix](#clearfix).

Every beta feature mixin has prefixes for all major browsers, that is for `-webkit-`, `-moz-`, `-ms-` and `-o-`.

## <a name="box-shadow"></a>Box-shadow and multiple shadows

Box-shadow is pretty common mixin in all other great bundles of mixins. But 3L lets you do something more than that. It's probably the only collection of mixins that allows multiple box-shadows.

```less
/* Do that: */
.class {
  .box-shadow(1px 1px black, inset 10px 10px 20px 30px hsla(0,0,0,.5));
}

/* To get that: */
.class {
  -webkit-box-shadow: 1px 1px #000000, inset 10px 10px 20px 30px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 1px 1px #000000, inset 10px 10px 20px 30px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 1px #000000, inset 10px 10px 20px 30px rgba(0, 0, 0, 0.5);
}
```

You can have up to five shadows declared. But in case you would like some more it's so easy to get another mixin that will allow that with just a bit of copy & paste.

## <a name="border-radius"></a>Border-radius together with different corners

If you want your element to have 10px rounded corners, just type `.border-radius(10px)`. But only this much wouldn't be awesome, so you can do:

*   `.border-radius` or `.round-corners` for rounding all corners,
*   `.eliptical-border-radius` if you wish to have corners rounded with two different values (elliptically),
*   `.round-corner (@corner, @radius)` for rounding the corner you want (top-left, bottom-right and so on),
*   `.border-top-left-radius`, `.border-top-right-radius`, `.border-bottom-right-radius` and `.border-bottom-left-radius` – same as above but now with the original property name,
*   `.border-top-radius`, `.border-bottom-radius`, `.border-left-radius`, `.border-right-radius` to round two specific corners,
*   `.round-top-corners`, `.round-bottom-corners`, `.round-left-corners`, `.round-right-corners` – they do the same as above.

## <a name="box-sizing"></a>Box-sizing

Change the default [box model](http://www.w3.org/TR/CSS2/box.html). You might [find it useful](http://paulirish.com/2012/box-sizing-border-box-ftw/). This mixin provides you not only with the prefixed properties but also allows you to use different values. You can write for example `.box-sizing(padding)` and `.box-sizing(padding-box)` to get the same effect. `.padding-box-sizing` is fine too.

## <a name="background-clip"></a>Background-clip

Clip the background to the box you want. Same as above you can use both type of values in `.background-clip()`: with or without -box suffix. Also try the shorthand name `.bg-clip`.

## <a name="opacity"></a>Opacity with different kind of values

You can declare an opacity of an object with the `.opacity()` class and as a value you can use either numbers between 0 and 1 (as you put in the opacity property), numbers between 1 and 100 (as it was done with the old filter property) and percentages (like in Photoshop and GIMP). Opacity also creates a filter property for old IE browsers. You can also use predefined helper classes `.transparent`, `.half-transparent` and `none-transparent` to get the desired effect.

## <a name="gradients"></a>Gradients

3L lets you use many kinds of gradient:

*   vertical gradient,
*   horizontal gradient,
*   diagonal gradient,
*   and radial gradient.

You just need to type a name of a gradient and put colours as values, like for example `.vertical-gradient(green, red)`. You can also put two or three colours inside. If you put two, then the `background` property used mainly for older browsers will be the same as the firs colour. If you choose to type three, then the third colour will be the background's colour.

## <a name="background-size"></a>Background-size for better control of your background

`.background-size` together with `.bg-size` for short lets you decide how big will be your background image. You can also use two values for both x and y sizing.

## <a name="columns"></a>Colum layout

You can easily define a colum layout together with supporting properties such as `column-gap` and `column-rule` without bothering yourself with prefixes.

## <a name="transforms"></a>2D and 3D transformations

Do some awesome transformations prefixless. Also, if you want to do only one kind of transformation, you can use classes like `.rotate()`, `.translate()` and more. You can also set-up a transform origin with only `.transform-origin()` class.

## <a name="transition"></a>Transition

A great CSS3 feature that lets web designers animate a change between two object's states. The `.transition()` class is prepared to contain up to five different properties to be transitioned. Feel free to add more if you will need that much.

There is also a class that helps to create a transition effect on transformed elements. Why this is so good? Because for that purpose you need this code:

```css
.some-class {
  -webkit-transition: -webkit-transform …;
  -moz-transition: -moz-transform …;
  -ms-transition: -ms-transform …;
  -o-transition: …;
}
```

You might want to read why [doing transitions on transforms isn't a good idea](/blog/transition-with-transform-cant-be-future-proof/) actually. For short: you can't guarantee this will work in the future.

## <a name="animations"></a>Animations and @keyframes

Due to the vendor prefixes, setting up animations is bothersome. For the same reason, [setting up @keyframes is even more bothersome](/blog/css-keyframes-animations-with-less/). But not with 3L! You just need to type this:

```less
@import 'animation1';
.animation1 () {
  /* Your @keyframes properties */
}
.some-class {
  .animation(animation1 1s);
}
```

And you get fully working animation supported by the all browsers that use this property with prefixes.

## <a name="flex-box"></a>Flex-box

There is this nice [article about flex-box](https://hacks.mozilla.org/2010/04/the-css-3-flexible-box-model/) on Mozilla's blog. All properties described in that article are supported by 3L!

## <a name="seo"></a>SEO with CSS

3L will help you fix some SEO issues on your website. Read how you can [use CSS to improve SEO of your website](/blog/how-to-improve-seo-with-css/).

## <a name="supporting"></a>HTML5 Boilerplate supporting classes

[HTML5 Boilerplate](http://html5boilerplate.com/) introduces some nice supporting classes that will help you with creating a great user experience on your website. I've implemented them in The LESS Way, so they can be used easily and effectively.

## <a name="clearfix"></a>Clearfix

A nice supporting class for containing floats. You just need to put a `.clearfix;` inside the object you want to clear.

## 3L is compatible with Bootstrap

You can use 3L together with [Twitter's Bootstrap](http://twitter.github.com/bootstrap/). You just have to do some simple copypasta. Connecting 3L with Bootstrap will give you a great framework for fast creation of your website together with easy possibilities of customising it with 3L.

## Documentation and examples

Every mixin has an explanation and some examples of usage. There are also explanations of properties itself, together with required and allowed values, some useful resources around the web and info about browsers support. Just by reading it you might learn something new and useful as I did while writing the documentation.

## To sum up

Lots of Love for LESS will give you a great ad while creating your websites with LESS. Even tough this post is quite long I couldn't cover every feature I put in 3L. What you've just read are the most important features. Knowing them you can easily start with your project and improve your productivity. You will find even more interesting but smaller features if you read the documentation.

So what are you waiting for? [Get your 3L](http://mateuszkocz.github.com/3l/) and start doing something awesome! You can also [watch the project on GitHub](https://github.com/mateuszkocz/3l) for updates.

## Post Scriptum

I haven't mentioned it before but obviously it's a free and open source project.
