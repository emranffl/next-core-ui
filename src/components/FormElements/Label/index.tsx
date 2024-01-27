import React, { memo } from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "tailwind-cn"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

/**
 * The `Label` component is used to label form elements.
 * @author Emran
 * @type `Server Component`
 *
 * @example
 * ```tsx
 * <Label>This is a label</Label>
 * ```
 */
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants> & { required?: boolean }
>(({ className, required, ...props }, ref) => (
  <>
    <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props}>
      {props.children}
      {required && <span className="text-rose-500">&nbsp;*</span>}
    </LabelPrimitive.Root>
  </>
))
Label.displayName = "Label"

export default memo(Label)
