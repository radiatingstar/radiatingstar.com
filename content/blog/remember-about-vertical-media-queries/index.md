---
title: Remember About Vertical Media Queries
date: '2012-05-07T13:00:00.000Z'
---

Usually when you read about media queries or write your own CSS you can see or you use the media rules that deal with a device's width: `min-width`, `max-width`, `min-device-width` and `max-device-width`.Their purpose is to make sure a website will work and provide a descent user experience on all possible screen sizes that user might use. Rarely though, you can see in use the media rules that alternate the design of a website depending on the window's height.

Those rules are: `min-height`, `max-height`, `min-device-height` and `max-device-height`. They help make websites adapt to a users' browser/window height changing the website's design like the width rules do. It comes in handy when you have some big images that will be only partly displayed if there is not enough vertical space, tall or fixed positioned navigation that will cover most of the short screen, big section (e.g. slider or product demonstration) that is designed to get most of a user's attention but on small screens could easily go ”below the fold“.

When above applies to your design, simply just use the vertical rules of media queries and adapt the design to your goals.

```css
@media all and (max-width: 300px) { /* Here goes rules declarations. */ }
```

The problem of the lack of vertical space is greatly relevant to smartphones and netbooks (and also to the future, since we don't know what screen sizes will be used in fridges or cars). Smartphones in landscape mode can have quite a big horizontal size but at the same time their vertical size isn't that impressive. Using only horizontal media queries in the style sheet (width and device-width), users will get a design that is intended for bigger screen and will probably have to scroll heavily to get to the important content. As for netbooks, those devices have certainly a bigger screens, but you can't be sure of how many bars their users have in their OS and browser that will make a visible page area relatively small in height.

It is worth to mention that you can also use two other media queries rules to target devices that are a bit too short in height than they are in width: aspect-ratio (and device-aspect-ratio) and orientation: landscape. However it's not the best idea. Aspect-ratio refers to all screen sizes that have this ratio. It doesn't matter if the screen is very large or very small — it's one design for all so it's hard to call it a responsive design. As for orientation: landscape — it doesn't work in all mobile browsers and also doesn't provide much flexibility in terms of a screen size.
