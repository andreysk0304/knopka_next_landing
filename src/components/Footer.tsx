'use client'

import { Layout, Row, Col, Typography, Space, Button } from 'antd'
import {
	BarChartOutlined,
	MailOutlined,
	PhoneOutlined,
	MessageOutlined,
	FacebookOutlined,
	TwitterOutlined,
	InstagramOutlined,
} from '@ant-design/icons'

const { Footer: AntFooter } = Layout
const { Title, Text, Link } = Typography

const Footer = () => {
	return (
		<AntFooter
			style={{
				background: '#1f2937',
				color: 'white',
				padding: '48px 24px 24px',
			}}
		>
			<div style={{ maxWidth: 1200, margin: '0 auto' }}>
				<Row gutter={[32, 32]}>
					{/* Logo and Description */}
					<Col xs={24} md={12} lg={8}>
						<Space direction="vertical" size="middle">
							<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
								<div
									style={{
										width: 32,
										height: 32,
										background: '#10B981',
										borderRadius: 8,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<BarChartOutlined style={{ color: 'white', fontSize: 18 }} />
								</div>
								<Title level={3} style={{ color: 'white', margin: 0 }}>
									MarketPro
								</Title>
							</div>

							<Text style={{ color: '#9ca3af', lineHeight: 1.6 }}>
								Ваш надежный помощник в автоматизации и оцифровке бизнеса на
								маркетплейсах. Практические советы, инструменты и стратегии для
								роста продаж.
							</Text>

							<Space size="middle">
								<Button
									type="text"
									icon={<FacebookOutlined />}
									style={{
										color: '#9ca3af',
										background: '#374151',
										borderRadius: 8,
									}}
								/>
								<Button
									type="text"
									icon={<TwitterOutlined />}
									style={{
										color: '#9ca3af',
										background: '#374151',
										borderRadius: 8,
									}}
								/>
								<Button
									type="text"
									icon={<InstagramOutlined />}
									style={{
										color: '#9ca3af',
										background: '#374151',
										borderRadius: 8,
									}}
								/>
								<Button
									type="text"
									icon={<MessageOutlined />}
									style={{
										color: '#9ca3af',
										background: '#374151',
										borderRadius: 8,
									}}
								/>
							</Space>
						</Space>
					</Col>

					{/* Navigation */}
					<Col xs={24} md={6} lg={4}>
						<Title level={4} style={{ color: 'white', marginBottom: 16 }}>
							Навигация
						</Title>
						<Space direction="vertical" size="small">
							<Link href="##" style={{ color: '#9ca3af' }}>
								Главная
							</Link>
							<Link href="##" style={{ color: '#9ca3af' }}>
								Блог
							</Link>
							<Link href="##" style={{ color: '#9ca3af' }}>
								Аналитика
							</Link>
							<Link href="##" style={{ color: '#9ca3af' }}>
								Автоматизация
							</Link>
							<Link href="##" style={{ color: '#9ca3af' }}>
								Тарифы
							</Link>
						</Space>
					</Col>

					{/* Contact */}
					<Col xs={24} md={6} lg={6}>
						<Title level={4} style={{ color: 'white', marginBottom: 16 }}>
							Контакты
						</Title>
						<Space direction="vertical" size="middle">
							<Space>
								<MailOutlined style={{ color: '#10B981' }} />
								<Link href="mailto:info@marketpro.ru" style={{ color: '#9ca3af' }}>
									info@marketpro.ru
								</Link>
							</Space>
							<Space>
								<PhoneOutlined style={{ color: '#10B981' }} />
								<Link href="tel:+78001234567" style={{ color: '#9ca3af' }}>
									+7 (800) 123-45-67
								</Link>
							</Space>
							<Space>
								<MessageOutlined style={{ color: '#10B981' }} />
								<Link href="##" style={{ color: '#9ca3af' }}>
									Telegram-бот
								</Link>
							</Space>

							<Button
								type="primary"
								size="large"
								style={{
									marginTop: 16,
									borderRadius: 8,
								}}
							>
								Попробовать бесплатно
							</Button>
						</Space>
					</Col>
				</Row>

				{/* Bottom Section */}
				<div
					style={{
						borderTop: '1px solid #374151',
						marginTop: 48,
						paddingTop: 24,
					}}
				>
					<Row justify="space-between" align="middle">
						<Col xs={24} md={12}>
							<Text style={{ color: '#9ca3af' }}>
								© 2025 MarketPro. Все права защищены.
							</Text>
						</Col>
						<Col xs={24} md={12}>
							<Space
								size="large"
								style={{
									justifyContent: 'flex-end',
									width: '100%',
									// marginTop: { xs: 16, md: 0 },
								}}
							>
								<Link href="##" style={{ color: '#9ca3af', fontSize: 12 }}>
									Политика конфиденциальности
								</Link>
								<Link href="##" style={{ color: '#9ca3af', fontSize: 12 }}>
									Пользовательское соглашение
								</Link>
								<Link href="##" style={{ color: '#9ca3af', fontSize: 12 }}>
									Публичная оферта
								</Link>
							</Space>
						</Col>
					</Row>
				</div>
			</div>
		</AntFooter>
	)
}

export default Footer

export { Footer }
