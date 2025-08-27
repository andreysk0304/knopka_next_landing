import { FC, PropsWithChildren } from 'react'
import styles from './styles/step.module.css'

type Props = {
	stepNumber: number
} & PropsWithChildren

export const Step: FC<Props> = ({ stepNumber, children }) => {
	return (
		<div className={styles.container}>
			<div className={styles.stepNumber}>
				<div className={styles.number}>{stepNumber}</div>
			</div>
			<div className={styles.content}>{children}</div>
		</div>
	)
}
