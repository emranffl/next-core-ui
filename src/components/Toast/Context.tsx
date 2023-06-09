import React, { createContext, ReactNode, useState } from "react"
import { ToastProps } from "."

export interface ToastContextProps {
	toastProps: ToastProps[] | null
	renderToast: (toastPropsData: ToastContextProps["toastProps"]) => void
}

export const ToastContext = createContext<
	ToastContextProps | Record<string, never>
>({})

export const ToastProvider = ({ children }: { children: ReactNode }) => {
	const [toastProps, updateToastProps] =
		useState<ToastContextProps["toastProps"]>(null)

	/**
	 * Renders the toast component with the given props
	 * @param toastPropsData The array of `ToastProps` to be passed to the toast component, @see `ToastProps` interface
	 *
	 */
	const renderToast = (toastPropsData: ToastContextProps["toastProps"]) => {
		updateToastProps([...(toastProps ?? []), ...(toastPropsData ?? [])]) // - coalesce operator for null check
	}

	return (
		<ToastContext.Provider value={{ toastProps, renderToast }}>
			{children}
		</ToastContext.Provider>
	)
}
