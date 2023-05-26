import { ReactNode } from "react"

/**
 * Removes white-spaces from a string of class names.
 * @param classNames - A string of class names
 * @returns A clean string of class names
 */
export const cleanClassName = (classNames: string) => {
  if (!classNames) {
    return ""
  }
  if (typeof classNames !== "string") {
    throw new Error("Class names must be a string.")
  }

  // filters out any empty classes or classes with the value "undefined"

  return classNames
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(
      (className) =>
        Boolean(className) && className !== "undefined" && className !== "null"
    )
    .join(" ")
}
