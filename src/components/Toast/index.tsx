"use client"

import React, { MouseEventHandler, ReactNode, useEffect, useId, useState } from "react"
import ButtonIcon from "../Button/ButtonIcon"
import Icon, { IconProps } from "../Icon/index"
import Fade from "react-reveal/Fade"
import { cn } from "tailwind-cn"

export enum TOAST_VARIANTS {
  primary = "primary",
  secondary = "secondary",
  info = "info",
  success = "success",
  warning = "warning",
  danger = "danger",
}

export enum TOAST_POSITIONS {
  "top-right" = "top-right",
  "top-left" = "top-left",
  "bottom-left" = "bottom-left",
  "bottom-right" = "bottom-right",
}

export interface ToastParams {
  /**
   * The message to be displayed in the toast
   */
  message?: string
  /**
   * Any React nodes to be displayed in the toast instead of the message
   */
  children?: ReactNode
  /**
   * Additional class names to be applied to the toast container element
   */
  className?: string
  /**
   * The variant of toast to display, @see `TOAST_VARIANTS` enum
   */
  variant?: keyof typeof TOAST_VARIANTS
  /**
   * Whether to close the toast when it is clicked
   */
  closeOnClick?: true
  /**
   * Whether to display a close button for the toast
   */
  closeButtonVisibility?: boolean
  /**
   * Icon to be displayed in the toast, @see `Icon` component
   */
  icon?: IconProps
  /**
   * The duration for which the toast should be visible in milliseconds, or `false` to disable auto-closing
   * @default 3500(ms)
   */
  autoClose?: number | false
  /**
   * The position of the toast on the screen, @see `TOAST_POSITIONS` enum
   */
  position?: keyof typeof TOAST_POSITIONS
  /**
   * A function to be called when the toast is closed
   */
  onClose?: MouseEventHandler<MouseEvent>
  /**
   * The ID of the toast element
   */
  id?: string
  /**
   * The internal prop to pass reference to the component. Use `ref` prop to pass ref.
   */
  // internalRef?: LegacyRef<HTMLDivElement>
}

export type ToastProps = ToastParams &
  (
    | { message?: never; children: ToastParams["children"] }
    | { message: ToastParams["message"]; children?: never }
  )

/**
 * @name Toast
 * @author Emran
 * @type `Client Component`
 *
 * @example
 ```tsx
  // - rendering examples
  // render a toast with a message
  renderToast([
    {
      message: "This is a toast message",
    }
  ])
  // render a toast with children
  renderToast([
    {
      children: (
        <div className="flex place-content-center">
          <Icon name="telescope" size={18} strokeWidth={2} color="#6B7280" />
          <span className="ml-2">This is a toast message</span>
        </div>
      ),
    },
  ])
  // - implementation examples
  // complete example with all props
  <Toast
    message="This is a toast message"
    variant="primary"
    className="flex place-content-center"
    id="toast"
    icon={{
      name: "telescope",
      size: 18,
      strokeWidth: 2,
      color: "#6B7280",
    }}
    closeButtonVisibility={true}
    closeOnClick={true}
    autoClose={false}
    position="top-right"
    onClose={(e) => console.log("closed", e)}
  />
  ```
 */

const Toast = ({
  message,
  children = undefined,
  className = undefined,
  variant = "info",
  closeButtonVisibility = undefined,
  closeOnClick = undefined,
  icon = undefined,
  autoClose = undefined,
  position = "top-right",
  onClose = undefined,
  id = undefined,
}: // internalRef = undefined,
ToastProps) => {
  useEffect(() => {
    if (autoClose === false) return

    const timer = setTimeout((event) => {
      onCloseInternalCallback()
      onClose?.(event)
    }, autoClose ?? 3500)
    return () => clearTimeout(timer)
  }, [autoClose, onClose])

  /**
   * Merges the default icon properties with the icon passed in.
   * This allows the user to pass in only the properties they want to override.
   */
  const mergedIcon = {
    ...{
      name: undefined,
      size: 20,
      strokeWidth: 2,
      className: undefined,
      color: "currentColor",
    },
    ...icon,
  } as IconProps

  const uid = useId()
  const [visibilityState, updateVisibilityState] = useState(true)
  const onCloseInternalCallback = () => {
    updateVisibilityState(false)
  }

  return (
    <>
      {visibilityState ? (
        <Fade right={position?.includes("right")} left={position?.includes("left")} key={uid}>
          <div
            className={cn(
              "z-10 m-8 flex w-full max-w-md items-center space-x-4 rounded-lg border p-12 shadow-md dark:bg-slate-800 dark:text-slate-400",
              variant === "primary" && "border-primary-500 bg-primary-50 text-primary-900",
              variant === "secondary" && "border-secondary-500 bg-secondary-50 text-secondary-900",
              variant === "success" && "border-teal-500 bg-teal-100 text-teal-900",
              variant === "info" && "border-sky-500 bg-sky-200 text-sky-900",
              variant === "danger" && "border-rose-500 bg-rose-100 text-rose-900",
              variant === "warning" && "border-amber-500 bg-amber-100 text-amber-900",
              closeOnClick && "cursor-pointer",
              className
            )}
            id={id}
            // ref={internalRef}
            onClick={() => {
              closeOnClick && onCloseInternalCallback()
            }}
            onKeyUp={({ code }) => {
              if (code === "Escape") {
                closeOnClick && onCloseInternalCallback()
              }
            }}
            role="button"
            tabIndex={0}
          >
            <div className="flex w-full space-x-8">
              <>
                {children ?? (
                  <>
                    {/* // + Left Icon */}
                    <div className="flex">
                      <Icon
                        name={
                          mergedIcon.name ?? variant == "success"
                            ? "check-circle"
                            : variant == "warning"
                              ? "alert-triangle"
                              : variant == "danger"
                                ? "alert-hexagon"
                                : "alert-circle"
                        }
                        size={mergedIcon.size}
                        className="pointer-events-none my-auto"
                      />
                    </div>
                    {/* // + message */}
                    <span className="inline-flex shrink items-center whitespace-pre-wrap text-sm font-normal">
                      {message}
                    </span>
                  </>
                )}

                {/* // + Close Button */}
                {(closeButtonVisibility == true || autoClose == false) && !closeOnClick && (
                  <div className="!ml-auto">
                    <ButtonIcon
                      variant="link"
                      onClick={(event) => {
                        onCloseInternalCallback()
                        onClose?.(event)
                      }}
                      icon={{
                        name: "x-close",
                        color: mergedIcon.color,
                      }}
                      className="bg-transparent !p-4"
                    />
                  </div>
                )}
              </>
            </div>
          </div>
        </Fade>
      ) : null}
    </>
  )
}

export default Toast
// export default memo(
//   forwardRef((props: ToastProps, ref: LegacyRef<HTMLDivElement>) => (
//     <Toast {...props} internalRef={ref} />
//   ))
// )
