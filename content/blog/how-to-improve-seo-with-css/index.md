---
title: How to Improve SEO With CSS
date: '2012-03-22T12:00:00.000Z'
---

Before you start reading. This post is **not** about putting your styles in CSS style sheet to make your website more crawlable, using semantic tags or making your website lighter. It's about how to make CSS inform you about some SEO issues on your website.

It's possible, it's easy and it can help every web developer to avoid some mistakes in code that might damage the SEO of the website. The errors we're talking about are:

*   no alt text in images,
*   no address in anchors,
*   nofollow attribute in anchors or no nofollow in anchors,
*   forgotten `<title>`,
*   no description.

[Check out the demo page.](/demo/seo-helper/index.html)

Without further ado, lets get to the point. First the CSS code itself, later explanations.

```css
/* Images and anchors. */
img:not([alt]),
img[alt=""],
img[alt^=" "],
a[href=""],
a[href^=" "],
a[rel*="nofollow"] {
  outline: 2px solid red !important;
  outline-offset: 3px !important;
}

/* Title and description. */
head, title:empty, link, meta {display: block;}
title:empty:before {content: "You've left the <title> empty!"}
link:before {content: "You don't have a <title>!"}
title ~ link {display: none;}
meta[name="description"][content=""]:before, 
meta[name="description"][content=" "]:before {
  content: "You've left description empty!";
}
```

