---
title: Transition With Transform Can't Be Future Proof
date: '2012-03-22T13:00:00.000Z'
tags: [css]
---

**Update:** since July the browsers are dropping support for both prefixed transitions and transformations so this blog post is now obsolete. We know the answer for the discussed question of how to make sure that combining transitions and transformations will be future-proof. The answer is to write both properties unprefixed after prefixed versions.

---

CSS transition and transform are nice properties that can generate interesting effects and may enhance user experience. The problem is, though, we can't guarantee that a websites where transitions are made on transformed elements will work in the future. Both properties are still in the draft phase so web browsers are supporting only prefixed versions of them for now. And this leads to the problem.

For prefixed versions of properties a good practice is to put an unprefixed version at the end, right after prefixed rules. In case of almost all other properties, doing that will ensure a future-friendliness of a website. So we do something like that:

```css
-webkit-transform: /*values*/;
-moz-transform: /*values*/;
-ms-transform: /*values*/;
-o-transform: /*values*/;
transform: /*values*/;

-webkit-transition: /*values*/;
-moz-transition: /*values*/;
-ms-transition: /*values*/;
-o-transition: /*values*/;
transition: /*values*/;
```

Sweet! It works! And it will work as long as you won't get the idea to actually:

1.  transition transform but at the same time not animate other properties,
2.  transition transform together with some other properties but not all properties,
3.  or transition transform together with some or all other properties with different functions (duration, timing function, delay).

Transition takes other properties' names as values, so we have to write something like that:

```css
-webkit-transition: -webkit-transform ...;
-moz-transition: -moz-transform ...;
-ms-transition: -ms-transform ...;
-o-transition: -o-transform ...;
transition: transform ...;
```

And here the problem starts since the code above seems to be perfectly valid and future-proof, but it's not!

## Case 1: unprefixed transition gets supported but unprefixed transform not

What will happen when the browsers end support for prefixed transition but not for transform? They will ignore the -pre-transition rule and go straight to transition. But it has the unprefixed transform, not yet supported, as an argument so nothing will happen – transition won't run because the browsers don't know what the unprefixed transform is.

The code that will deal with this scenario might look like that:

```css
-webkit-transition: -webkit-transform ...;
        transition: -webkit-transform ...;

-moz-transition: -moz-transform ...;
     transition: -moz-transform ...;

-ms-transition: -ms-transform ...;
    transition: -ms-transform ...;

-o-transition: -o-transform ...;
   transition: -o-transform ...;
```

Nope. No such luck. In this case every previous transition property with prefixed transform will be overwritten by the last one with (in this example) -o- prefix. Only one browser gets some love. And we can't do transition: transform at the end, because it will overwrite that last working rule for one browser.

**Conclusion 1:** we can't secure websites in case of browsers dropping support for prefixed transition before prefixed transform.

## Case 2: unprefixed transform supported but unprefixed transition not

This scenario seems to be a bit better. The code has to be like that:

```css
-webkit-transition: -webkit-transform ...;
-webkit-transition: transform ...;

-moz-transition: -moz-transform ...;
-moz-transition: transform ...;

-ms-transition: -ms-transform ...;
-ms-transition: transform ...;

-o-transition: -o-transform ...;
-o-transition: transform ...;

transition: transform ...;
```

Great! After dropping -pre-transform, browsers still get transition and eventually, after dropping support for -pre-transition they get a clean transition: transform working. We're perfectly safe - not! Since this scenario is only a possibility, we are not 100% secured. And also we get sweet nine lines of code. Anyone still thinks prefixes are good idea?

Hey, wait! Something is wrong there. Yup, we are secured for the future but today the -pre-transition: transform overwrites -pre-transition: -pre-transform, so we don't get a transition in modern browsers. Not a cool deal.

**Conclusion 2:** we can secure our websites for the eventuality the browsers drop support for -pre-transform first, but it breaks transitions today.

## Case 3: both properties start to be supported unprefixed at the same time

If betting on that eventuality we could just use the code at the beginning.

```css
-webkit-transition: -webkit-transform ...;
-moz-transition: -moz-transform ...;
-ms-transition: -ms-transform ...;
-o-transition: -o-transform ...;
transition: transform ...;
```

Since it's still a possibility we can't really call it a future-proof method. It leads to an error if browsers won't support both uprefixed versions. However it seems to be the safest solution for now – opposite to case 1 where we can't get it working in the future and case 2 where it breaks today, we get transitions working today and have a chance of them working in the future.

**Conclusion 3:** We're still betting, but it seems to be the safest bet so far.

## Case 4: the legacy

Because the browsers use prefixed properties, they try to support prefixes even after they start to use unprefixed versions. For example we can still write -moz-box-shadow to get a box-shadow in Firefox. If we bet on legacy the CSS will be like that:

```css
-webkit-transition: -webkit-transform ...;
-moz-transition: -moz-transform ...;
-ms-transition: -ms-transform ...;
-o-transition: -o-transform ...;
```

No unprefixed versions. If the browsers will consider their legacy, this should works fine. But it's still an "if" and, unfortunately, it's not always like that. Try `-moz-background-clip: padding` (or `padding-box`). You won't get a wished outcome. Personally though, I think this is anyway the best idea. Not because its probability is the highest (I can't really tell that), but because it has _only_ four lines of code.

**Conclusion 4:** counting on the browsers still supporting prefixed versions after starting to use unprefixed ones can be risky but there are examples of that behaviour in the case of other properties.

## Case 5: error handling

Try something like that:

```css
padding: 10px;
padding: potato;
```

You will still get a 10px padding. If the browsers will behave like that with transition: transform there wouldn't be any problem. Sadly, as you can see in case 2, it doesn't work today and probably won't work in the future. The reason is this statement from [transitions specification](http://www.w3.org/TR/css3-transitions/#transition-property):

> If one of the identifiers listed is not a recognized property name or is not an animatable property, the implementation must still start transitions on the animatable properties in the list […]  
> <cite>W3C</cite>

Conclusion finale: we're doomed! It's the beta feature for you!

We can't really choose any method without placing a bet on a certain future or without breaking websites today. For now it looks like we should forget doing transitions with transforms that has some other properties and we don't want to animate everyone or want to transition them with different functionality, and instead we should use the keyword "all" to animate every change in the same way. Kinda sad, isn't it? Well, if we want to stick only to CSS, we're doomed, but…

## JavaScript to the rescue

… there is JS for that. A nice script – [prefix free](http://leaverou.github.com/prefixfree/), seems to be the solution. It's not the perfect one (why do we need JS for something like that?), but it should provide some level of security in the future.
