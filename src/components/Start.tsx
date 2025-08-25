import { Button } from 'antd'
import styles from './styles/Start.module.css'

export const Start: React.FC = () => {
	const scrollToContact = () => {
		const contactSection = document.getElementById('contact')
		contactSection?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<section className={styles.section}>
			<div className={styles.bgPattern} />

			<div className={styles.container}>
				<h1 className={styles.title}>
					Оцифруйте финансы Wildberries и <br />
					анализируйте прибыль за 2 клика!
				</h1>

				<p className={styles.subtitle}>
					Автоматизируйте финансы, налоги и рекламу — сосредоточьтесь на росте бизнеса.
				</p>

				<Button type="primary" className={styles.button} onClick={scrollToContact}>
					Попробовать бесплатно
				</Button>
			</div>
		</section>
	)
}
