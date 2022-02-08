import * as React from 'react'
import DefaultLayout from 'components/layout'
import useAPIData from 'hooks/useApiData'
import ProductList from './product'
import useComponentVisible from 'hooks/useComponentVisible'
import Cart from './cart'
import toast from 'react-hot-toast'
import Checkbox from 'components/checkbox'

const App = () => {
	const { robots } = useAPIData()

	const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)
	const [cartItems, setCartItems] = React.useState<Robots>({})

	const [filter, setFilter] = React.useState<string[]>([])

	const materials = Object.values(robots).reduce((accumalator, robot) => {
		return accumalator.includes(robot.material) ? accumalator : [...accumalator, robot.material]
	}, [] as string[])

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

	const handleCheck = (material: string) => {
		setFilter(prev => {
			if (prev.includes(material)) {
				return [...prev.filter(item => item !== material)]
			}
			return [...prev, material]
		})
	}
	const applyFilter = (robot: AugmentedRobot) => {
		return filter.length === 0 || filter.includes(robot.material)
	}
	return (
		<DefaultLayout toggleCart={() => setIsComponentVisible(!isComponentVisible)}>
			<div ref={ref} className="w-full h-full z-50">
				<div className="flex my-5 mx-2 flex-wrap justify-center">
					{materials.map(material => (
						<Checkbox
							key={material}
							checked={filter.includes(material)}
							value={material}
							handleCheck={material => handleCheck(material)}
						/>
					))}
				</div>
				<button
					onClick={() => setFilter([])}
					className="text-teal-brand bg-gray-200 justify-center items-center font-semibold rounded-md mx-5 w-36 h-8 mt-2">
					Clear Filter
				</button>
				<ProductList
					robots={Object.values(robots ?? {}).filter(applyFilter)}
					addToCart={addToCart}
				/>
			</div>
			{isComponentVisible && (
				<Cart
					addToCart={addToCart}
					robots={cartItems}
					removeFromCart={removeFromCart}
					closeCart={() => setIsComponentVisible(false)}
				/>
			)}
		</DefaultLayout>
	)
}

export default App
