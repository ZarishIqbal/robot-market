interface Robot {
	name: string
	image: string
	price: number
	stock: number
	createdAt: string
	material: string
}
interface AugmentedRobot extends Robot {
	id: string
	quantity: number
}
interface Robots {
	[id: string]: AugmentedRobot
}
