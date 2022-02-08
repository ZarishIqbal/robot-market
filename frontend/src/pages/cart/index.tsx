import CartItem from 'components/cart-item'
import React from 'react'
import { formatPrice } from 'utils/helpers'

interface CartProps {
	robots: Robots
	addToCart: (id: string) => void
	removeFromCart: (id: string) => void
	closeCart: () => void
}
const Cart = ({ robots, addToCart, removeFromCart, closeCart }: CartProps) => {
	const getTotalPrice = () => {
		const totalPrice = Object.values(robots ?? {}).reduce(
			(acc, curr) => acc + curr.price * curr.quantity,
			0
		)
		return totalPrice
	}
	const getTotalQuantity = () => {
		const totalQuantity = Object.values(robots ?? {}).reduce(
			(acc, curr) => acc + curr.quantity,
			0
		)
		return totalQuantity
	}
	return (
		<div className="fixed pb-20 top-0 right-0 h-full w-full md:w-96 z-40 bg-gray-100 p-2 pt-10 overflow-y-scroll space-y-5 border border-gray-200 shadow-xl">
			{Object.values(robots ?? {}).map(robot => (
				<CartItem
					key={robot.id}
					robot={robot}
					addToCart={addToCart}
					removeFromCart={removeFromCart}
				/>
			))}
			{getTotalPrice() > 0 ? (
				<div>
					<h2 className="text-black font-semibold">Order Summary</h2>
					<p>Items: {getTotalQuantity()}</p>
					<div className="flex justify-between items-center mt-2">
						<p>Total: </p>
						<span className="text-teal-brand">{formatPrice(getTotalPrice())}</span>
					</div>
				</div>
			) : (
				<div className="flex w-full justify-center text-teal-brand font-bold">
					Nothing in the cart!
				</div>
			)}
			<button
				onClick={() => closeCart()}
				className="text-teal-brand justify-self-end bg-gray-200 w-10/12 items-center font-semibold rounded-md mx-5  h-12 mt-2">
				Close
			</button>
		</div>
	)
}
export default Cart
