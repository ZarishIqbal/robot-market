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
		<div
			data-testid={`cart-item-${robot.id}`}
			className="p-2 m-1 mb-1 border border-l-0 border-r-0 border-gray-300 shadow-sm">
			<div className="grid grid-cols-4 items-center">
				<img src={robot.image} alt={robot.name} className="w-full h-full" />
				<div className="flex flex-wrap flex-col justify-center col-span-2 text-gray-600 text-sm leading-6 pl-3">
					<p className="text-gray-700 font-extrabold text-lg">{robot.name}</p>
					<p>Material: {robot.material}</p>
					<p>Unit Price: {formatPrice(robot.price)}</p>
					<p
						className="mt-2 border-t w-full font-medium"
						data-testid={`robot-price-${robot.id}`}>
						{formatPrice(robot.price * robot.quantity)}
					</p>
				</div>
				<div className="flex mt-1 h-8 items-center justify-between ">
					<button
						className="w-1/3 h-full flex justify-center items-center hover:bg-gray-300"
						onClick={() => addToCart(robot.id)}>
						<PlusIcon className="w-5 h-5" />
					</button>
					<p>{robot.quantity}</p>
					<button
						className="w-1/3 h-full flex justify-center items-center hover:bg-gray-300"
						onClick={() => removeFromCart(robot.id)}>
						<MinusIcon className="w-5 h-5" />
					</button>
				</div>
			</div>
		</div>
	)
}
export default CartItem
