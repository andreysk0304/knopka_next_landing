const iconWrapperStyle: React.CSSProperties = {
	backgroundColor: 'rgba(102, 187, 122, 0.1)',
	padding: 8,
	borderRadius: '50%',
}

const iconStyle: React.CSSProperties = {
	fontSize: 24,
	color: '#66BB7A',
}

const dotStyle = (color: string): React.CSSProperties => ({
	width: 12,
	height: 12,
	borderRadius: '50%',
	backgroundColor: color,
})

const circleStyleTop: React.CSSProperties = {
	position: 'absolute',
	top: -16,
	left: -16,
	width: 96,
	height: 96,
	backgroundColor: 'rgba(102, 187, 122, 0.2)',
	borderRadius: '50%',
	opacity: 0.5,
}

const circleStyleBottom: React.CSSProperties = {
	position: 'absolute',
	bottom: -16,
	right: -16,
	width: 128,
	height: 128,
	backgroundColor: 'rgba(102, 187, 122, 0.2)',
	borderRadius: '50%',
	opacity: 0.5,
}

const chartPlaceholderStyle: React.CSSProperties = {
	marginTop: 24,
	height: 160,
	backgroundColor: '#f9fafb',
	borderRadius: 8,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}

export { iconWrapperStyle, iconStyle, dotStyle, circleStyleTop, circleStyleBottom, chartPlaceholderStyle }
