'use client'

import { useState, useEffect, FC, PropsWithChildren } from 'react'
import { Layout } from 'antd'
import Header from '@/components/Header'
import styles from './styles/ClientWrapper.module.css'
import Footer from './Footer'

export const ClientWrapper: FC<PropsWithChildren> = ({ children }) => {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	return (
		<div className={styles.container}>
			{!isClient && <div className={styles.loader} />}
			<div
				style={{
					transition: 'opacity .3s ease-in-out',
					opacity: Number(isClient),
				}}
			>
				<Layout>
					<Header />
					{children}
					<Footer />
				</Layout>
			</div>
		</div>
	)
}
