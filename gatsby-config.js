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
        {
          resolve: `gatsby-plugin-google-gtag`,
          options: {
            // You can add multiple tracking ids and a pageview event will be fired for all of them.
            trackingIds: [
              "G-6JFH4ZDE1E", // Google Analytics / GA
              // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
              // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
            ],
            // This object gets passed directly to the gtag config command
            // This config will be shared across all trackingIds
            // gtagConfig: {
            //   optimize_id: "OPT_CONTAINER_ID",
            //   anonymize_ip: true,
            //   cookie_expires: 0,
            // },
            // This object is used for configuration specific to this plugin
            // pluginConfig: {
            //   // Puts tracking script in the head instead of the body
            //   head: false,
            //   // Setting this parameter is also optional
            //   respectDNT: true,
            //   // Avoids sending pageview hits from custom paths
            //   exclude: ["/preview/**", "/do-not-track/me/too/"],
            // },
          },
        },
    ]
}