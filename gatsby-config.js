/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({ path: ".env" })

const faviconConfig = {
  resolve: "gatsby-plugin-favicon",
  options: {
    logo: "./src/assets/images/favicon.png",
  },
}

const fontLoaderConfig = {
  resolve: "gatsby-plugin-web-font-loader",
  options: {
    google: {
      families: ["Quicksand", "Open Sans"],
    },
  },
}

module.exports = {
  plugins: [
    fontLoaderConfig,
    faviconConfig,
    "gatsby-plugin-react-helmet",
  ],
}
