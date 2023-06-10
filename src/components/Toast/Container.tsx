"use client"

import React, { useContext } from "react"
import Toast, { ToastProps, TOAST_POSITIONS as ToastPositions } from "."
import { ToastContext } from "./Context"
import { classManipulator } from "../../utility/helpers/class-manipulator"

const ToastContainer = () => {
	const { toastProps } = useContext(ToastContext)

	/**
	 *
	 * This code reduces the toastProps array into an object
	 * with the position as the key and an array of ToastProps
	 * as the value.
	 * @emits
	 * const toastsByPositions = {
	 *  "top-right": [toastProp, ...],
	 *  "bottom-left": [toastProp]
	 * }
	 */

	const toastsByPositions =
		toastProps?.reduce(
			(
				acc: {
					[key: string]: ToastProps[]
				},
				toastProp: ToastProps
			) => {
				const position = toastProp.position ?? ToastPositions["top-right"]

				if (!acc[position]) {
					acc[position] = []
				}

				acc[position].push(toastProp)
				return acc
			},
			{}
		) || {}

	// console.log(toastsByPositions)

	return (
		<>
			{toastProps
				? Object.keys(toastsByPositions).map((position, index) => (
						<div
							key={index}
							className={classManipulator(
								`flex flex-col fixed ${
									position === "top-left"
										? "top-10 left-20"
										: position === "bottom-left"
										? "bottom-10 left-20"
										: position === "bottom-right"
										? "bottom-10 right-20"
										: position === "top-right"
										? "top-10 right-20"
										: null
								}`
							)}
						>
							{toastsByPositions[position].map((props, index) => {
								return <Toast key={index} {...props} />
							})}
						</div>
				  ))
				: null}
		</>
	)
}

export default ToastContainer
