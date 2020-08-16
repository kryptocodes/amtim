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
        theme_color: `#25CCF7`,
        display: `fullscreen`,
      },
    },
    'gatsby-plugin-offline'
  ],
}