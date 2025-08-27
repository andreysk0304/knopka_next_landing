import { Layout, Row, Col, Typography, Space, Image, Flex } from 'antd'
import {
	MailOutlined,
	PhoneOutlined,
	MessageOutlined,
} from '@ant-design/icons'
import { LINKS } from '@/app/constants'
import styles from './styles/Header.module.css'

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
			<div style={{ margin: '0 auto' }}>
				<Row  gutter={[32, 32]}>
					<Col xs={24} md={12} lg={16} flex="auto">
						<Space direction="vertical" size="middle">
							<Flex justify='center' align='center'>
								<Image
									src="/logoBlack.svg"
									alt="logo"
									title="Кнопка Заказы"
									unselectable="on"
									preview={false}
									fetchPriority="high"
									height={60}
									style={{ verticalAlign: 'initial' }}
									className={styles.logoImg}
								/>
							</Flex>

							<Text style={{ color: '#9ca3af', lineHeight: 1.6 }}>
								Ваш надежный помощник в автоматизации и оцифровке бизнеса на
								маркетплейсах. Практические советы, инструменты и стратегии для
								роста продаж.
							</Text>
						</Space>
					</Col>

					{/* Navigation */}
					<Col xs={24} md={6} lg={4}>
						<Title level={4} style={{ color: 'white', marginBottom: 16 }}>
							Навигация
						</Title>
						<Space direction="vertical" size="small">
							<Link href={LINKS.main}  style={{ color: '#9ca3af' }}>
								Главная
							</Link>
							<Link href={LINKS.connection}  style={{ color: '#9ca3af' }}>
								Подключение
							</Link>
							<Link target='_blank' href={LINKS.blog} style={{ color: '#9ca3af' }}>
								Блог
							</Link>
						</Space>
					</Col>

					{/* Contact */}
					<Col xs={24} md={6} lg={4}>
						<Title level={4} style={{ color: 'white', marginBottom: 16 }}>
							Контакты
						</Title>
						<Space direction="vertical" size="middle">
							<Space>
								<MailOutlined style={{ color: '#10B981' }} />
								<Link href="mailto:rec.tech.rf@yandex.ru" style={{ color: '#9ca3af' }}>
									rec.tech.rf@yandex.ru
								</Link>
							</Space>
							<Space>
								<PhoneOutlined style={{ color: '#10B981' }} />
								<Link href="tel:+79109015888" style={{ color: '#9ca3af' }}>
									+7 910 901 58 88
								</Link>
							</Space>
							<Space>
								<MessageOutlined style={{ color: '#10B981' }} />
								<Link target='_blank' href="https://t.me/knopkazakazyy" style={{ color: '#9ca3af' }}>
									Telegram-бот
								</Link>
							</Space>
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
								2025 КнопкаЗаказы. Все права защищены.
							</Text>
						</Col>
						<Col xs={24} md={12}>
							<Space
								size="large"
								style={{
									justifyContent: 'center',
									width: '100%',
								}}
							>
								<Link target='_blank' href="https://docs.google.com/document/d/1t8keAkxzB_N0CGT5yvpggX4LqkZ5Cmo4FTvCh_68bFA/edit" style={{ color: '#9ca3af', fontSize: 12 }}>
									Политика конфиденциальности
								</Link>
								<Link target='_blank' href="https://docs.google.com/document/d/1AhfYACdA5juG3gJyFeo2lZES0ga7PKlCtvzybUqghsg/edit" style={{ color: '#9ca3af', fontSize: 12 }}>
									Пользовательское соглашение
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
