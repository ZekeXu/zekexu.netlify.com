module.exports = {
  siteMetadata: {
    title: 'ZekeXu Blogs',
    author: 'ZekeXu',
    description: "ZekeXu's blogs about development.",
    siteUrl: 'https://zekexu.netlify.com/'
  },
  pathPrefix: `/zekexu.netlify.com`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-plugin-sharp`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590
            }
          },
          `gatsby-remark-prismjs`, // code highlight
          'gatsby-remark-copy-linked-files',
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        precision: 8
      }
    }
  ]
};
