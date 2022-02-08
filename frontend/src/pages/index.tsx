import * as React from 'react'
import DefaultLayout from '../components/layout'
import useAPIData from 'hooks/useApiData'
import ProductList from './product'

const App = () => {
	const { robots } = useAPIData()

	const [cartItems, setCartItems] = React.useState<Robots>()
	const addToCart = (id: string) => {}
	const removeFromCart = (id: string) => {}

	return (
		<DefaultLayout>
			<ProductList robots={Object.values(robots ?? {})} addToCart={addToCart} />
		</DefaultLayout>
	)
}

export default App
