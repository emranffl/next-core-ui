"use client"

import React, { LegacyRef, MouseEventHandler, forwardRef, memo, useCallback } from "react"
import ButtonIcon from "../Button/ButtonIcon"
import { cn } from "tailwind-cn"

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
        className={cn(
          "flex w-max select-none place-items-center font-semibold text-slate-500 active:text-slate-200",
          shape == "pill" ? "rounded-3xl" : "rounded",

          onCloseIconClick
            ? size === "sm"
              ? "py-0 pe-4 ps-6 text-xs"
              : size === "md"
                ? "py-4 pe-4 ps-8 text-sm"
                : size === "lg"
                  ? "py-6 pe-6 ps-12 text-base"
                  : null
            : size === "sm"
              ? "px-6 py-2 text-xs"
              : size === "md"
                ? "px-8 py-4 text-sm"
                : size === "lg"
                  ? "px-12 py-6 text-base"
                  : null,
          variant === "primary"
            ? "bg-primary-500 active:bg-primary-600 text-white"
            : variant === "secondary"
              ? "bg-secondary-500 active:bg-secondary-600 text-white"
              : variant === "info"
                ? "bg-sky-500 text-white active:bg-sky-600"
                : variant === "success"
                  ? "bg-teal-500 text-white active:bg-teal-600"
                  : variant === "warning"
                    ? "bg-amber-500 text-white active:bg-amber-600"
                    : variant === "danger"
                      ? "bg-rose-500 text-white active:bg-rose-600"
                      : variant === "neutral"
                        ? "bg-slate-300 text-slate-600 active:bg-slate-500"
                        : null,
          className
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
            className={cn("relative ms-4 !p-0", size === "sm" ? "-right-1" : null)}
          />
        )}
      </span>
    </>
  )
}

export default memo(
  forwardRef((props: ChipProps, ref: LegacyRef<HTMLSpanElement>) => <Chip {...props} internalRef={ref} />)
)
