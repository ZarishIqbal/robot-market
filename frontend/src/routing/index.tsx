import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../pages'
import PageNotFound from 'pages/error'

function Routing() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Routing
