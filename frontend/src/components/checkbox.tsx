import React from 'react'

interface CheckboxProps {
	value: string
	checked: boolean
	handleCheck: (material: string) => void
}
const Checkbox = ({ handleCheck, checked, value }: CheckboxProps) => {
	return (
		<label className="flex space-x-2 items-center w-32 h-12">
			<input
				className="w-5 h-5 form-checkbox rounded-sm text-teal-brand "
				type="checkbox"
				onChange={() => handleCheck(value)}
				checked={checked}
				value={value}
			/>
			<span>{value}</span>
		</label>
	)
}
export default Checkbox
