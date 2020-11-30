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
          resolve: `gatsby-plugin-google-analytics`,
          options: {
            // The property ID; the tracking code won't be generated without it
            trackingId: "G-6JFH4ZDE1E",
            // Defines where to place the tracking script - `true` in the head and `false` in the body
            head: true,
            // Setting this parameter is optional
            anonymize: true,
            // Setting this parameter is also optional
            respectDNT: true,
            // Avoids sending pageview hits from custom paths
            exclude: ["/preview/**", "/do-not-track/me/too/"],
            // Delays sending pageview hits on route update (in milliseconds)
            pageTransitionDelay: 0,
            // Enables Google Optimize using your container Id
            // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
            // Enables Google Optimize Experiment ID
            // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
            // Set Variation ID. 0 for original 1,2,3....
            // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
            // Defers execution of google analytics script after page load
            defer: false,
          },
        }
    ]
}