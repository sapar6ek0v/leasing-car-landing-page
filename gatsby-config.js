/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [`gatsby-plugin-styled-components`, `gatsby-plugin-react-helmet`],
  siteMetadata: {
    title: `Leasing Car`,
    description: `Авто в лизинг для физических лиц`,
    twitterUsername: ``,
    image: `/logo.png`,
    siteUrl: `https://leasing-car.vercel.app/`,
  },
};
