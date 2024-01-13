import React, { LegacyRef, forwardRef, memo } from "react"
import Icon, { IconProps } from "../Icon"
import { BADGE_VARIANTS } from "."
import { cn } from "tailwind-cn"

export interface BadgeIconProps {
  /**
   * Icon props {} to render an icon inside the button, @see `Icon` component
   */
  icon: IconProps
  /**
   * The visual variant of the badge, @see `BADGE_VARIANTS` enum
   */
  variant?: keyof typeof BADGE_VARIANTS
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
 * @name BadgeIcon
 * @author Emran
 * @type `Server Component`
 *
 * @example
 ```tsx
  // complete example with all props
  <BadgeIcon
    icon={{
      name: "telescope",
      size: 18,
      strokeWidth: 2,
      color: "#6B7280",
    }}
    variant="primary"
    className="flex place-content-center"
    id="badge-icon"
  />
 ```
 */

const BadgeIcon = ({
  icon,
  variant = "primary",
  className = undefined,
  id = undefined,
  internalRef = undefined,
}: BadgeIconProps) => {
  /**
   * Merges the default icon properties with the icon passed in.
   * This allows the user to pass in only the properties they want to override.
   */
  const mergedIcon = {
    ...{
      name: undefined,
      size: 18,
      strokeWidth: 2,
      className: undefined,
      color: "currentColor",
    },
    ...icon,
  } as IconProps

  return (
    <span
      className={cn(
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
                      : null,
        "flex place-content-center place-items-center py-4 text-sm font-medium",
        className
      )}
      id={id}
      ref={internalRef}
    >
      <Icon
        name={mergedIcon.name}
        size={mergedIcon.size}
        color={mergedIcon.color}
        strokeWidth={mergedIcon.strokeWidth}
        className={cn(mergedIcon.className, "pointer-events-none")}
      />
    </span>
  )
}

export default memo(
  forwardRef((props: BadgeIconProps, ref: LegacyRef<HTMLSpanElement>) => (
    <BadgeIcon {...props} internalRef={ref} />
  ))
)
