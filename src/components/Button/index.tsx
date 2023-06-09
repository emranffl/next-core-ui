import React, {
	forwardRef,
	HTMLAttributeAnchorTarget,
	LegacyRef,
	memo,
	MouseEvent,
	MouseEventHandler,
	Ref,
	useCallback,
} from "react"
import Spinner from "../../components/Spinner"
import Icon, { IconProps } from "../../components/Icon"
import Link from "next/link"
import { Url } from "node:url"
import { classManipulator } from "../../utility/helpers/class-manipulator"

export enum BUTTON_VARIANTS {
	primary = "primary",
	secondary = "secondary",
	info = "info",
	success = "success",
	warning = "warning",
	danger = "danger",
	neutral = "neutral",
	link = "link",
}

export enum BUTTON_SIZES {
	sm = "sm",
	md = "md",
	lg = "lg",
}

export enum BUTTON_ICON_POSITIONS {
	left = "left",
	right = "right",
}

export enum BUTTON_TYPES {
	button = "button",
	reset = "reset",
	submit = "submit",
}

type Icon = IconProps & {
	position?: keyof typeof BUTTON_ICON_POSITIONS
}

export interface ButtonParams {
	/**
	 * The text {} that takes the following params
	 * @param {string} [value] The text to display on the button
	 * @param {string} [className] The class names for the button text
	 *
	 * @example
	 * ```tsx
	 * <Button text={{ }} />
	 * ```
	 */
	text: {
		/**
		 * The text to display on the button
		 * @example
		 * ```tsx
		 * <Button text={{ value: "Click me" }} />
		 * ```
		 */
		value: string
		/**
		 * The class names for the button text
		 * @example
		 * ```tsx
		 * <Button text={{ value: "Click me" , className: "uppercase" }} />
		 * ```
		 */
		className?: string
	}
	/**
	 * Disables the button
	 */
	disabled?: true
	/**
	 * The variant of the button, @see `BUTTON_VARIANTS` enum
	 */
	variant?: keyof typeof BUTTON_VARIANTS
	/**
	 * The outline state of the button
	 */
	outline?: true
	/**
	 * The full width state of the button
	 */
	fullWidth?: true
	/**
	 * The loading state of the button
	 */
	spinnerVisibility?: true
	/**
	 * The size of the button, @see `BUTTON_SIZES` enum
	 */
	size?: keyof typeof BUTTON_SIZES
	/**
	 * Icon props {} to render an icon inside the button, @see `Icon` component
	 */
	icon?: Icon
	/**
	 * The type of the button, @see `BUTTON_TYPES` enum
	 */
	type?: keyof typeof BUTTON_TYPES
	/**
	 * The class names for the button component
	 */
	className?: string
	/**
	 * The onClick event handler
	 */
	onClick?: MouseEventHandler<MouseEvent>
	/**
	 * The link {} that takes the following params
	 * @param {string} [href] The href for the link
	 * @param {string} [as] The mask for the link
	 * @param {string} [target] The target for the link
	 * @param {boolean} [replace] The replace state for the link weather to replace the current history state or not
	 * @param {string} [rel] The rel for the link
	 *
	 * @example
	 * ```tsx
	 * <Button
	 * link={{ }}
	 * />
	 * ```
	 */
	link?: {
		/**
		 * The href for the link
		 * @example
		 * ```tsx
		 * <Button
		 * link={{
		 * href: "/",
		 * }}
		 * />
		 * ```
		 */
		href: string | Url
		/**
		 * The mask for the link
		 * @example
		 * ```tsx
		 * <Button
		 * link={{
		 * href: "/",
		 * as: "/home",
		 * }}
		 * ```
		 */
		as?: string | Url
		/**
		 * The target for the link
		 * @example
		 * ```tsx
		 * <Button
		 *  link={{
		 *   href: "/",
		 *  target: "_blank",
		 * }}
		 * />
		 * ```
		 */
		target?: HTMLAttributeAnchorTarget
		/**
		 * The replace state for the link weather to replace the current history state or not
		 * @example
		 * ```tsx
		 * <Button
		 * link={{
		 * href: "/",
		 * replace: true,
		 * }}
		 * />
		 * ```
		 */
		replace?: true
		/**
		 * The rel for the link
		 * @example
		 * ```tsx
		 * <Button
		 * link={{
		 * href: "/",
		 * rel: "noopener noreferrer",
		 * }}
		 * />
		 * ```
		 */
		rel?: string
	}
	/**
	 * The id for the button component
	 */
	id?: string
	/**
	 * The internal prop to pass reference to the component. Use `ref` prop to pass ref.
	 */
	internalRef?:
		| Ref<HTMLAnchorElement>
		| LegacyRef<HTMLButtonElement>
		| string
		| null
}

export type ButtonProps =
	| (ButtonParams & {
			link: NonNullable<ButtonParams["link"]>
	  })
	| (ButtonParams & {
			onClick: NonNullable<ButtonParams["onClick"]>
	  })

/**
 * @name Button
 * @author Emran
 * @type `Client Component`
 *
 * @example
 ```tsx
  // complete example with all props
  <Button
    variant="primary"
    type="submit"
    size="lg"
    text={
      value: "Button",
      className: "text-sm",
    }
    id="btn_1"
    // ref={ref}
    className="rounded-full"
    icon={{
      name: "bi-alarm",
      position: "right",
      size: 20,
      strokeWidth: 2,
      color: "currentColor",
      className: "ml-10",
      src: "bootstrap",
    }}
    // spinnerVisibility // - visibly exclusive with button content
    link={{
      href: "/home",
      as: "/",
      target: "_blank",
      replace: true,
      rel: "noopener noreferrer",
    }}
    onClick={() => {}}
    outline
    fullWidth
    disabled
  />
  ```
 */

