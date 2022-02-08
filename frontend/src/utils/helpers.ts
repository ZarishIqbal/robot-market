import { v4 as uuid } from 'uuid'

export const processData = (robots: any[]): Robots => {
	return robots.reduce((accumaltor, current) => {
		const id = uuid()
		return { ...accumaltor, [id]: { ...current, id: id, quantity: 0 } }
	}, {} as Robots)
}
