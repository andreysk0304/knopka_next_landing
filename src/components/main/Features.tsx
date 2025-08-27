import { Card, Tag } from 'antd'
import { BarChartOutlined, MobileOutlined, RiseOutlined, DollarOutlined } from '@ant-design/icons'
import styles from './styles/Features.module.css'

const features = [
	{
		icon: <BarChartOutlined />,
		title: 'Расшифровка отчетов',
		description:
			'Расшифровка отчетов за 2 клика. Не нужно сводить кучу таблиц, чтобы узнать чистую прибыль и налог.',
	},
	{
		icon: <MobileOutlined />,
		title: 'Данные в телефоне',
		description: 'Не обязательно сидеть за компьютером, чтобы контролировать бизнес.',
	},
	{
		icon: <RiseOutlined />,
		title: 'Анализ рекламы',
		description: 'За два клика покажем, какая кампания приносит деньги, а какая съедает.',
	},
	{
		icon: <DollarOutlined />,
		title: 'Самая доступная цена',
		description: null,
		pricing: true,
	},
]

export const Features: React.FC = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.titleWrapper}>
					<h2 className={styles.title}>Почему выбирают нас?</h2>
				</div>

				<div className={styles.grid}>
					{features.map((feature, index) => (
						<Card key={index} className={styles.card} hoverable>
							<div className={styles.iconWrapper}>{feature.icon}</div>
							<h3 className={styles.cardTitle}>{feature.title}</h3>

							{feature.pricing ? (
								<div>
									<div className={styles.pricingTitle}>ТАРИФЫ</div>
									<Tag color="green">3 дня — бесплатно</Tag>
									<div className={styles.pricingWrapper}>
										<div>1 месяц — 1499₽</div>
										<div>2 месяца — 2899₽</div>
										<div>3 месяца — 4299₽</div>
									</div>
								</div>
							) : (
								<p className={styles.cardDescription}>{feature.description}</p>
							)}
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
