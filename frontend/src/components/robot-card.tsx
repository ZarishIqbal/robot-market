import clsx from 'clsx'
import { motion } from 'framer-motion'
import { DateTime } from 'luxon'
import React from 'react'
import { formatPrice } from 'utils/helpers'

interface RobotCardProps {
	robot: AugmentedRobot
	addToCart: (id: string) => void
}

const RobotCard = ({ robot, addToCart }: RobotCardProps) => {
	const { id, name, image, price, stock, material, createdAt } = robot
	const inStock = stock > 1
	return (
		<div
			data-testid={`robot-card-${id}`}
			className="p-5 text-left text-gray-500 font-medium flex-col mx-5 my-5 w-80 h-80 rounded-md shadow-md bg-gray-50 border border-gray-300 justify-center flex">
			<img className="w-20 h-20 m-auto" src={image} />
			<p className="text-2xl font-semibold text-teal-brand text-center">{name}</p>
			<div className="my-2">
				<div className="flex justify-between">
					<p>Price:</p>
					<p data-testid={`robot-price-${id}`}>{formatPrice(price)}</p>
				</div>
				<div
					className={clsx(
						inStock ? 'text-green-700' : 'text-red-700',
						'flex justify-between'
					)}>
					<p>Stock:</p>
					<p>{stock}</p>
				</div>
				<div className="flex justify-between">
					<p>Material:</p>
					<p>{material}</p>
				</div>
				<div className="flex justify-between">
					<p>Created on:</p>
					<p data-testid={`robot-createdAt-${id}`}>
						{DateTime.fromISO(createdAt).toFormat('dd-LL-yyyy')}
					</p>
				</div>
				<motion.button
					whileHover={{ scale: 1.2 }}
					onClick={() => addToCart(robot.id)}
					disabled={stock < 1}
					className={clsx(
						inStock ? 'text-teal-brand' : 'text-red-600',
						'bg-gray-200 justify-center items-center font-semibold rounded-md mx-5 w-10/12 h-[30px]  mt-2'
					)}>
					{inStock ? 'Add to Cart' : 'Out of stock'}
				</motion.button>
			</div>
		</div>
	)
}
export default RobotCard
