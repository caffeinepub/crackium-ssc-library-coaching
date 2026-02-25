import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            fontFamily: {
                heading: ['"Playfair Display"', 'Georgia', 'serif'],
                body: ['"DM Sans"', 'system-ui', 'sans-serif'],
            },
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'oklch(var(--sidebar))',
                    foreground: 'oklch(var(--sidebar-foreground))',
                    primary: 'oklch(var(--sidebar-primary))',
                    'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
                    accent: 'oklch(var(--sidebar-accent))',
                    'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
                    border: 'oklch(var(--sidebar-border))',
                    ring: 'oklch(var(--sidebar-ring))'
                },
                'emerald-brand': {
                    DEFAULT: 'oklch(0.55 0.17 162)',
                    light: 'oklch(0.65 0.16 162)',
                    dark: 'oklch(0.40 0.15 162)',
                    deeper: 'oklch(0.28 0.12 162)',
                    50: 'oklch(0.96 0.03 162)',
                    100: 'oklch(0.90 0.06 162)',
                    200: 'oklch(0.80 0.10 162)',
                    300: 'oklch(0.70 0.13 162)',
                    400: 'oklch(0.62 0.15 162)',
                    500: 'oklch(0.55 0.17 162)',
                    600: 'oklch(0.46 0.16 162)',
                    700: 'oklch(0.38 0.14 162)',
                    800: 'oklch(0.30 0.12 162)',
                    900: 'oklch(0.22 0.09 162)',
                },
                'gold-brand': {
                    DEFAULT: 'oklch(0.78 0.16 85)',
                    light: 'oklch(0.86 0.14 88)',
                    dark: 'oklch(0.68 0.18 80)',
                    50: 'oklch(0.97 0.04 88)',
                    100: 'oklch(0.93 0.08 87)',
                    200: 'oklch(0.88 0.12 86)',
                    300: 'oklch(0.84 0.14 86)',
                    400: 'oklch(0.80 0.15 85)',
                    500: 'oklch(0.78 0.16 85)',
                    600: 'oklch(0.72 0.17 83)',
                    700: 'oklch(0.65 0.18 80)',
                },
                'charcoal-brand': {
                    DEFAULT: 'oklch(0.14 0.01 240)',
                    light: 'oklch(0.20 0.015 240)',
                    mid: 'oklch(0.26 0.02 240)',
                    50: 'oklch(0.96 0.005 240)',
                    100: 'oklch(0.90 0.008 240)',
                    200: 'oklch(0.75 0.01 240)',
                    300: 'oklch(0.60 0.012 240)',
                    400: 'oklch(0.45 0.015 240)',
                    500: 'oklch(0.35 0.018 240)',
                    600: 'oklch(0.26 0.02 240)',
                    700: 'oklch(0.20 0.015 240)',
                    800: 'oklch(0.16 0.012 240)',
                    900: 'oklch(0.12 0.01 240)',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                '2xl': '1rem',
                '3xl': '1.5rem',
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                gold: '0 4px 24px 0 oklch(0.78 0.16 85 / 0.30)',
                'gold-lg': '0 8px 40px 0 oklch(0.78 0.16 85 / 0.40)',
                emerald: '0 4px 24px 0 oklch(0.55 0.17 162 / 0.35)',
                'emerald-lg': '0 8px 40px 0 oklch(0.55 0.17 162 / 0.45)',
                charcoal: '0 4px 24px 0 oklch(0.12 0.01 240 / 0.6)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'shimmer': {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
                'pulse-gold': {
                    '0%, 100%': { boxShadow: '0 0 0 0 oklch(0.78 0.16 85 / 0.5)' },
                    '50%': { boxShadow: '0 0 0 14px oklch(0.78 0.16 85 / 0)' },
                },
                'slide-up': {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'shimmer': 'shimmer 2.5s linear infinite',
                'float': 'float 3s ease-in-out infinite',
                'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
                'slide-up': 'slide-up 0.6s ease-out forwards',
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
