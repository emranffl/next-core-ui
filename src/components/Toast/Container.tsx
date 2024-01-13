"use client"

import React, { useContext } from "react"
import Toast, { ToastProps, TOAST_POSITIONS as ToastPositions } from "."
import { ToastContext } from "./Context"
import { cn } from "tailwind-cn"

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
              className={cn(
                "fixed flex flex-col",
                position === "top-left"
                  ? "left-20 top-10"
                  : position === "bottom-left"
                    ? "bottom-10 left-20"
                    : position === "bottom-right"
                      ? "bottom-10 right-20"
                      : position === "top-right"
                        ? "right-20 top-10"
                        : null
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
