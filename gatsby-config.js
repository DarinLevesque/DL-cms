module.exports = {
  siteMetadata: {
    title: "Severus Snape",
    titleTemplate: "%s · The Real Hero",
    description: "Digital resume, portfolio and blog of Darin Levesque",
    url: "https://www.darinlevesque.com", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@Darinlevesque"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    `gatsby-plugin-purgecss`, {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    "gatsby-plugin-stripe-checkout", {
      resolve: `gatsby-plugin-stripe`,
      options: {
        async: true
      }
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sharp', {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-smartypants`, {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of the content container
              // as this plugin uses this as the base for generating different widths of each
              // image.
              maxWidth: 590
            }
          }
        ]
      }
    }, {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Darin Levesque`,
        short_name: `Darin`,
        start_url: `/`,
        background_color: `#fcfcfc`,
        theme_color: `#09c9ef`,
        display: `minimal-ui`,
        icon: `src/img/icon.png`, // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`, {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ]
}
