import { v4 as uuid } from 'uuid'

export const processData = (robot: any[]): Robots => {
	return robot?.reduce((accumaltor, current) => {
		const id = uuid()
		return { ...accumaltor, [id]: { ...current, id: id, quantity: 0 } }
	}, {} as Robots)
}
