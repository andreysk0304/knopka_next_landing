import { Button } from 'antd'
import { openTg } from '@/utils'
import styles from './styles/Trial.module.css'

export const Trial: React.FC = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.title}>
					Ознакомьтесь с сервисом и при активации получите 3 дня <span>бесплатно!</span>
				</h2>

				<Button onClick={openTg} className={styles.button}>
					Попробовать бесплатно
				</Button>
			</div>
		</section>
	)
}
