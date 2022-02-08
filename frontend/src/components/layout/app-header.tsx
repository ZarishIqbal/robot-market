import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/outline'
interface AppHeaderProps {
	title: string
	toggleCart: () => void
}
const AppHeader = ({ title, toggleCart }: AppHeaderProps) => {
	return (
		<div className="antialiased sticky top-0 z-30 bg-teal-brand flex p-5 justify-between items-center w-full shadow-lg">
			<div className="flex space-x-5 items-center">
				<img src="https://img.icons8.com/color/48/000000/music-robot.png" />
				<h1 className="font-bold text-3xl font-sans text-yellow-300">{title}</h1>
			</div>
			<span className="w-8 h-9 cursor-pointer" onClick={toggleCart}>
				<ShoppingCartIcon />
			</span>
		</div>
	)
}
export default AppHeader
