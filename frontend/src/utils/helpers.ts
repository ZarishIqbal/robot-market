import { v4 as uuid } from 'uuid'

export const processData = (robots: any[]): Robots => {
	return robots.reduce((accumaltor, current) => {
		const id = uuid()
		return {
			...accumaltor,
			[id]: {
				...current,
				id: id,
				quantity: 0,
				price: parseFloat(current.price),
				stock: parseInt(current.stock)
			}
		}
	}, {} as Robots)
}

export const formatPrice = (price: number) => {
	return price.toLocaleString('th-TH', {
		style: 'currency',
		currency: 'THB'
	})
}
