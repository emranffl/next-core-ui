import React from "react"
import { useUniqueId } from "../../../utility/helpers/useUniqueId"
import { cn } from "tailwind-cn"
import Label from "../Label"

export enum INPUT_SHAPES {
  pill = "pill",
  rigid = "rigid",
  rounded = "rounded",
}

export enum INPUT_SIZES {
  sm = "sm",
  md = "md",
  lg = "lg",
}

// @ts-expect-error due to overloading of the type
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The classes of the input container
   */
  containerClassName?: string
  /**
   * The label of the input, either a string or a React node with a default prop
   *
   * @example
   * ```tsx
   * <Input label="This is a label" />
   * // or
   * <Input label={{ default: "This is a label", className: "text-rose-500" }} />
   * ```
   */
  label?: string | (Omit<Parameters<typeof Label>[0], "children"> & { default?: React.ReactNode })
  /**
   * Shape of the input
   * @default "rounded"
   */
  shape?: keyof typeof INPUT_SHAPES
  /**
   * Size of the input
   * @default "md"
   */
  size?: keyof typeof INPUT_SIZES
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ containerClassName, className, type, label, shape = "rounded", size = "md", ...props }, ref) => {
    const id = useUniqueId()

    return (
      <div className={cn("w-full", containerClassName)}>
        {label && (
          <Label
            htmlFor={props.id ?? id}
            required={props.required}
            {...(typeof label === "object" ? label : {})}
          >
            {typeof label === "string" ? label : label.default}
          </Label>
        )}
        <input
          id={id}
          type={type}
          className={cn(
            "flex w-full border border-slate-700 bg-transparent px-5 py-2 text-slate-700 ring-offset-transparent placeholder:text-slate-400 read-only:!ring-0 read-only:!ring-offset-0 focus-visible:border-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-300 dark:text-slate-100 dark:disabled:text-white",
            type === "file" ? "file:border-0 file:bg-transparent file:text-sm file:font-medium" : null,
            INPUT_SIZES[size] === INPUT_SIZES.sm && "h-36 text-sm",
            INPUT_SIZES[size] === INPUT_SIZES.md && "h-44 text-base",
            INPUT_SIZES[size] === INPUT_SIZES.lg && "h-52 text-lg",
            shape === "pill" && "rounded-full px-8",
            shape === "rigid" && "rounded-none",
            shape === "rounded" && "rounded-md",
            props.disabled && "cursor-not-allowed !bg-slate-200 opacity-50 hover:hover:cursor-not-allowed",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export default Input
