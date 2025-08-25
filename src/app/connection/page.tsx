'use client'

import { Start } from '@/components/main/Start'
import { Benefits } from '@/components/main/Benefits'
import { Features } from '@/components/main/Features'
import { Steps } from '@/components/main/Steps'
import { Trial } from '@/components/main/Trial'
import { Contacts } from '@/components/main/Contacts'
import { Layout } from 'antd'
import styles from './connection.module.css'

export default function Connection() {
	return (
		<Layout.Content>
			<Start />
			<Benefits />
			<Features />
			<Steps />
			<Trial />
			<Contacts />
		</Layout.Content>
	)
}
