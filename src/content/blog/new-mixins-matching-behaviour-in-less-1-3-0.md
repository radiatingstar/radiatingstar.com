---
title: New Mixins Matching Behaviour in LESS 1.3.0
description: ""
date: '2012-04-05T15:00:00.000Z'
tags: 
  - less
---

About a month ago LESS was updated to version 1.3.0. This update brought an important change to the mixins matching system depending on the quantity of arguments. Now some of the mixins you wrote before using previous versions on LESS might now not work with the 1.3 and since probably not everyone of us read change logs before downloading and using LESS I found it might be useful to let you know.

The set of mixins I created – 3L – was also affected by this change. I somehow missed that and up to this point 3L might be buggy when using some of the mixins included. It is now working well so you can [download 3L](http://mateuszkocz.github.com/3l/) and have fun with developing your website using LESS. Or you can [read why 3L is awesome](/blog/3l-the-grat-collection-of-mixins-for-less-introduction/).

## What's new in LESS 1.3.0?

Version 1.3.0 fixed some bugs but for now the most important things are:

> Variadic argument support, see: https://gist.github.com/1933613  
> Behaviour of zero-arity mixins has changed, see link above.
> 
> <cite>[LESS Changelog](https://github.com/cloudhead/less.js/blob/master/CHANGELOG)</cite>

Prior to v.1.3.0. we could write something like that:

```less
.mixin () { /* some properties */}

.a {.mixin();}
.b {.mixin(10px);}
.c {.mixin(10px, 20px);}
```

Like that, .a, .b and .c classes get properties from .mixin class. The `()` would match from 0 to unlimited number of arguments. Now it's no longer the case. When using `()`, only the call with no arguments at all will work. In the example below only .a will get the .mixin properties.

```less
.mixin () { /*some properties*/}

.a {.mixin();} /* Match because it has no arguments provided. */
.b {.mixin(10px);} /* No longer match in v.1.3.0\. */
.c {.mixin(10px, 20px);} /* No longer match in v.1.3.0\. */
```

Now if we would like to get this "unlimited arguments" behaviour we need to use three dots `...` in parenthesis.

```less
.mixin (...) { /*some properties*/}

.a {.mixin();} /* Works. */
.b {.mixin(10px);} /* Works. */
.c {.mixin(10px, 20px);} /* Works. */
```

## How to write mixnis that would require at least 1 argument?

Using `...` we can also match 1+, 2+ and so on mixins. Just write `.mixin(@argument1, ...)` for 1+, `.mixin(@argument1, @argument2, ...)` and so on. In those cases the only mixins calls that would work will be the one that has at least one or at least two arguments declared.

## The importance of @arguments keyword

When using `...` it is important to use `@arguments` keyword in mixin's properties' values to actually use those provided arguments. Otherwise even if we used `...` and put as a values something like `@argument1`, `@argument2` and `@argument3`, nothing will happen. Use `@arguments` like that:

```less
.mixin (...) {
  border-radius: @arguments;
}

.a {.mixin(10px);}
.b {.mixin(10px, 20px);}
```

This code will compile to:

```less
.a {border-radius: 10px;}
.b {border-radius: 10px 20px;}
```

If we were to use a n+ pattern mathing described above, there's also a technique to do that in order to get a working mixins. Just write the code like that:

```less
.mixin (@a, @b...) { /* @b with ... */
  border-radius: @a; /* @a is a single argument. */
  box-shadow: @b; /* @b works like @arguments for any other set of arguments other than @a. */
}

.a {.mixin(5px, 10px, 10px, orange);}
```

And the compiled code will be:

```less
.a {
  border-radius: 5px;
  box-shadow: 10px 10px orange;
}
```

So if you'll ever get the "No matching definition was found" error writing your LESS, check out if this new behaviour isn't the case. If it is, now you know how to repair that easily.
