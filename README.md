# Radiating Star Website

[![Maintainability](https://api.codeclimate.com/v1/badges/6580a1828697d56fe712/maintainability)](https://codeclimate.com/github/radiatingstar/radiatingstar.com/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6580a1828697d56fe712/test_coverage)](https://codeclimate.com/github/radiatingstar/radiatingstar.com/test_coverage)

## Scripts

| Command | Description |
| --- | --- |
| develop | Fires up the live reloading dev server. Just what you need to develop the app. |
| lint | Make sure the code is consistent and free of any issues (opinionated). |
| lint:type-check | Validate there are no type errors in the code. |
| lint:code | Validate there are no code, accessibility, style and similar issues in the code. |
| format | Prettify the code according to the law. |
| build | Creates the production bundle of the app. Required to then `serve` the app. Used on Netlify. |
| serve | Fires up a local server with the built app. Take a look how the app will behave in production. |
| test |  Runs the unit tests.

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
