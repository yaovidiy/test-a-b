import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    colors: {
      primary: '#FF8D24',
      green: '#00CA14',
      paypal: '#FEC538',
      'paypal-hover': '#FFDA80',
      disabled: '#D2D2D2',
      black: '#000000',
      white: '#ffffff',
      red: '#FF0000',
      'light-grey': '#CDCDCD',
      grey: '#D2D5DA',
      'dark-grey': '#6C727F',
      'grey-firm': '#121826',
    },
    extend: {
      fontSize: {
        'heading-1': ['48px', {
          lineHeight: '57.6px',
          fontWeight: 800,
        }],
        'heading-2': ['32px', {
          lineHeight: '38.4px',
          fontWeight: 800,
        }],
        'heading-3': ['24px', {
          lineHeight: '28.8px',
          fontWeight: 600,
        }],
        'caption-bold': ['12px', {
          lineHeight: '14.62px',
          fontWeight: 700,
        }],
        'body-bold': ['16px', {
          lineHeight: '19.2px',
          fontWeight: 700
        }],
        caption: ['12px', {
          lineHeight: '14.62px',
          fontWeight: 400,
        }],
        body: ['16px', {
          lineHeight: '19.2px',
          fontWeight: 400,
        }]
      }
    }
  }
}
