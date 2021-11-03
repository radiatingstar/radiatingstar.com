---
title: The Great Idea for Social Media URLs – Thanks To Google
date: '2012-03-31T15:00:00.000Z'
tags: [seo]
---

Some people (me included) was waiting for shorter URL to our Google+ profiles as we can have them on Facebook. It seems we won't get them any time soon, though. At least not officially. We can use services like [gplus.to](http://gplus.to/), but there's a much better solution. Guys from Android Developers (the Google's official Android team) [introduced](https://plus.google.com/u/0/108967384991768947849/posts/fY47e78z1mP) a clever way to redirect people to their G+ profile without using those hard to remember digits – just type [developer.android.com/+](http://developer.android.com/+). Why is it so good that we should use it also with other social media services?

## The link juice (also called Page Rank)

The redirection from domain.com/+ to Google+ profile is easy to make and the same way works with other social media services. We just need to paste this code in .htaccess file:

```
Redirect 301 /+ https://plus.google.com/[numbers]
Redirect 301 /facebook https://facebook.com/[name]</pre>
```

But with some more thought it's not always the best way. Redirection 301 passes the so called _link juice_, in other words – the power of a website to be visible in search results. It's cool if you want your fanpage/profile to has a high position, but what if you value your domain name higher than social media profiles? Why not improve the SEO of your own domain while linking to SM? Just use Redirection 302.

```
Redirect 302 /+ https://plus.google.com/[numbers]
Redirect 302 /facebook https://facebook.com/[name]</pre>
```

I may not be an expert in SEO field, but as SEOmoz says, this kind of redirection [doesn't pass](http://www.seomoz.org/learn-seo/redirection) the juice so it's your own domain that will get the value from link from all around the web, and not Facebook or Google+. Sweet and neat!

## You don't advertise someone else's brand

If you advertise your Facebook fanpage or profile you need to use their URL with your brand name as an addition. It's always **facebook.com**/your-brand. Is your brand just an addition to Facebook, or is it Facebook that has to be just another way to communicate with your customers/fans? Clearly it's the second. That's why using **your-brand.com**/facebook (or maybe even your-brand.com/fanpage to drop this other brand absolutely) is a better idea in terms of your brand value. It's exactly the same with Google+. The social media profiles and fanpages should stay in our own domain and be clearly connected to our own brands.

## How long the third party services like gplus.to will work?

I don't know! It might work in ten yeas, but it also can stop working tomorrow. It's always their decision and we can't do anything about that. With Facebook's profiles' URLs it's quite obvious – they'll work as long as the service works. But G+ doesn't provide this feature so we had to use _unreliable_ third parties. That's why the idea of keeping the address in owned domain is better. It will work as long as the brand lives.

## Collect the data and measure your campaign

We don't know who and where links to our profiles or fanpages while using a facebook.com/brand address. Using some kind of redirection from our own domain makes it possible now.

Let's put ourselves in a marketer shoes. We couldn't find what campaign pulled more fans to our fanpages. Was it outdoor? Or was it this TV commercial? But now using the redirection we can just slightly modify the URL used in advertisements and get those data. We can also find places in the internet where people link to the fanpage the most and get some valuable insight or maybe even find a great, new communication channel. If it isn't lovely?

I'm going to change my social URLs right now. Thanks to Android team for this great idea!
