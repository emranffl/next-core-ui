import Icon, { IconProps } from "../../components/Icon"
import React, { LegacyRef, forwardRef, memo } from "react"
import { classManipulator } from "../../utility/helpers/class-manipulator"

export enum BADGE_VARIANTS {
  primary = "primary",
  secondary = "secondary",
  info = "info",
  success = "success",
  warning = "warning",
  danger = "danger",
  neutral = "neutral",
}

export enum BADGE_ICON_POSITIONS {
  left = "left",
  right = "right",
}

type Icon = IconProps & {
  position?: keyof typeof BADGE_ICON_POSITIONS
}

export interface BadgeProps {
  /**
   * The text to display on the badge
   */
  text: {
    /**
     * The text to display on the badge
     */
    value: string
    /**
     * The class names for the badge text
     */
    className?: string
  }
  /**
   * The visual variant of the badge, @see `BADGE_VARIANTS` enum
   */
  variant?: keyof typeof BADGE_VARIANTS
  /**
   * Icon props {} to render an icon inside the button, @see `Icon` component
   */
  icon?: Icon
  /**
   * The class names for the badge component
   */
  className?: string
  /**
   * The id for the badge component
   */
  id?: string
  /**
   * The internal prop to pass reference to the component. Use `ref` prop to pass ref.
   */
  internalRef?: LegacyRef<HTMLSpanElement>
}

/**
 * @name Badge
 * @author Emran
 * @type `Server Component`
 *
 * @example
 ```tsx
  // complete example with all props
  <Badge
    text={{
      value: "Badge",
      className: "text-sm",
    }}
    variant="primary"
    className="flex place-content-center"
    icon={{
      name: "telescope",
      size: 18,
      strokeWidth: 2,
      color: "#6B7280",
    }}
    id="badge"
    // ref={ref}
  />
  ```
 */

const Badge = ({
  text,
  variant = "primary",
  icon = undefined,
  className = undefined,
  id = undefined,
  internalRef = undefined,
}: BadgeProps) => {
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

  const ConditionalIcon = ({
    iconPosition,
  }: {
    iconPosition: keyof typeof BADGE_ICON_POSITIONS
  }) => {
    return mergedIcon.name && mergedIcon.position == iconPosition ? (
      <Icon
        name={mergedIcon.name}
        size={mergedIcon.size}
        color={mergedIcon.color}
        strokeWidth={mergedIcon.strokeWidth}
        className={classManipulator(
          `${iconPosition === "right" ? "ml-6" : "mr-6"} ${
            mergedIcon.className
          } pointer-events-none`
        )}
      />
    ) : null
  }

  return (
    <span
      className={classManipulator(
        `${
          variant == "primary"
            ? "rounded border border-primary-200 bg-primary-300 px-8 text-slate-50 dark:bg-primary-200 dark:text-primary-800"
            : variant == "secondary"
            ? "rounded border border-secondary-200 bg-secondary-200 px-8 text-slate-50 dark:bg-secondary-200 dark:text-secondary-800"
            : variant == "success"
            ? "rounded border border-emerald-200 bg-emerald-100 px-8 text-emerald-800 dark:bg-emerald-200 dark:text-emerald-800"
            : variant == "danger"
            ? "rounded border border-rose-200 bg-rose-100 px-8 text-rose-800 dark:bg-rose-200 dark:text-rose-800"
            : variant == "info"
            ? "rounded border border-sky-200 bg-sky-100 px-8 text-sky-800 dark:bg-sky-200 dark:text-sky-800"
            : variant == "neutral"
            ? "rounded border border-slate-200 bg-slate-100 px-8 text-slate-600 dark:text-slate-600"
            : variant == "warning"
            ? "rounded border border-amber-200 bg-amber-100 px-8 text-amber-600 dark:text-amber-600"
            : null
        } inline-flex place-content-center place-items-center py-2 text-sm font-medium ${className}`
      )}
      id={id}
      ref={internalRef}
    >
      <ConditionalIcon iconPosition="left" />
      <span className={text?.className && classManipulator(text.className)}>
        {text.value}
      </span>
      <ConditionalIcon iconPosition="right" />
    </span>
  )
}

export default memo(
  forwardRef((props: BadgeProps, ref: LegacyRef<HTMLSpanElement>) => (
    <Badge {...props} internalRef={ref} />
  ))
)
