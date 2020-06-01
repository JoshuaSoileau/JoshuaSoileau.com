module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Joshua Soileau`,
    author: `Joshua Soileau`,
    description: `My hidey hole in the internet where I put my things.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/joshua_soileau`,
      },
      {
        name: `github`,
        url: `https://github.com/JoshuaSoileau`,
      },
      {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
          fonts: [
            {
              family: `Inter`,
              variants: [`700`],
            },
            {
              family: `Open Sans`,
              variants: [`400`, `400i`, `700`],
            },
          ],
        },
      },
    ],
  },
}
