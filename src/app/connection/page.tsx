'use client'

import { Button, Layout, Typography, Image, Flex } from 'antd'
import { Step } from '@/components/connection/Step'
import { ApiOutlined } from '@ant-design/icons'
import styles from './connection.module.css'

const { Content } = Layout
const { Title, Text, Paragraph, Link } = Typography

export default function Connection() {
	return (
		<Content className={styles.container}>
			<div className={styles.header}>
				<Title level={1} className={styles.title}>
					Руководство по созданию API ключа
				</Title>
				<Text className={styles.subtitle}>
					Следуйте инструкциям ниже для создания и настройки вашего API ключа
				</Text>
			</div>
			<div className={styles.steps}>
				<Step stepNumber={1}>
					<Title level={3}>Перейдите в личный кабинет</Title>
					<Paragraph>
						Перейдите в личный кабинет&nbsp;
						<Link target="_blank" href="https://seller.wildberries.ru">
							seller.wildberries.ru
						</Link>
						, чтобы создать API ключ
					</Paragraph>
					<Flex justify="center">
						<div className={styles.img}>
							<Image
								src="/profile.png"
								alt="Профиль"
								title="Профиль"
								unselectable="on"
							/>
						</div>
					</Flex>
					<Button
						type="primary"
						href="https://seller.wildberries.ru"
						target="_blank"
						size="large"
						className={styles.buttonLink}
						icon={<ApiOutlined />}
					>
						Перейти в кабинет
					</Button>
				</Step>
				<Step stepNumber={2}>
					<Title level={3}>Перейдите в настройки</Title>
					<Paragraph>
						Наведите курсор на свою организацию и нажмите "Интеграции по API"
					</Paragraph>
					<Flex justify="center">
						<div className={styles.img}>
							<Image
								src="/integration.png"
								alt="Интеграция по API"
								title="Интеграции по API"
								unselectable="on"
							/>
						</div>
					</Flex>
				</Step>
				<Step stepNumber={3}>
					<Title level={3}>Создайте новый API ключ</Title>
					<Paragraph>
						При создании нового API ключа выберите <b>"Продвижение"</b>,
						<b>"Статистика"</b> и <b>"Аналитика"</b>
					</Paragraph>
					<Flex justify="center">
						<div className={styles.img} style={{ maxHeight: 500 }}>
							<Image
								src="/key.jpg"
								alt="Новый API ключ"
								title="Новый API ключ"
								unselectable="on"
								style={{
									maxHeight: 500,
									width: 'auto',
									objectFit: 'contain',
								}}
							/>
						</div>
					</Flex>
				</Step>
			</div>
		</Content>
	)
}
