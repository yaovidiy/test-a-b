import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: '#FF8D24',
        green: '#00CA14',
        paypal: '#FEC538',
        'paypal-hover': '#FFDA80',
        disabled: '#D2D2D2',
      }
    }
  }
}
