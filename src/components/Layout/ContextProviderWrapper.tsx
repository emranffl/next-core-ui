import { ToastProvider } from "../Toast/Context"
import ToastContainer from "../Toast/Container"
import React, { ReactNode, memo } from "react"

interface LayoutPartialProps {
	children: ReactNode
}

const LayoutPartial = ({ children }: LayoutPartialProps) => {
	return (
		<>
			{children}
			<ToastContainer />
		</>
	)
}

/**
 * This is a separate wrapper for the layout as the layout may
 * become more complex & large in the future. It is primarily used to wrap the
 * layout with just the context providers that may be required
 * by the layout.
 *
 * @author Emran
 * @type `Client Component`
 */
const LibraryContextProviderWrapper = ({
	children,
}: {
	children: ReactNode
}) => {
	return (
		<>
			<ToastProvider>
				<LayoutPartial>{children}</LayoutPartial>
			</ToastProvider>
		</>
	)
}

export default memo(LibraryContextProviderWrapper)
