import { useId } from "react"

/**
 * Returns a unique ID.
 * @author Emran
 */
export const useUniqueId = () => {
  return useId().replace(/:/g, "")
}
