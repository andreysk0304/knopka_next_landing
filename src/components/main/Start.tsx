import { Button } from 'antd'
import { openTg } from '@/utils'
import styles from './styles/Start.module.css'

export const Start: React.FC = () => {
	return (
		<section className={styles.section}>
			<div className={styles.bgPattern} />

			<div className={styles.container}>
				<h1 className={styles.title}>
					Оцифруйте финансы и рекламу на Wildberries
					<br />
					за пару кликов!
				</h1>

				<p className={styles.subtitle}>
					Автоматизируйте финансы, налоги и рекламу — сосредоточьтесь на росте бизнеса.
				</p>

				<Button type="primary" className={styles.button} onClick={openTg}>
					Попробовать бесплатно
				</Button>
			</div>
		</section>
	)
}
