module.exports = {
  siteMetadata: {
    title: 'Hack the Fog'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Hack the Fog',
        short_name: 'hackthefog',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#5eade0',
        display: 'minimal-ui',
        icon: 'static/icon.png'
      }
    },
    'gatsby-plugin-styled-components'
  ]
}
