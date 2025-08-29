import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ConfigProvider } from 'antd'
import ruRU from 'antd/locale/ru_RU'
import './globals.css'
import { YandexMetric } from '@/components/YandexMetric'
import { THEME } from './theme'
import { ClientWrapper } from '../components/ClientWrapper'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
	title: 'Кнопка Заказы - Автоматизация бизнеса на маркетплейсах',
	description: 'Отслеживайте продажи, анализируйте тренды и принимайте обоснованные решения',
	other: {
		'yandex-verification': 'fafcf84179d9ab7c',
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru">
			<body className={inter.className}>
				<YandexMetric />
				<ConfigProvider theme={THEME} locale={ruRU}>
					<ClientWrapper>{children}</ClientWrapper>
				</ConfigProvider>
			</body>
		</html>
	)
}

