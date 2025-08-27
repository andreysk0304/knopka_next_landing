'use client'

import { Start } from '@/components/main/Start'
import { Benefits } from '@/components/main/Benefits'
import { Features } from '@/components/main/Features'
import { Steps } from '@/components/main/Steps'
import { Trial } from '@/components/main/Trial'
import { Contacts } from '@/components/main/Contacts'
import { Guide } from '@/components/main/Guide'
import { Layout } from 'antd'
import styles from './page.module.css'



export default function Home() {
	return (
		<Layout.Content className={styles.container}>
			<Start />
			<Benefits />
			<Features />
			<Steps />
			<Guide />
			<Trial />
			<Contacts />
		</Layout.Content>
	)
}
