import React, { LegacyRef, forwardRef, memo } from "react"
import { cleanClassName } from "@utility/helper/clean-class-name"

export enum VARIANTS {
	primary = "primary",
	secondary = "secondary",
	success = "success",
	warning = "warning",
	danger = "danger",
	info = "info",
	neutral = "neutral",
}

export enum TRACK_COLORS {
	white = "white",
	light = "light",
	dark = "dark",
}

export enum POSITIONS {
	top = "top",
	bottom = "bottom",
}

export interface SpinnerProps {
	/**
	 * The variant of the spinner, @see `VARIANTS` enum
	 */
	variant?: keyof typeof VARIANTS
	/**
	 * The size of the spinner in pixels
	 */
	size?: number
	/**
	 * The track color of the spinner, @see `TRACK_COLORS` enum
	 */
	trackColor?: keyof typeof TRACK_COLORS
	/**
	 * The class names of the spinner
	 */
	className?: string
	/**
	 * The text to show with the spinner
	 */
	text?: {
		/**
		 * The text to show with the spinner
		 */
		value: string
		/**
		 * The position of the text, @see `POSITIONS` enum
		 */
		position?: keyof typeof POSITIONS
	}
	/**
	 * The id of the spinner
	 */
	id?: string
	/**
	 * The internal prop to pass reference to the component. Use `ref` prop to pass ref.
	 */
	internalRef?: LegacyRef<HTMLDivElement>
}

/**
 * @name Spinner
 * @author Emran
 *
 * @example
 ```tsx
  // complete example with all props
  <Spinner
    variant="primary"
    size={20}
    trackColor="light"
    className="m-8 w-20"
    text={{
      value: "Loading", // dots are added by default
      position: "top"
    }}
    id="spinner"
    // ref={ref}
  />
 ```
 */

const Spinner = ({
	variant = "primary",
	size = 40,
	trackColor = "light",
	className = undefined,
	text = undefined,
	id = undefined,
	internalRef = undefined,
}: SpinnerProps) => {
	const mergeText = {
		value: text?.value || "Loading",
		position: text?.position || "bottom",
	} as SpinnerProps["text"]

	// + spinner text content
	const Content = () => (
		<p className="text-lg text-primary-500 transition-all">
			{mergeText?.value}
			<span className="ml-2 animate-pulse font-bold">.</span>
			<span className="ml-1 animate-pulse font-bold">.</span>
			<span className="ml-1 animate-pulse font-bold">.</span>
		</p>
	)

	return (
		<div
			className={cleanClassName(
				`flex gap-16 ${
					mergeText?.position === "top" || mergeText?.position === "bottom"
						? "flex-col"
						: "align-items-center"
				} justify-center items-center`
			)}
			id={id}
			ref={internalRef}
		>
			{text && mergeText?.position === "top" && <Content />}

			<svg
				role="status"
				className={cleanClassName(
					`${
						variant == "primary"
							? "fill-primary-400"
							: variant == "secondary"
							? "fill-secondary-400"
							: variant == "success"
							? "fill-green-400"
							: variant == "danger"
							? "fill-rose-400"
							: variant == "warning"
							? "fill-amber-400"
							: variant == "info"
							? "fill-sky-400"
							: variant == "neutral"
							? "fill-slate-400"
							: null
					} ${
						trackColor == "light"
							? "text-slate-200 dark:text-slate-600"
							: trackColor == "dark"
							? "text-slate-600 dark:text-slate-400"
							: trackColor == "white"
							? "text-white dark:text-slate-400"
							: null
					} w-${size} min-w-${size} min-h-${size} animate-spin dark:text-gray-600 ${className}`
				)}
				viewBox="0 0 100 101"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
					fill="currentColor"
				/>
				<path
					d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
					fill="currentFill"
				/>
			</svg>

			{text && mergeText?.position === "bottom" && <Content />}
		</div>
	)
}

export default memo(
	forwardRef((props: SpinnerProps, ref: LegacyRef<HTMLDivElement>) => (
		<Spinner {...props} internalRef={ref} />
	))
)
