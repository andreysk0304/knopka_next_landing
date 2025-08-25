import { Button, Card } from 'antd'
import { PhoneOutlined, MailOutlined } from '@ant-design/icons'
import styles from './styles/Contacts.module.css'

export const Contacts: React.FC = () => {
	const handleTelegramClick = () => {
		window.open('https://t.me/zakazywork_bot?start=c2FpdA', '_blank')
	}

	return (
		<section id="contact" className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.title}>Контакты</h2>

				<div className={styles.contactItem}>
					<PhoneOutlined className={styles.icon} />
					<span>+7 910 901 58 88</span>
				</div>

				<div className={styles.contactItem}>
					<MailOutlined className={styles.icon} />
					<span>rec.tech.rf@yandex.ru</span>
				</div>

				<div className={styles.buttonWrapper}>
					<Button onClick={handleTelegramClick} className={styles.button}>
						Написать в Telegram
					</Button>
				</div>

				<Card className={styles.card}>
					<Card.Meta
						title={<div className={styles.cardTitle}>Реквизиты</div>}
						description={
							<div className={styles.cardContent}>
								<p>ИП Чевагин Владимир Владимирович</p>
								<p>ОГРН/ОГРНИП 321623400050431</p>
								<p>ИНН 712200602805</p>
							</div>
						}
					/>
				</Card>
			</div>
		</section>
	)
}
