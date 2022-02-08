import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
	return (
		<div className="flex h-screen md:flex">
			<div className="w-full md:w-1/2 bg-white flex items-center justify-center">
				<div className="max-w-sm m-8">
					<div className="text-black text-5xl md:text-15xl font-black">404</div>
					<p className="text-grey-darker text-2xl md:text-3xl font-light mb-8 leading-normal">
						Sorry, the page you are looking for could not be found 🙁
					</p>
					<Link
						to="/"
						className="bg-transparent text-red-brand font-bold uppercase tracking-wide py-3 px-6 border-2 border-red-brand hover:bg-red-brand hover:text-white rounded-lg">
						Go to Home
					</Link>
				</div>
			</div>
		</div>
	)
}

export default PageNotFound
