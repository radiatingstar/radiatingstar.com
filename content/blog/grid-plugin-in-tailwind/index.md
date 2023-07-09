---
title: Grid Auto-fill Plugin in Tailwind
date: '2023-07-09T13:00:00.000Z'
tags: [tailwind]
---

In its arsenal of utility classes, Tailwind keeps a set of [predefined classes](https://tailwindcss.com/docs/grid-template-columns) to control the number of columns in a grid. We can use them to create a grid with a fixed number of columns with a fluid width of the items. However, if what we want is to have a grid of fixed-width items with a varying count of columns, we can't rely on the defaults Tailwind provides. We'll need to extend the basic functionality with a class tailored to our needs.

There are two ways of doing that: we can either extend the default theme by adding new values for our use case, or we can write a plugin handling what we want. Let's start with the simpler one: the theme extension.

## Extending the theme

Tailwind's default value for the grid template columns is defined in the `gridTemplateColumns` section of the `theme` object (or its extension) in the `tailwind.config.js` file. Adding a new value is as simple as defining a property with a value in the template columns object.

Let's say we want to have a cell with `12rem` of width. To make sure other values won't disappear, we're going to extend the theme just like that:

```js
// tailwind.config.js
module.exports = {
  /* ... */
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, 12rem)',
      },
    }
  },
};
```

Now simply add the `grid-cols-auto-fill` class to the grid container, and we're good to go. We can still make it a bit better, though.

Notice the `12rem` is a value coming from the `spacing` section of the theme (size `48`). Instead of hardcoding it, we can access it from the theme to make it more flexible. For that, we need to use a different way of defining the value, using a function instead of a string.

The value function gets some arguments from Tailwind itself, and the one we're interested in is the `theme` that will allow us to access properties defined in the theme configuration.

```js
// tailwind.config.js
module.exports = {
  /* ... */
  theme: {
    extend: {
      gridTemplateColumns: ({ theme }) => ({
        'auto-fill': `repeat(auto-fill, ${theme('spacing.48')})`,
      }),
    }
  },
};
```

While this might not give too much in terms of maintainability (after all, who's changing the default spacing, right?), we can benefit much more if our theme includes some custom values we would want to use. For example, if we define card sizes, we can access them in the same way as any other value in the theme.

```js
// tailwind.config.js
module.exports = {
  /* ... */
  theme: {
    cardSize: {
      sm: "10rem",
      md: "20rem",
      lg: "30rem",
    },
    extend: {
      gridTemplateColumns: ({ theme }) => ({
        'auto-fill': `repeat(auto-fill, ${theme('cardSize.sm')})`,
      }),
    }
  },
};
```

While it might fill some requirements, that piece of code shows how limited this type of approach is. In case we would want to support other card sizes, we would have to add all other values manually. That's where the plugin approach might come in handy.

## Writing a plugin

Plugins in Tailwind allow us to create dynamic classes from the plugin's code and use it later in the project (or ship it as an external package for other people needint the same functionality). They're declared in the `plugins` section of the config and take the shape of a function provided with arguments used to modify and enhance the default Tailwind's functionality.

In our case, we want to add a utility class letting us pass whatever sizing value we want to create a fixed-width cell repeated for as much as the screen size allows. So let's build it.

```js
// tailwind.config.js
import plugin from "tailwindcss/plugin";

module.exports = {
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "grid-cols-auto-fill": (value) => ({
            "grid-template-columns": `repeat(auto-fill, ${value})`,
          }),
        },
        {
          values: theme("spacing"),
        }
      );
    }),
  ],
}
```

While the code is straightforward, some explanation is needed.

The `matchUtilities` function is a way of adding utility classes to the default set that will be taking additional value as an "argument" (like `w-12` for width with value 12). The `values` configuration creates a lineup of potential values we'll be able to use in the outcome class name.

With all set up properly, we are now able to start using the new class in our grid containers.

```html
<div class="grid grid-cols-auto-fill-12">
  <!-- ... -->
</div>
```

---

References:
- [Tailwind CSS - Customizing the default theme](https://tailwindcss.com/docs/theme#customizing-the-default-theme)
- [Tailwind CSS - Writing Plugins](https://tailwindcss.com/docs/plugins)
