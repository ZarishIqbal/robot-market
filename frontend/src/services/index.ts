import { processData } from '../utils/helpers'

export const fetchRobots = async (): Promise<Robots> => {
	return new Promise((resolve, reject) => {
		const url = 'api/robots'
		fetch(url, { method: 'GET' })
			.then((response: Response) => response.json())
			.then(data => resolve(processData(data.data)))
			.catch(error => reject(error))
	})
}