const Button = ({
	text,
	disabled = undefined,
	variant = "primary",
	outline = undefined,
	fullWidth = undefined,
	spinnerVisibility = undefined,
	size = "md",
	icon = undefined,
	type = "button",
	className = undefined,
	onClick,
	link = undefined,
	id = undefined,
	internalRef = undefined,
}: ButtonProps) => {
	const handleClick = useCallback(
		(_event: any) => {
			onClick?.(_event)
		},
		[onClick]
	)

	/**
	 * Merges the default icon properties with the icon passed in.
	 * This allows the user to pass in only the properties they want to override.
	 */
	const mergedIcon = {
		...{
			name: undefined,
			size: 18,
			position: "left",
			strokeWidth: 2,
			className: undefined,
			color: "currentColor",
		},
		...icon,
	}

	/**
	 * If the `icon` prop is provided use the `icon.size` prop
	 * of the icon prop if overridden. If not, use the size prop
	 * to determine the size of the icon.
	 * Otherwise, use the pre-defined `mergedIcon.size` prop of
	 * the `mergedIcon` object.
	 */
	const iconSize =
		icon?.size ??
		(size
			? size == "sm"
				? 14
				: size == "lg"
				? 20
				: mergedIcon.size
			: mergedIcon.size)

	const ConditionalIcon = ({
		iconPosition,
	}: {
		iconPosition: keyof typeof BUTTON_ICON_POSITIONS
	}) => {
		return mergedIcon.name &&
			mergedIcon.position == iconPosition &&
			!spinnerVisibility ? (
			<Icon
				name={mergedIcon.name}
				size={iconSize}
				color={mergedIcon.color}
				strokeWidth={mergedIcon.strokeWidth}
				className={classManipulator(
					`${iconPosition === "right" ? "ml-6" : "mr-6"} ${
						disabled && "hover:cursor-not-allowed"
					} ${mergedIcon.className} pointer-events-none`
				)}
				disabled={disabled}
			/>
		) : null
	}
	const ConditionalContent = () => {
		return (
			<>
				{/* //+ button icon - left */}
				<ConditionalIcon iconPosition="left" />

				{spinnerVisibility ? (
					// + spinner
					<Spinner
						size={20}
						variant="primary"
						trackColor="white"
						className="pointer-events-none"
					/>
				) : (
					<span
						className={classManipulator(
							`whitespace-nowrap leading-0 ${text.className}`
						)}
					>
						{/* //+ button text */}
						{text.value}
					</span>
				)}

				{/* //+ button icon - right */}
				<ConditionalIcon iconPosition="right" />
			</>
		)
	}

	const defaultStyles = `
      ${fullWidth ? "w-full justify-center" : null}
      ${
				!disabled
					? variant === "primary"
						? "btn-primary"
						: variant === "secondary"
						? "btn-secondary"
						: variant === "success"
						? "btn-success"
						: variant === "info"
						? "btn-info"
						: variant === "warning"
						? "btn-warning"
						: variant === "danger"
						? "btn-danger"
						: variant === "neutral"
						? "btn-neutral"
						: variant === "link"
						? "btn-link"
						: "btn-primary"
					: outline === true
					? "btn-disabled-outline"
					: "btn-disabled"
			}

      ${
				size === "lg"
					? "h-52 px-24 text-sm md:text-base"
					: size === "md"
					? "h-44 px-16 text-sm md:text-base"
					: size === "sm"
					? "h-28 px-12 text-sm"
					: null
			}

      ${
				!disabled && outline === true && variant == "primary"
					? "btn-primary-outline"
					: outline === true && variant == "secondary"
					? "btn-secondary-outline"
					: outline === true && variant == "success"
					? "btn-success-outline"
					: outline === true && variant == "info"
					? "btn-info-outline"
					: outline === true && variant == "warning"
					? "btn-warning-outline"
					: outline === true && variant == "danger"
					? "btn-danger-outline"
					: outline === true && variant == "neutral"
					? "btn-neutral-outline"
					: null
			}

		inline-flex items-center justify-center rounded-md font-normal leading-none focus-visible:outline-0 ${className}`

	return link ? (
		<Link
			as={link.as}
			href={link.href}
			target={link.target}
			replace={link.replace}
			rel={link.rel}
			className={classManipulator(defaultStyles)}
			onClick={handleClick}
			id={id}
			ref={internalRef as Ref<HTMLAnchorElement>}
		>
			<ConditionalContent />
		</Link>
	) : (
		// * default render as button
		<button
			disabled={disabled}
			type={type}
			onClick={handleClick}
			className={classManipulator(defaultStyles)}
			id={id}
			ref={internalRef as LegacyRef<HTMLButtonElement>}
		>
			<ConditionalContent />
		</button>
	)
}

export default memo(
	forwardRef(
		(
			props: ButtonProps,
			ref: Ref<HTMLAnchorElement> | LegacyRef<HTMLButtonElement>
		) => <Button {...props} internalRef={ref} />
	)
)
