
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				hackathon: {
					blue: '#2E3A59',
					purple: '#6C63FF',
					cyan: '#00D4FF',
					pink: '#FF619A',
					dark: '#1A1E2E',
					light: '#F6F8FA',
				}
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
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px 0px rgba(108, 99, 255, 0.2)'
					},
					'50%': {
						boxShadow: '0 0 15px 5px rgba(108, 99, 255, 0.4)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'grid-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%232E3A59' fill-opacity='0.05'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22.24H0v-1.41zM0 3.07l2.83-2.83 1.41 1.41L1.41 4.48H0V3.07zm20.76-1.41l2.83-2.83 1.41 1.41L22.17 3.07h-1.41V1.66zm20.76 35.93l2.83-2.83 1.41 1.41L42.17 40h-1.41v-1.41zM20.76 18.17l2.83-2.83 1.41 1.41L22.17 20.76h-1.41v-1.41zm20.76 0l2.83-2.83 1.41 1.41L42.17 20.76h-1.41v-1.41zM3.07 20.76l2.83-2.83 1.41 1.41-2.83 2.83H3.07v-1.41zm17.69 17.69l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zm20.76 0l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zM3.07 38.59l2.83-2.83 1.41 1.41-2.83 2.83H3.07v-1.41zm17.69-35.93l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V2.66zM23.83 1.41l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V1.41zm17.69 0l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V1.41z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
