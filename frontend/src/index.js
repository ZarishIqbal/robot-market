import React from 'react'
import ReactDOM from 'react-dom'
import { Toaster } from 'react-hot-toast'
import Routing from 'routing'
import App from './pages'
import './styles/main.css'

ReactDOM.render(
	<React.StrictMode>
		<Toaster
			position={'top-left'}
			toastOptions={{
				style: {
					margin: '15px',
					background: '#363636',
					color: '#fff',
					width: '340px'
				},
				className: 'text-base',
				duration: 3000
			}}
		/>
		<Routing />
	</React.StrictMode>,
	document.getElementById('root')
)
