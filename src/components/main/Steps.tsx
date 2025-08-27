import { Card, Image } from 'antd'
import styles from './styles/Steps.module.css'

const STEPS = [
	{
		number: '1',
		title: 'Активируйте Бота',
		description: 'Нажмите на кнопку "Попробовать"',
		image: '/1.jpg',
	},
	{
		number: '2',
		title: 'Добавьте Кабинет',
		description:
			'Введите название своего кабинета и действуйте по инструкции дальше в чат боте',
		image: '/2.jpg',
	},
	{
		number: '3',
		title: 'Получайте удовольствие от автоматизации',
		description: 'Наслаждайтесь результатами автоматизации вашего бизнеса',
		image: '/3.jpg',
	},
]

export const Steps: React.FC = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.titleWrapper}>
					<h2 className={styles.title}>Проще, чем кажется</h2>
				</div>

				<div className={styles.grid}>
					{STEPS.map((step, index) => (
						<Card key={index} className={styles.card} hoverable>
							<div className={styles.imageWrapper}>
								<Image
									src={step.image}
									alt={step.title}
									height="100%"
									width="100%"
									style={{ objectFit: 'cover' }}
									preview={false}
								/>
							</div>
							<h3 className={styles.cardTitle}>
								{step.number}. {step.title}
							</h3>
							<p className={styles.cardDescription}>{step.description}</p>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
