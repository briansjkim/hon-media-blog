module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px'
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    fontSize: {
      'h2': '40px'
    },
  },
  variants: {},
  plugins: [],
  corePlugins: [
    'container',
    'transitionDuration'
  ]
}
