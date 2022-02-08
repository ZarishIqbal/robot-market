import { MinusIcon, PlusIcon } from '@heroicons/react/outline'
import React from 'react'
import { formatPrice } from 'utils/helpers'

interface CartItemProps {
	robot: AugmentedRobot
	addToCart: (id: string) => void
	removeFromCart: (id: string) => void
}
const CartItem = ({ robot, addToCart, removeFromCart }: CartItemProps) => {
	return (
		<div className="rounded-md p-2 m-2 mb-1 bg-white border-gray-100 border shadow-md">
			<div className="grid grid-cols-3">
				<img src={robot.image} alt={robot.name} className="w-full h-full" />
				<div className="col-span-2 text-gray-300 text-sm">
					<p className="text-gray-700">{robot.name}</p>
					<p>Material: {robot.material}</p>
					<p>Quantity: {robot.quantity}</p>
					<p>Price: {formatPrice(robot.price)}</p>
				</div>
			</div>
			<div className="flex mt-1 items-center justify-between border border-gray-300">
				<button
					className="bg-gray-300 w-1/3 text-white flex justify-center items-center "
					onClick={() => addToCart(robot.id)}>
					<PlusIcon className="w-5 h-5" />
				</button>
				<p>{formatPrice(robot.price * robot.quantity)}</p>
				<button
					className="bg-gray-300 text-white w-1/3 flex justify-center items-center "
					onClick={() => removeFromCart(robot.id)}>
					<MinusIcon className="w-5 h-5" />
				</button>
			</div>
		</div>
	)
}
export default CartItem
