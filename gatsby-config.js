// in gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AmTim`,
        short_name: `amTim`,
        start_url: `/`,
        background_color: `#3498DB`,
        theme_color: `#3498DB`,
        display: `fullscreen`,
        icon: `src/images/icon.png`
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-react-helmet`
  ],
}