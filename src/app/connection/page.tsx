'use client'

import { Button, Layout, Typography, Image } from 'antd'
import { Step } from '@/components/connection/Step'
import { ApiOutlined } from '@ant-design/icons'
import styles from './connection.module.css'

const { Content } = Layout
const { Title, Text, Paragraph, Link } = Typography

export default function Connection() {
	return (
		<Content>
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
					<Paragraph>Наведите на свое ИП и нажмите "Интеграции по API"</Paragraph>
					<div className={styles.img}>
						<Image
							src="/integration.jpg"
							alt="Интеграция по API"
							title="Интеграции по API"
							unselectable="on"
						/>
					</div>
				</Step>
			</div>
		</Content>
	)
}
