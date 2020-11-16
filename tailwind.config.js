module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.js',
    './src/**/**/*.js'
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px'
      },
      colors: {
        button: '#0000ff',
        buttonHover: '#0000d1'
      }
    },
  },
  variants: {},
  plugins: [],
  corePlugins: [
    'container',
    'transitionDuration'
  ]
}
