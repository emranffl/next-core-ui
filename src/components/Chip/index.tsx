import React, {
  LegacyRef,
  MouseEventHandler,
  forwardRef,
  memo,
  useCallback,
} from "react"
import ButtonIcon from "../../components/Button/ButtonIcon"
import { classManipulator } from "../../utility/helpers/class-manipulator"

export enum CHIP_SIZES {
  sm = "sm",
  md = "md",
  lg = "lg",
}

export enum CHIP_SHAPES {
  pill = "pill",
  rounded = "rounded",
}

export enum CHIP_VARIANTS {
  primary = "primary",
  secondary = "secondary",
  info = "info",
  success = "success",
  warning = "warning",
  danger = "danger",
  neutral = "neutral",
}

export interface ChipProps {
  /**
   * The text to be displayed
   */
  text: string
  /**
   * The rendering size
   * @default md
   * @type sm | md | lg
   * @example
   * ```tsx
   * <Chip size='sm' />
   * ```
   */
  size?: keyof typeof CHIP_SIZES
  /**
   * The shape of the chip
   * @default rounded
   * @type rounded | pill
   * @example
   * ```tsx
   * <Chip shape='pill' />
   * ```
   */
  shape?: keyof typeof CHIP_SHAPES
  /**
   * The variant of the chip
   * @default neutral
   * @example
   * ```tsx
   * <Chip variant='primary' />
   * ```
   */
  variant?: keyof typeof CHIP_VARIANTS
  /**
   * Additional class names
   */
  className?: string
  /**
   * The function to be called when the close icon is clicked
   */
  onCloseIconClick?: MouseEventHandler<MouseEvent>
  /**
   * The id of the component
   */
  id?: string
  /**
   * The internal prop to pass reference to the component. Use `ref` prop to pass ref.
   */
  internalRef?: LegacyRef<HTMLSpanElement>
}

/**
 * @name Chip
 * @author Emran
 * @type `Client Component`
 *
 * @example
  // complete example with all props
  ```tsx
  <Chip
    text="CHIP"
    size="md"
    shape="rounded"
    variant="neutral"
    className="text-slate-500"
    onCloseIconClick={(event) => {}}
    id="chip"
    // ref={ref}
  />
  // onCloseIconClick usage
  {chipVisibility && (
    <Chip
      text="CHIP"
      onCloseIconClick={(event) => {
        updateChipVisibility(false)
      }}
    />
  )}
  ```
 */

const Chip = ({
  text,
  size = "md",
  shape = "rounded",
  variant = "neutral",
  className = undefined,
  onCloseIconClick = undefined,
  id,
  internalRef,
}: ChipProps) => {
  const handleClick = useCallback(
    (_event: any) => {
      onCloseIconClick?.(_event)
    },
    [onCloseIconClick]
  )

  return (
    <>
      <span
        className={classManipulator(
          `flex place-items-center w-max font-semibold text-slate-500 active:text-slate-200
          ${shape == "pill" ? "rounded-3xl" : "rounded"}
          ${
            onCloseIconClick
              ? size === "sm"
                ? "ps-6 pe-4 py-0 text-xs"
                : size === "md"
                ? "ps-8 pe-4 py-4 text-sm"
                : size === "lg"
                ? "ps-12 pe-6 py-6 text-base"
                : null
              : size === "sm"
              ? "px-6 py-2 text-xs"
              : size === "md"
              ? "px-8 py-4 text-sm"
              : size === "lg"
              ? "px-12 py-6 text-base"
              : null
          }
          ${
            variant === "primary"
              ? "text-white bg-primary-500 active:bg-primary-600"
              : variant === "secondary"
              ? "text-white bg-secondary-500 active:bg-secondary-600"
              : variant === "info"
              ? "text-white bg-sky-500 active:bg-sky-600"
              : variant === "success"
              ? "text-white bg-teal-500 active:bg-teal-600"
              : variant === "warning"
              ? "text-white bg-amber-500 active:bg-amber-600"
              : variant === "danger"
              ? "text-white bg-rose-500 active:bg-rose-600"
              : variant === "neutral"
              ? "text-slate-600 bg-slate-300 active:bg-slate-500"
              : null
          }
          ${className}`
        )}
        id={id}
        ref={internalRef}
      >
        {text}
        {onCloseIconClick && (
          <ButtonIcon
            onClick={handleClick}
            icon={{
              name: "x",
              size: 20,
              color: variant === "neutral" ? "grey" : "white",
            }}
            variant="link"
            className={classManipulator(
              `relative !p-0 ms-4 ${size === "sm" ? "-right-1" : null}`
            )}
          />
        )}
      </span>
    </>
  )
}

export default memo(
  forwardRef((props: ChipProps, ref: LegacyRef<HTMLSpanElement>) => (
    <Chip {...props} internalRef={ref} />
  ))
)
