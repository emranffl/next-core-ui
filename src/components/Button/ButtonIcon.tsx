import Icon, { IconProps } from "@components/Icon"
import { cleanClassName } from "@utility/helper/clean-class-name"
import React, {
  LegacyRef,
  MouseEventHandler,
  forwardRef,
  memo,
  useCallback,
} from "react"
import { BUTTON_VARIANTS, BUTTON_SIZES } from "./"

export interface ButtonIconProps {
  /**
   * Icon props {} to render an icon inside the button, @see `Icon` component
   */
  icon: IconProps
  /**
   * The variant of the button, @see `VARIANTS` enum
   */
  variant?: keyof typeof BUTTON_VARIANTS
  /**
   * The size of the button, @see `SIZES` enum
   */
  size?: keyof typeof BUTTON_SIZES
  /**
   * The title of the button
   */
  title?: string
  /**
   * The class name of the button
   */
  className?: string
  /**
   * The function to be called when the button is clicked
   * @example
   * ```tsx
   * <ButtonIcon
   * onClick={() => console.log("clicked")}
   * />
   * ```
   */
  onClick: MouseEventHandler<MouseEvent>
  /**
   * The disabled state of the button
   */
  disabled?: true
  /**
   * The full width state of the button
   */
  fullWidth?: true
  /**
   * The outline state of the button
   */
  outline?: true
  /**
   * The id of the button
   */
  id?: string
  /**
   * The internal prop to pass reference to the component. Use `ref` prop to pass ref.
   */
  internalRef?: LegacyRef<HTMLButtonElement> | string | null
}

/**
 * @name ButtonIcon
 * @author Emran
 *
 * @example
 ```tsx
  // complete example with all props
  <ButtonIcon
    icon={{
      name: "heart",
      size: 20,
      color: "red",
    }}
    variant="warning"
    size="lg"
    title="Like"
    className="bg-transparent"
    onClick={() => console.log("clicked")}
    // disabled
    fullWidth
    outline
    id="like-button"
    // ref={ref}
  />
 ```
 */

const ButtonIcon = ({
  icon,
  variant = "primary",
  size = "md",
  title = undefined,
  className = undefined,
  onClick,
  disabled = undefined,
  fullWidth = undefined,
  outline = undefined,
  id = undefined,
  internalRef = undefined,
}: ButtonIconProps) => {
  const mergedIcon = {
    ...{
      name: "heart",
      size: 18,
      strokeWidth: 2,
      className: undefined,
      color: "currentColor",
    },
    ...icon,
  } as IconProps

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

  const handleClick = useCallback(
    (_event: any) => {
      onClick?.(_event)
    },
    [onClick]
  )

  return (
    <button
      title={title}
      type="button"
      disabled={disabled}
      onClick={handleClick}
      key={id}
      className={cleanClassName(defaultStyles)}
      id={id}
      ref={internalRef}
    >
      <Icon
        name={mergedIcon.name}
        color={mergedIcon.color}
        className={mergedIcon.className}
        size={mergedIcon.size}
        strokeWidth={mergedIcon.strokeWidth}
        disabled={disabled}
      />
    </button>
  )
}

export default memo(
  forwardRef((props: ButtonIconProps, ref: LegacyRef<HTMLButtonElement>) => (
    <ButtonIcon {...props} internalRef={ref} />
  ))
)
