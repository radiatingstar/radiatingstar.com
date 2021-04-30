/* eslint-disable unicorn/prefer-module */
module.exports = {
  flags: {
    FAST_DEV: true,
  },
  siteMetadata: {
    title: `Radiating Star`,
    author: `Mateusz Kocz`,
    description: `Every website is a star that radiates awesomeness`,
    siteUrl: `https://radiatingstar.com/`,
    social: {
      twitter: `mateuszkocz`,
      github: `mateuszkocz`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // eslint-disable-next-line unicorn/prefer-module
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-30216970-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Radiating Star`,
        short_name: `Radiating Star`,
        start_url: `/`,
        background_color: `#ffa500`,
        theme_color: `#ffa500`,
        display: `minimal-ui`,
        icon: `content/assets/star-logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        codegen: Boolean(process.env.CODEGEN),
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
