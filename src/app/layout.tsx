import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ConfigProvider } from 'antd'
import ruRU from 'antd/locale/ru_RU'
import './index.css'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
	title: 'Кнопка Заказы - Автоматизация бизнеса на маркетплейсах',
	description: 'Отслеживайте продажи, анализируйте тренды и принимайте обоснованные решения',
}

const theme = {
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru">
			<body className={inter.className}>
				<ConfigProvider theme={theme} locale={ruRU}>
					{children}
				</ConfigProvider>
			</body>
		</html>
	)
}
