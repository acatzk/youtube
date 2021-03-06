module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      colors: {
        'red-youtube': '#ff0000'
      },
      width: {
        '18': '4.5rem',
        '60': '15rem',
        '128': '32rem',
      },
      maxWidth: {
        '128': '32rem'
      }
    },
  },
  variants: {
  },
  plugins: [
    require('tailwindcss-line-clamp')
  ],
}
