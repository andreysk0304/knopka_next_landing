import { Card } from 'antd'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import styles from './styles/Benefits.module.css'

export const Benefits: React.FC = () => {
	const problems = [
		'Финансовые отчеты в Wildberries — это хаос',
		'«Каждый час ручного расчета = потеря прибыли и времени»',
		'«Ошибки в отчетах? Это дороже, чем вы думаете»',
		'«Рекламные бюджеты утекают, а вы даже не видите, куда»',
	]

	const solutions = [
		'Автоматическая расшифровка отчетов → данные за секунды, а не часы.',
		'Расчет налогов и прибыли → Удобно и за пару секунд.',
		'ABC-анализ → знайте своих «звезд» и «аутсайдеров» в ассортименте.',
		'Статистика по рекламе → видите, какая кампания приносит деньги, а какая их сжигает.',
		'Ежемесячные уведомления → контроль заказов и корзин в режиме реального времени',
	]

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.titleWrapper}>
					<h2 className={styles.title}>Вы теряете время и деньги из-за рутины?</h2>
				</div>

				<div className={styles.grid}>
					{/* Проблемы */}
					<Card className={styles.cardRed} hoverable>
						<h3 className={`${styles.cardTitleRed} ${styles.cardTitle}`}>Проблемы</h3>
						<div className={styles.list}>
							{problems.map((problem, index) => (
								<div key={index} className={styles.listItem}>
									<CloseOutlined className={`${styles.iconRed} ${styles.icon}`} />
									<span className={styles.text}>{problem}</span>
								</div>
							))}
						</div>
					</Card>

					{/* Решения */}
					<Card className={styles.cardGreen} hoverable>
						<h3 className={`${styles.cardTitleGreen} ${styles.cardTitle}`}>
							Наше решение
						</h3>
						<div className={styles.list}>
							{solutions.map((solution, index) => (
								<div key={index} className={styles.listItem}>
									<CheckOutlined
										className={`${styles.iconGreen} ${styles.icon}`}
									/>
									<span className={styles.text}>{solution}</span>
								</div>
							))}
						</div>
					</Card>
				</div>
			</div>
		</section>
	)
}
