import CartItem from 'components/cart-item'
import React from 'react'
import { formatPrice } from 'utils/helpers'

interface CartProps {
	robots: Robots
	addToCart: (id: string) => void
	removeFromCart: (id: string) => void
}
const Cart = ({ robots, addToCart, removeFromCart }: CartProps) => {
	const getTotal = () => {
		const totalPrice = Object.values(robots ?? {}).reduce(
			(acc, curr) => acc + curr.price * curr.quantity,
			0
		)
		return totalPrice
	}
	return (
		<div className="fixed pb-20 top-0 right-0 h-full w-1/3 z-40 bg-gray-50 p-2 pt-10 overflow-y-scroll space-y-5 border border-gray-100 shadow-lg">
			<h3 className="font-bold text-2xl">Your shopping cart</h3>
			{Object.values(robots ?? {}).map((robot, index) => (
				<div key={robot.id} className="flex items-center">
					<p className="flex justify-center items-center w-8 h-8 m-2 border border-gray-600 shadow-lg rounded-md">
						{index + 1}
					</p>

					<CartItem robot={robot} addToCart={addToCart} removeFromCart={removeFromCart} />
				</div>
			))}
			{getTotal() > 0 && (
				<p className="font-semibold text-teal-brand text-lg">
					Grand Total: {formatPrice(getTotal())}
				</p>
			)}
		</div>
	)
}
export default Cart
