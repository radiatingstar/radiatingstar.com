---
title: Why You Should Make And Share Your Own Mixins Collection for LESS or SASS
description: ""
date: '2012-08-12T13:00:00.000Z'
tags: 
  - css
  - less
---

Short answer: it requires you to keep up to date with all of the CSS specification changes.

A longer answer — read further.

I'm maintaining my own collection of mixins for LESS (it's a tool that adds some nice, programming-like functionality into static CSS). I call it [Lots of Love for LESS](http://mateuszkocz.github.com/3l) (3L for short). I've made it because I found that all other available collections didn't suit my needs and my image of how they should work. Now that 3L is available for few months already I've found **it's a serious business to “stay on the market”** and to not offer other people some useless pieces of code — or even worse — the code that will make their websites work wrong.

The problem with mixins collections is that their main selling point is to help developers with vendor prefixes for yet to be standardised CSS properties. That means everyone who makes a mixins collection have to be up to date with all changes done in a CSS specification and with the browsers' support of those properties. Otherwise some of the mixins won't work at all, will work wrong (even worst) or won't cover some of the vendor prefixes. You can't do that! **Publishing something you want other people to use is a responsibility and a promise your tool will be of the highest quality.**

**Keeping track of all the CSS news to make your tool good is the best way to move your knowledge and skill forward**. Having a tool you share with people is a really great motivation. Even better than a blog, since on a blog you can just don't post about something with no real consequences.

Let me show you some examples what happens when you don't update your mixins collection.

1.  Example I – gradients

    As you may know, the [gradients specification has changed](http://www.w3.org/TR/2012/CR-css3-images-20120417/#gradients) ([IE Blog has some nice comparison](https://blogs.msdn.com/b/ie/archive/2012/06/25/unprefixed-css3-gradients-in-ie10.aspx?Redirected=true)). You better check your websites where you used CSS gradients if they work as intended or work at all. Due to this change, **all mixins collections I know are wrong and offer invalid and not working gradients' syntax**. 3L is the only one that has working gradients. But well, as I wrote before, I didn't like other collections and their obscurantism was one of the reason I wrote main.

2.  Example II – flex-box

    Once again — the [change in syntax](http://css-tricks.com/old-flexbox-and-new-flexbox/). Flexible box model is still in the [editor's draft](http://dev.w3.org/csswg/css3-flexbox/) phase, but since most of the browsers implemented this functionality it also showed in almost all mixins collections. Unfortunately it proved to be a bad decision. Now, **if a collection offers a flex-box mixin based on the old specification, it makes a very bad job encouraging developers that might not be aware of the changes to use a property that will stop working in days**.

3.  Example III – -ms- prefix

    It seems like IE10 will change our opinion on the Internet Explorer brand. The 10th version of the browser already implemented some of the widely used properties like transitions, transforms and animations. For a short time it was necessary to use the -ms- prefix, but no longer. There are now two types of mixins collections. Some of them never implemented the prefix, and lucky for them, they will work just fine now. Some, though, used -ms- and now will create a redundant code. Not cool.

As you can see, when you make a collection of mixins, you really need to stay up to date with all news in CSS. This will only help you to become even better at what you do. For me there's also a stisfaction of sharing [the best collection on the Internet](http://mateuszkocz.github.com/3l/). **Don't you now have an urge to make something even better than me and become awesome?**
