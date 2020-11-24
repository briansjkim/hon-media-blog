module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
              // Accepts all options defined by `gatsby-plugin-postcss` plugin.
            },
        },
        {
            resolve: `gatsby-plugin-emotion`,
            options: {
              // Accepts all options defined by `babel-plugin-emotion` plugin.
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: 'hon-media-blog',
              short_name: 'hon-media',
              start_url: '/',
              background_color: '#ffffff',
              theme_color: '#886FDB',
              display: 'standalone',
              icon: 'src/assets/images/HonLogo.png'
            }
        },
        {
          resolve: `gatsby-plugin-create-client-paths`,
          options: { prefixes: [`/blog/*`] },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-fontawesome-css`,
        {
          resolve: 'gatsby-plugin-preconnect',
          options: {
            domains: ['https://ksr-ugc.imgix.net', 'https://blog-hon-media.firebaseio.com'],
          },
        },
    ]
}