As you can see, we will be using a negation pseudo-class, attribute selectors, a structural pseudo-class and pseudo-elements. You can read more about them in W3C document [Selectors Level 3](http://www.w3.org/TR/selectors/).

## Correcting bugs in images and anchors.

Lets have a look at the first part of the code.

```css
/* Images and anchors. */
img:not([alt]),
img[alt=""],
img[alt^=" "],
a[href=""],
a[href^=" "],
a[rel*="nofollow"] {
  outline: 2px solid red !important;
  outline-offset: 3px !important;
}
```

The first three targeting declarations are meant to target images that has an alt attribute empty or undefined. First declaration – `img:not([alt])` – is a negation pseudo-class that will target every image element that do not have an alt attribute (that is for example `<img src="image.png" />`). Second one is an attribute selector that targets every image which has an alt attribute but without any content. Third declaration is meant to target images where the space character was left at the beginning in alt attribute. Having space at the beginning clearly is a sing of a mistake. It might happen when a developer leaves alt for filling it later.

Whenever any of those three are the case, the rule will apply on those images a red outline with some offset. It will be quite hard to miss that kind of image while browsing a website so people responsible for it will quickly notice this kind of a bug.

Of course the style that will be applied can be changed, however it's a good idea to leave `!important` after the rules so that no other code with higher specificity will overwrite those rules.

You can [read more](http://www.seoworkers.com/seo-articles-tutorials/alt-attribute.html) about the importance of the alt attribute in case of SEO.

The fourth and fifth targeted elements (that is `a[href=""]`, `a[href^=" "]`) are there for applying an outline on links (anchors) with no destination specified. Similarly to images, targeted anchors are those without anything in href or with a space character at the beginning. I think there's no point targeting `<a>`'s that don't have a href attribute, but feel free to add this in your code if you find it necessary.

The last rule – `a[rel*="nofollow"]` – is there to help locating links that has nofollow applied. If used wrong, the nofollow can impact your page SEO dramatically so it's better to now about that in advance with this lovely red outline. On the other hand you might want to check your website's link if they don't have a nofollow. Just change the rule `a[rel*="nofollow"]` into or add as another rule `a:not([rel*="nofollow"])`. This is useful if you don't wish to endorse other websites with your authority (PageRank) like for example I'll do right now with this Wikipedia [article about nofollow](http://en.wikipedia.org/wiki/Nofollow). But remember – don't be a bad guy or girl and use nofollow sparingly!

## Get a pure CSS alert if you forget `<title>` or `<description>`

The code that will address those issues is:

```css
head, title:empty, link, meta {display: block;}
title:empty:before {content: "You've left the <title> empty!"}
link:before {content: "You dont have a <title>!"}
title ~ link {display: none;}
meta[name="description"][content=""]:before,
meta[name="description"][content=" "]:before {
  content: "You've left the description empty!";
}
```

As you can see the code deals with elements you shouldn't normally find in your style sheet. But lets be awesome and do something normal people don't do!

First we need to `display: block` a `<head>`. It's important, since otherwise we won't get any effect at all.

Now we have a structural pseudo-class `:empty`. It's a nice feature that targets every element that has no children elements. Strings of text are also considered children elements, so with declaration `title:empty` we get an alert in case of leaving a `<title>` empty. The alert use `:before` pseudo-element because it can contain a content inside. Unfortunately we can't (as it was with images and anchors) target a title that has a space inside. It's due to the general rule of CSS that we can't style/target element depending on its children elements (in that case we can't do something like "target title if it has a space inside").

For the next part of the code we need some workaround as we want to get message if there is no `<title>` at all. As you can see, there is a rule for `link`. Why do we even need to do something with link when we're talking about `<title>`? In this case we would like to declare something like "target `<head>` if one of its children isn't `<title>`". But because of the general rule of CSS stated above we can't do that and that's why we will use `link`.

But before the explanation there's the important issue. If there is any `<link>` before the `<title>` you will get the message that you don't have a `<title>` even if it's not the case. Just make sure that your `<title>` is always before any `<link>` and you'll be cool.

OK, back to the `link`. All links get `display: block` and all links get the alert message about non-existent `<title>`. Now, the rule works if there's no `<title>`, but check the `title ~ link {display: none;}`. You see? Using general sibling combinator every `<link>` that is after `<title>` won't be displayed and the error message also will disappear. So in order to hide alerts we need a `<title>` on the website. Sweet!

And then the last one - `meta`. It's really only the combination of every other technique in this post so for short: the alert will appear if the element `meta` has an attribute `name="description"` and empty attribute `content` or it has a space inside. As for the test if `meta name="description"` exist, I don't have any idea how to find that out. We can't use that technique from `title ~ link` because meta description can be anywhere in a `<head>` and the possibility of faux error is too high.

The alerts about those issues can be styled. Try putting:

```css
width: 100%;
position: fixed;
background-color: #fff;
border-bottom: 2px solid red;
line-height: 30px;
text-align: center;
font-weight: bold;
```

into `head, title:empty … {display:block;}` and see how it works. The fixed position will make sure you won't miss the alert!

## CSS works for SEO

So with this small piece of code we can get a nice debugging tool and improve a website's SEO optimisation. I'm quite sure that we could do even more, but for now I can't think of any other idea. Anyone?

Do not forget to delete this code from a style sheet after you debug your website! You wouldn't like your visitors to see those alerts and outlines.

## Post Scriptum

This post was mainly about mistakes and errors. If you want some positiveness try out this code:

```css
head, title:not(:empty), meta {display: block;}
title:not(:empty) {font-size:0;}
title:not(:empty):before,
meta[name="description"]:not([content=""]):before {
  font-size: 15px; color: green;
}
meta[name="description"]:not([content=""]):before {
  content: "description: OK!"
}
title:not(:empty):before { content: "title: OK!"}
````

It will show a message "title/description: OK!" if both tags are in place and are used. Moreover you can combine both techniques to get either error message or valid message. Just place the code above below the whole code presented before.

And that's not all. You can do:

```css
head, title:not(:empty), meta {display: block;}
meta[name="description"]:not([content=""]):before {
  content: attr(content);
}
```

to display a site's description and title on every page! I don't find it too useful, though.

This technique is implemented in [Lots of Love for LESS](http://mateuszkocz.github.com/3l/) – a collection of mixins I've made. Find out more [about 3L](/3l-the-grat-collection-of-mixins-for-less-introduction).