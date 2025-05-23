import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      screens: {
        '3xl': '2304px',
      },
      keyframes: {
        marquee: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(calc(-100% - var(--gap)))',
          },
        },
        'marquee-vertical': {
          from: {
            transform: 'translateY(0)',
          },
          to: {
            transform: 'translateY(calc(-100% - var(--gap)))',
          },
        },
      },
      animation: {
        marquee: 'marquee var(--duration) infinite linear',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.accent'),
            a: {
              color: theme('colors.secondary'),
              '&:hover': {
                color: theme('colors.primary'),
              },
            },
            h1: {
              color: theme('colors.accent'),
            },
            h2: {
              color: theme('colors.accent'),
            },
            h3: {
              color: theme('colors.accent'),
            },
            strong: {
              color: theme('colors.accent'),
            },
            blockquote: {
              color: theme('colors.accent'),
              borderLeftColor: theme('colors.secondary'),
            },
            code: {
              color: theme('colors.secondary'),
              backgroundColor: theme('colors.background'),
            },
            pre: {
              backgroundColor: theme('colors.background'),
              color: theme('colors.accent'),
            },
            'ul > li::marker': {
              color: theme('colors.secondary'), // 👈 your bullet color
            },
            'ol > li::marker': {
              color: theme('colors.secondary'),
            },
          },
        },
        sm: {
          css: {
            color: theme('colors.accent'),
            a: {
              color: theme('colors.secondary'),
              '&:hover': {
                color: theme('colors.primary'),
              },
            },
            h1: {
              color: theme('colors.accent'),
            },
            h2: {
              color: theme('colors.accent'),
            },
            h3: {
              color: theme('colors.accent'),
            },
            strong: {
              color: theme('colors.accent'),
            },
            blockquote: {
              color: theme('colors.accent'),
              borderLeftColor: theme('colors.secondary'),
            },
            code: {
              color: theme('colors.secondary'),
              backgroundColor: theme('colors.background'),
            },
            pre: {
              backgroundColor: theme('colors.background'),
              color: theme('colors.accent'),
            },
            'ul > li::marker': {
              color: theme('colors.secondary'), // 👈 your bullet color
            },
            'ol > li::marker': {
              color: theme('colors.secondary'),
            },
          },
        },
        md: {
          css: {
            color: theme('colors.accent'),
            a: {
              color: theme('colors.secondary'),
              '&:hover': {
                color: theme('colors.primary'),
              },
            },
            h1: {
              color: theme('colors.accent'),
            },
            h2: {
              color: theme('colors.accent'),
            },
            h3: {
              color: theme('colors.accent'),
            },
            strong: {
              color: theme('colors.accent'),
            },
            blockquote: {
              color: theme('colors.accent'),
              borderLeftColor: theme('colors.secondary'),
            },
            code: {
              color: theme('colors.secondary'),
              backgroundColor: theme('colors.background'),
            },
            pre: {
              backgroundColor: theme('colors.background'),
              color: theme('colors.accent'),
            },
            'ul > li::marker': {
              color: theme('colors.secondary'), // 👈 your bullet color
            },
            'ol > li::marker': {
              color: theme('colors.secondary'),
            },
          },
        },
        lg: {
          css: {
            color: theme('colors.accent'),
            a: {
              color: theme('colors.secondary'),
              '&:hover': {
                color: theme('colors.primary'),
              },
            },
            h1: {
              color: theme('colors.accent'),
            },
            h2: {
              color: theme('colors.accent'),
            },
            h3: {
              color: theme('colors.accent'),
            },
            strong: {
              color: theme('colors.accent'),
            },
            blockquote: {
              color: theme('colors.accent'),
              borderLeftColor: theme('colors.secondary'),
            },
            code: {
              color: theme('colors.secondary'),
              backgroundColor: theme('colors.background'),
            },
            pre: {
              backgroundColor: theme('colors.background'),
              color: theme('colors.accent'),
            },
            'ul > li::marker': {
              color: theme('colors.secondary'), // 👈 your bullet color
            },
            'ol > li::marker': {
              color: theme('colors.secondary'),
            },
          },
        },
        xl: {
          css: {
            color: theme('colors.accent'),
            a: {
              color: theme('colors.secondary'),
              '&:hover': {
                color: theme('colors.primary'),
              },
            },
            h1: {
              color: theme('colors.accent'),
            },
            h2: {
              color: theme('colors.accent'),
            },
            h3: {
              color: theme('colors.accent'),
            },
            strong: {
              color: theme('colors.accent'),
            },
            blockquote: {
              color: theme('colors.accent'),
              borderLeftColor: theme('colors.secondary'),
            },
            code: {
              color: theme('colors.secondary'),
              backgroundColor: theme('colors.background'),
            },
            pre: {
              backgroundColor: theme('colors.background'),
              color: theme('colors.accent'),
            },
            'ul > li::marker': {
              color: theme('colors.secondary'), // 👈 your bullet color
            },
            'ol > li::marker': {
              color: theme('colors.secondary'),
            },
          },
        },
        '2xl': {
          css: {
            color: theme('colors.accent'),
            a: {
              color: theme('colors.secondary'),
              '&:hover': {
                color: theme('colors.primary'),
              },
            },
            h1: {
              color: theme('colors.accent'),
            },
            h2: {
              color: theme('colors.accent'),
            },
            h3: {
              color: theme('colors.accent'),
            },
            strong: {
              color: theme('colors.accent'),
            },
            blockquote: {
              color: theme('colors.accent'),
              borderLeftColor: theme('colors.secondary'),
            },
            code: {
              color: theme('colors.secondary'),
              backgroundColor: theme('colors.background'),
            },
            pre: {
              backgroundColor: theme('colors.background'),
              color: theme('colors.accent'),
            },
            'ul > li::marker': {
              color: theme('colors.secondary'), // 👈 your bullet color
            },
            'ol > li::marker': {
              color: theme('colors.secondary'),
            },
          },
        },
        '3xl': {
          css: {
            color: theme('colors.accent'),
            a: {
              color: theme('colors.secondary'),
              '&:hover': {
                color: theme('colors.primary'),
              },
            },
            h1: {
              color: theme('colors.accent'),
            },
            h2: {
              color: theme('colors.accent'),
            },
            h3: {
              color: theme('colors.accent'),
            },
            strong: {
              color: theme('colors.accent'),
            },
            blockquote: {
              color: theme('colors.accent'),
              borderLeftColor: theme('colors.secondary'),
            },
            code: {
              color: theme('colors.secondary'),
              backgroundColor: theme('colors.background'),
            },
            pre: {
              backgroundColor: theme('colors.background'),
              color: theme('colors.accent'),
            },
            'ul > li::marker': {
              color: theme('colors.secondary'), // 👈 your bullet color
            },
            'ol > li::marker': {
              color: theme('colors.secondary'),
            },
          },
        },
      }),
    },
  },
  plugins: [tailwindcssAnimate, typography],
}
