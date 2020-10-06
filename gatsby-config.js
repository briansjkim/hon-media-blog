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
    ]
}