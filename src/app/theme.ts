import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const THEME = {
	token: {
		colorPrimary: '#10B981',
		colorSuccess: '#10B981',
		colorInfo: '#3B82F6',
		colorWarning: '#F59E0B',
		colorError: '#EF4444',
		borderRadius: 8,
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