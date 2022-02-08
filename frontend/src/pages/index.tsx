import * as React from 'react'
import DefaultLayout from 'components/layout'
import useAPIData from 'hooks/useApiData'
import ProductList from './product'
import useComponentVisible from 'hooks/useComponentVisible'
import Cart from './cart'
import toast from 'react-hot-toast'

const App = () => {
	const { robots } = useAPIData()

	const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)
	const [cartItems, setCartItems] = React.useState<Robots>({})

	const addToCart = (id: string) => {
		const selectedRobot = robots[id]
		/*If robot is out of stock*/
		if (selectedRobot.stock === 0) {
			return toast.error('Out of stock!')
		}
		/*If robot already is in the cart */
		if (cartItems?.[id]) {
			/* Check is robot quantity in cart is not equal to stock*/
			const inStock = cartItems[id].stock !== cartItems[id].quantity

			/* If Robot in stock, increment quantity in cart*/
			if (inStock) {
				setCartItems(prev => ({
					...prev,
					[id]: { ...selectedRobot, quantity: prev[id].quantity + 1 }
				}))
				return toast.success(`${selectedRobot.name} added to cart`)
			}

			return toast.error('Maximum robot in stock added!')
		}

		/* If new robot type is added, check the number of types already in cart*/
		if (Object.keys(cartItems).length < 5) {
			setCartItems(prev => ({ ...prev, [id]: { ...selectedRobot, quantity: 1 } }))
			return toast.success(`${selectedRobot.name} added to cart`)
		}

		return toast.error('Only 5 robots of different type can be purched in an order!')
	}

	const removeFromCart = (id: string) => {
		const selectedRobot = robots[id]
		setCartItems(prev => {
			/* If more robot quantity >1 
			then decrement quantity
			else delete object from cart
			*/
			if (cartItems?.[id]?.quantity > 1) {
				return { ...prev, [id]: { ...selectedRobot, quantity: prev[id].quantity - 1 } }
			} else {
				delete prev?.[id]
				return { ...prev }
			}
		})
	}

	return (
		<DefaultLayout toggleCart={() => setIsComponentVisible(!isComponentVisible)}>
			<div ref={ref} className="w-full h-full z-50">
				<ProductList robots={Object.values(robots ?? {})} addToCart={addToCart} />
			</div>
			{isComponentVisible && (
				<Cart addToCart={addToCart} robots={cartItems} removeFromCart={removeFromCart} />
			)}
		</DefaultLayout>
	)
}

export default App
