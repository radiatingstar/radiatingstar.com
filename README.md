# Radiating Star Website

## Tooling

### Netlify

Site is hosted on [Netlify](https://www.netlify.com/). It uses the [Gatsby Cache](https://github.com/jlengstorf/netlify-plugin-gatsby-cache#readme)
plugin and [Lighthouse](https://github.com/netlify-labs/netlify-plugin-lighthouse#readme) plugin.

Project is available here: https://app.netlify.com/sites/radiatingstarcom/overview

### Forestry.io

I have no idea why I installed this tool long time ago. Will have to research sometime in the future. 🤷‍♂️

## Stuff to remember

### Redirects

Initially, the blog was served from the root domain. Old posts had to be redirected to the new `/blog` path, hence
the hell lot of redirects in the `netlify.toml` file.
