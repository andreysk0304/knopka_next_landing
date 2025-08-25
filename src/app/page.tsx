'use client'

import './index.css'
import { useState, useEffect } from 'react'
import { Start } from '@/components/Start'
import { Benefits } from '@/components/Benefits'
import { Features } from '@/components/Features'
import { Steps } from '@/components/Steps'
import { Trial } from '@/components/Trial'
import { Contacts } from '@/components/Contacts'
import styles from './main.module.css'

export default function Home() {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	return (
		<div className={styles.container} style={{ height: '100%' }}>
			{!isClient && <div className={styles.loader} />}
			<div style={{ transition: 'opacity .3s ease-in-out', opacity: Number(isClient) }}>
				<Start />
				<Benefits />
				<Features />
				<Steps />
				<Trial />
				<Contacts />
			</div>
		</div>
	)
}
