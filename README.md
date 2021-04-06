# Radiating Star Website

[![Maintainability](https://api.codeclimate.com/v1/badges/6580a1828697d56fe712/maintainability)](https://codeclimate.com/github/radiatingstar/radiatingstar.com/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6580a1828697d56fe712/test_coverage)](https://codeclimate.com/github/radiatingstar/radiatingstar.com/test_coverage)
[![codecov](https://codecov.io/gh/radiatingstar/radiatingstar.com/branch/master/graph/badge.svg?token=yOUq7lvbnS)](https://codecov.io/gh/radiatingstar/radiatingstar.com)
[![Netlify Status](https://api.netlify.com/api/v1/badges/630d6ad6-236a-4ed5-a2a7-69bcc3bd6dba/deploy-status)](https://app.netlify.com/sites/radiatingstarcom/deploys)

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

### TypeScript definitions codegen

The app's using [`gatsby-plugin-graphql-codegen`](https://github.com/d4rekanguok/gatsby-typescript/blob/master/packages/gatsby-plugin-graphql-codegen/readme.md).
The types' generation takes too much time during development, so it's only available when running the app with the `CODEGEN` env
set to `true`.

### Pages

The pages components in the pages' directory are meant to query the required data and pass
it to the UI component. That's why they're only re-exporting those components. Don't put anything else in there.
