interface Robot {
	name: string
	image: string
	price: number
	stock: number
	createdAt: string
	material: string
}
interface Robots {
	[id: string]: Robot & { id: string; quantity: number }
}
