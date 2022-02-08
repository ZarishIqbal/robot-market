import React from 'react'

interface AppHeaderProps {
	title: string
}
const AppHeader = ({ title }: AppHeaderProps) => {
	return (
		<div className="antialiased sticky top-0 z-50 bg-teal-brand flex p-5 items-center space-x-5 w-full shadow-lg">
			<img src="https://img.icons8.com/color/48/000000/music-robot.png" />
			<h1 className="font-bold text-3xl font-sans text-yellow-300">{title}</h1>
		</div>
	)
}
export default AppHeader
