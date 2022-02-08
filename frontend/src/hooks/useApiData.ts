import { useEffect, useState } from 'react'
import { fetchRobots } from '../services'

const useAPIData = () => {
	const [robots, setRobots] = useState({} as Robots)
	useEffect(() => {
		const getRobots = async () => {
			await fetchRobots().then(response => setRobots(response))
		}
		getRobots()
	}, [])
	return { robots }
}
export default useAPIData
