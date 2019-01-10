---
title: Add your own LESS namespace when mixins collections have name conflicts
date: '2012-12-07T13:00:00.000Z'
---

If you're using [LESS](http://lesscss.org) you're probably also using some mixins collections (like [Lots of Love for LESS](http://mateuszkocz.github.com/3l) for example). It's nice as long, as your own mixins' names don't collide with names in a chosen mixins collection. This collision will make LESS unable to parse your stylesheet. The same may happen when you're using two or more different collections. Most likely they use the same names, like .gradient() or .box-shadow(). What you can do about that?

Less already has a solution called the [namespaces](http://lesscss.org//#-namespaces). You can put your mixins in a bundle and then use them calling the name of your bundle first. It's done like that:

```less
#bundle-name {
  .mixin-one { /* properties and values */ }
  .mixin-two { /* properties and values */ }
}

.some-class {
  #bundle-name > .mixin-one
}
```

This is a simple solution when you're writing your own mixins. But what if you're using a collection you downloaded? Not all of them put their mixins in a bundle by default. Actually most of them probably don't (I don't do it in 3L). You don't need to replace their code, though, to make the namespace. Just use the code below to import the mixins collection and put it in a bundle of your choice.

```less
#bunde { @import 'mixins-collection' }
```

Now you can just refer to this bundle and mixins' names in your CSS/LESS file and you don't need to care about conflicts in names.