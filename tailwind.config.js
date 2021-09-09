module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        custom: {
          DEFAULT: '#7c5dfa',
          secondary: '#9277ff',
          grey: '#979797',
          'dark-grey': '#373B53',
          muted: '#888EB0',
          accent: '#DFE3FA',
        },
      },
      // textColor: {
      //   skin: {
      //     base: 'var(--color-text)',
      //     muted: 'var(--color-text-muted)',
      //     accent: 'var(--color-text-accent)',
      //   },
      // },
      // backgroundColor: {
      //   skin: {
      //     'btn-base': 'var(--color-button)',
      //     'btn-base-hover': 'var(--color-button-hover)',
      //     'btn-3': 'var(--color-button-3)',
      //     'btn-3': 'var(--color-button-4)',
      //     'btn-3': 'var(--color-button-5)',
      //     'btn-3': 'var(--color-button-6)',
      //     'btn-3-hover': 'var(--color-button-3-hover)',
      //     'btn-3-hover': 'var(--color-button-4-hover)',
      //     'btn-3-hover': 'var(--color-button-5-hover)',
      //     'btn-3-hover': 'var(--color-button-6-hover)',
      //   },
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
