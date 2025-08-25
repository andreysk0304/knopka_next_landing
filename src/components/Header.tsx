'use client'

import { useState } from 'react'
import { Layout, Menu, Button, Drawer } from 'antd'
import { BarChartOutlined, MenuOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'

const { Header: AntHeader } = Layout

const Header = () => {
	const [drawerVisible, setDrawerVisible] = useState(false)

	const menuItems: MenuProps['items'] = [
		{
			key: 'home',
			label: 'Главная',
		},
		{
			key: 'blog',
			label: 'Блог',
		},
		{
			key: 'pricing',
			label: 'Тарифы',
		},
	]

	return (
		<AntHeader
			style={{
				position: 'sticky',
				top: 0,
				zIndex: 1000,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				padding: '0 24px',
			}}
		>
			{/* Logo */}
			<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
				<div
					style={{
						width: 32,
						height: 32,
						background: '#10B981',
						borderRadius: 8,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<BarChartOutlined style={{ color: 'white', fontSize: 18 }} />
				</div>
				<span
					style={{
						fontSize: 20,
						fontWeight: 700,
						color: '#1f2937',
					}}
				>
					MarketPro
				</span>
			</div>

			{/* Desktop Menu */}
			<div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
				<div className="hidden md:block">
					<Menu
						mode="horizontal"
						items={menuItems}
						style={{
							border: 'none',
							background: 'transparent',
							minWidth: '300px',
						}}
					/>
				</div>

				<Button
					type="primary"
					size="large"
					style={{
						borderRadius: 8,
						fontWeight: 500,
					}}
				>
					Попробовать бесплатно
				</Button>

				{/* Mobile Menu Button */}
				<Button
					className="md:hidden"
					type="text"
					icon={<MenuOutlined />}
					onClick={() => setDrawerVisible(true)}
				/>
			</div>

			{/* Mobile Drawer */}
			<Drawer
				title="Меню"
				placement="right"
				onClose={() => setDrawerVisible(false)}
				open={drawerVisible}
				width={280}
			>
				<Menu mode="vertical" items={menuItems} style={{ border: 'none' }} />
				<div style={{ marginTop: 24 }}>
					<Button type="primary" block size="large" style={{ borderRadius: 8 }}>
						Попробовать бесплатно
					</Button>
				</div>
			</Drawer>
		</AntHeader>
	)
}

export default Header

export { Header }
