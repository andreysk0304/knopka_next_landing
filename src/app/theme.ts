import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const COLORS = {
	primary: '#3ec15cff',
	primaryActive: '#2e9546',
	primaryHover: '#6dcf84',
}

export const THEME = {
	token: {
		colorPrimary: COLORS.primary,
		colorSuccess:  COLORS.primary,
		fontFamily: inter.style.fontFamily,
	},
	components: {
		Card: {
			borderRadiusLG: 12,
		},
		Button: {
			borderRadius: 8,
		},
	},
}