import React from 'react'
import RobotCard from '../../components/robot-card'

interface ProductListProps {
	robots: AugmentedRobot[]
	addToCart: (id: string) => void
}
const ProductList = ({ robots, addToCart }: ProductListProps) => {
	const renderItem = (robot: AugmentedRobot) => {
		return <RobotCard key={robot.id} addToCart={addToCart} robot={robot} />
	}

	return <div className="flex flex-wrap">{robots.map(renderItem)}</div>
}

export default ProductList
