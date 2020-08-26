/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Andrés Fuenzalida`,
    description: `Portafolio de Andrés Fuenzalida. Desarrollador web.`,
    url: `https://a-fuenzalida.github.io/`, 
    author: `Andrés Fuenzalida`,
    image: ``,
    twitterUsername: `@an_fuenzalida`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`100`, `200`, `300`, `400`, `600`, `700`]
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`
  ],
}
