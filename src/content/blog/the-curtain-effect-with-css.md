---
title: The Curtain Effect With CSS
description: ""
date: '2012-05-24T13:00:00.000Z'
tags: 
  - css
---

Recently I've discovered how cool the curtain effect is. I wanted to try making it myself thinking it might be quite challenging, but no such luck. Coding this great feature is so easy it hurts. You only need some simple CSS (not even CSS3!).

## What's Curtain Effect and why it's awesome?

The curtain effect is an idea of making a content box overlap another box when user scrolls a website. It's usually made so that the box on the bottom (further in HTML document) goes up covering the top one when a website is scrolled. You can see a nice working example at [Google Ventures](http://www.googleventures.com/).

The curtain effect is aesthetically pleasing. It brings some novelty to a website and since it's not overused (yet) you can easily make your website stand out of the crowd. It also improves user experience (or interaction — however you want to call it). In a "classic" layout the first to disappear while scrolling are the logo and top navigation (and sometimes other elements like search box for example) — they're on top so they hide first. It's problematic since you might want to keep your logo's exposition as long as you can while hiding a content of less importance, as Google does on the previously linked website where it hides a company introduction before the logo and navigation.

## The Code of Curtain Effect

The code is simple but before writing it I need to make a comment. The method of making a curtain effect is quite inflexible. You need to know the height of your content box that will be covered by another one. It will be probably a header that usually has a fixed height anyway, so this shouldn't be a big headache. But in case you want to create a more advanced curtain effect, with more boxes being covered/covering or with some more advanced functionality, you might want to check out the [Curtain.js](http://curtain.victorcoulon.fr/) jQuery plugin instead of using a pure CSS solution.

So let's get to the code. We will need at least two boxes: one that will be covered, and one normal content box.

```html
<header>
  <!--
    Header's content. Here go a logo and top navigation.
    It'll be covered by another box.
  -->
<header>

<article>
  <!-- The website's content that will be covering the header. -->
</article>
```

```css
header {
  position: fixed;
  top: 0;
}
article {
  position: relative;
  margin-top: 500px; /* The height of the header. */
}
```

The key is to use `position: fixed` on the header. Thanks to that, the header will always stay at the top of a browser's window. Now we need to declare `position: relative` on the article because the default static position would be covered by the header. The last thing is to declare the top margin of the article. The value of this margin will be the height of your header. It's all up to the content that will be inside the header. The CSS `height` declaration is not needed.

That's pretty much all that is to write in this topic. Now just use this method and make your website awesome!
