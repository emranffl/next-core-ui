import "material-icons/iconfont/material-icons.css"
import "bootstrap-icons/font/bootstrap-icons.css"

import React, { LegacyRef, forwardRef, memo } from "react"
import { classManipulator } from "../../utility/helpers/class-manipulator"
import { BOOTSTRAP_ICON_NAMES } from "./bootstrap-icons/names"
import { MATERIAL_ICON_NAMES } from "./material-icons/names"
import { OUTLINE_ICON_NAMES } from "./outline-icons/names"

// * Type declaration for icon names, used to restrict the type of icon names that can be used in this components.
type BootstrapIconName = (typeof BOOTSTRAP_ICON_NAMES)[number]
type MaterialIconName = (typeof MATERIAL_ICON_NAMES)[number]
type OutlineIconName = (typeof OUTLINE_ICON_NAMES)[number]

export interface IconProps {
  /**
   * Icon name from `bootstrap-icons`, `material-icons`, or `outline-icons`
   * @type {string}
   * @example
   * name="heart"
   */
  name: BootstrapIconName | MaterialIconName | OutlineIconName
  /**
   * Icon size in pixels
   */
  size?: number
  /**
   * Hex color of icon
   * @default currentColor
   */
  color?: string
  /**
   * Icon stroke width in pixels, default: `2`, only applicable for outline icons
   * @type {number}
   * @default 2
   * @example
   * strokeWidth={3}
   */
  strokeWidth?: number
  /**
   * Disable icon, assign `true` to disable
   * @type {boolean}
   * @default false
   * @example
   * disabled={true}
   * or
   * disabled
   */
  disabled?: true
  /**
   * Additional classes to add to SVG element
   * @type {string}
   * @default <empty string>
   * @example
   * className="m-8"
   */
  className?: string
  /**
   * The id of the icon
   */
  id?: string
  /**
   * The internal prop to pass reference to the component. Use `ref` prop to pass ref.
   */
  internalRef?: LegacyRef<HTMLElement | HTMLSpanElement | SVGSVGElement>
}

/**
 * @name Icon
 * @author Emran
 * @type `Server Component`
 *
 * @example
 ```tsx
  <Icon
    name="heart"
  />
  // or
  <Icon
    name="bi-alarm"
  />
  // or
  <Icon
    name="mi_search"
  />
  // complete example with all props
  <Icon
    name="search"
    size={20}
    color="currentColor"
    strokeWidth={3}
    disabled={true}
    className="m-8"
  />
  ```
 */

const Icon = ({
  name = "heart",
  size = 40,
  color = "currentColor",
  strokeWidth = 2,
  disabled = undefined,
  className = undefined,
  id = undefined,
  internalRef = undefined,
}: IconProps) => {
  return (
    <>
      {name.startsWith("bi-", 0) ? (
        // + bootstrap icons
        <i
          style={{ fontSize: size, color: color }}
          className={classManipulator(
            `${name} box-content inline-flex shrink-0 grow-0 rounded m-0 ${
              disabled && "hover:cursor-not-allowed"
            } ${className}`
          )}
          id={id}
          ref={internalRef as LegacyRef<HTMLElement>}
        />
      ) : name.startsWith("mi_", 0) ? (
        // + material icons
        <span
          style={{ fontSize: size, color: color }}
          className={classManipulator(
            `material-icons box-content inline-flex shrink-0 grow-0 rounded ${
              disabled && "hover:cursor-not-allowed hover:stroke-slate-300"
            } ${className} `
          )}
          id={id}
          ref={internalRef as LegacyRef<HTMLSpanElement>}
        >
          {name.replace(/mi_/g, "")}
        </span>
      ) : (
        // + default outlined icon
        <svg
          aria-disabled={disabled}
          className={classManipulator(`box-content inline-flex shrink-0 grow-0 rounded ${className}
			${
        disabled &&
        "stroke-slate-300 hover:cursor-not-allowed hover:stroke-slate-300"
      }
			`)}
          width={size}
          height={size}
          fill="none"
          stroke={color}
          // stroke={disabled ? '' : iconColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          id={id}
          ref={internalRef as LegacyRef<SVGSVGElement>}
        >
          <use xlinkHref={`./outline-icons-sprite.svg#${name}`} />
        </svg>
      )}
    </>
  )
}

export default memo(
  forwardRef(
    (
      props: IconProps,
      ref: LegacyRef<HTMLElement | HTMLSpanElement | SVGSVGElement>
    ) => <Icon {...props} internalRef={ref} />
  )
)
