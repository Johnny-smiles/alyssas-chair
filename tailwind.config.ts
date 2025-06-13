// tailwind.config.ts
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.{vue,js,ts}',
        './pages/**/*.{vue,js,ts}',
        './nuxt.config.{js,ts}',
        './assets/**/*.{css,scss}'
    ],
    theme: {
        extend: {
            colors: {
                colors: {
                    'stone-rose':   '#DDD1B2',
                    'honey-lace':   '#C58978',
                    'autumn-cedar': '#AA7049',
                    'blush':        '#CC9F61',
                    'honey':        '#F6D3C5',
                    'apricot':      '#E58866',
                    'fire-moss':    '#F16648',
                    'breeze':       '#81732E',
                    'lilac':        '#ADC2D8',
                    'sky':          '#E0D9EC',
                },            },
            fontFamily: {
                heading: ['Gotham Pro', 'Montserrat', 'sans-serif'],
                body:    ['Baskerville', 'serif'],
            }
        }
    },
    plugins: [
        plugin(({ addBase, theme }) => {
            addBase({
                html: {
                    fontFamily: theme('fontFamily.body'),
                    color:      theme('colors.gray.800'),
                    background: theme('colors.sky')
                },
                'h1,h2,h3,h4,h5,h6': {
                    fontFamily: theme('fontFamily.heading'),
                    color:      theme('colors.gray.900')
                },
                a: {
                    color:          theme('colors.stone-rose'),
                    textDecoration: 'underline'
                },
                'a:hover': {
                    color: theme('colors.honey-lace')
                }
            })
        })
    ]
}

export default config
