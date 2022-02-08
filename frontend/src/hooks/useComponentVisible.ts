import React, { useEffect, useRef, useState } from 'react'

const useComponentVisible = (isVisible: boolean) => {
	const [isComponentVisible, setIsComponentVisible] = useState(isVisible)
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (e: any) => {
			if (ref.current && ref.current.contains(e.target) && isComponentVisible) {
				setIsComponentVisible(false)
			}
		}
		document.addEventListener('click', handleClickOutside, true)

		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	}, [isComponentVisible])
	return { ref, isComponentVisible, setIsComponentVisible }
}

export default useComponentVisible
