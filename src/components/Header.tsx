import { FC } from 'react'
import { Layout, Menu, Image } from 'antd'
import type { MenuProps } from 'antd'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './styles/Header.module.css'

const menuItems: MenuProps['items'] = [
	{
		key: '/',
		label: <Link href="/">Главная</Link>,
	},
	{
		key: '/connection',
		label: <Link href="/connection">Подключение</Link>,
	},
	{
		key: '/blog',
		label: <Link target='_blank' href="https://blog.knopkazakazy.ru/">Блог</Link>,
	},
]

const Header: FC = () => {
	const pathname = usePathname()

	return (
		<Layout.Header className={styles.header}>
			<div className={styles.logo}>
				<Image
					src="/logoBlack.svg"
					alt="logo"
					title="Кнопка Заказы"
					unselectable="on"
					preview={false}
					fetchPriority="high"
					height={40}
					style={{ verticalAlign: 'initial' }}
					className={styles.logoImg}
				/>
			</div>
			<Menu
				mode="horizontal"
				items={menuItems}
				className={styles.menu}
				selectedKeys={[pathname]}
			/>
		</Layout.Header>
	)
}

export default Header

export { Header }
