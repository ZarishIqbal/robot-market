import * as React from 'react'
import DefaultLayout from 'components/layout'
import useAPIData from 'hooks/useApiData'
import ProductList from './product'
import useComponentVisible from 'hooks/useComponentVisible'
import Cart from './cart'

const App = () => {
	const { robots } = useAPIData()

	const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)
	const [cartItems, setCartItems] = React.useState<Robots>()
	const addToCart = (id: string) => {}
	const removeFromCart = (id: string) => {}

	return (
		<DefaultLayout toggleCart={() => setIsComponentVisible(!isComponentVisible)}>
			<div ref={ref} className="w-full h-full z-50">
				<ProductList robots={Object.values(robots ?? {})} addToCart={addToCart} />
			</div>
			{isComponentVisible && <Cart />}
		</DefaultLayout>
	)
}

export default App
