import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
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
				sans: ["'Inter'", 'sans-serif'],
				display: ["'Playfair Display'", 'serif'],
			},
			colors: {
				primary: {
					DEFAULT: '#2563eb',
					light: '#93c5fd',
					dark: '#1e40af',
					foreground: '#ffffff'
				},
				secondary: {
					DEFAULT: '#93c5fd',
					light: '#bae6fd',
					dark: '#60a5fa',
					foreground: '#1e293b'
				},
				background: '#ffffff',
				foreground: '#1e293b',
				muted: {
					DEFAULT: '#f8fafc',
					foreground: '#64748b'
				},
				neutral: {
					DEFAULT: '#e2e8f0',
					light: '#f8fafc',
					dark: '#1e293b'
				},
				border: '#e2e8f0',
				input: '#e2e8f0',
				ring: '#2563eb'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-in': 'slide-in 0.5s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
