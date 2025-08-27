import styles from './styles/Guide.module.css'

export const Guide: React.FC = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Как это работает?</h2>
			<iframe
				className={styles.video}
				width="720"
				height="405"
				title='rutube guide'
				src="https://rutube.ru/play/embed/3b072f4187c47cd2601d5c76b629a259/"
				allow="clipboard-write; autoplay"
				allowFullScreen
			/>
		</div>
	)
}
