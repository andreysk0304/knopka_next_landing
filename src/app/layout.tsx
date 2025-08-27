import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ConfigProvider } from 'antd'
import ruRU from 'antd/locale/ru_RU'
import './globals.css'
import { THEME } from './theme'
import { ClientWrapper } from '../components/ClientWrapper'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
	title: 'Кнопка Заказы - Автоматизация бизнеса на маркетплейсах',
	description: 'Отслеживайте продажи, анализируйте тренды и принимайте обоснованные решения',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru">
			<body className={inter.className}>
				<ConfigProvider theme={THEME} locale={ruRU}>
					<ClientWrapper>{children}</ClientWrapper>
				</ConfigProvider>
			</body>
		</html>
	)
}
