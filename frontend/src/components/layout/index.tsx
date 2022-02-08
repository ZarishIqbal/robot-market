import React from 'react'
import { useDocumentTitle } from '@hooks/useDocumentTitle'
import { AppHeader } from './app-header'

interface AppLayoutProps {
	children: React.ReactNode
	title?: string
}
export const DefaultLayout = ({ title, children }: AppLayoutProps) => {
	const docTitle = title ? `${title} | Robo Market` : 'Robo Market'
	useDocumentTitle(docTitle)
	return (
		<div className="w-full text-gray-700">
			<AppHeader title={docTitle} />
			{children}
		</div>
	)
}
