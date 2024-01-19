"use client"

import { Fragment, useRef, memo } from "react"
import { Dialog, Transition } from "@headlessui/react"
import ButtonIcon from "../Button/ButtonIcon"
import { cn } from "tailwind-cn"
import React from "react"
import { Z_INDEX } from "../z-index.config"

export enum MODAL_SIZES {
  sm = "sm",
  md = "md",
  lg = "lg",
  full = "full",
}

export interface ModalProps {
  /**
   * The content of the modal
   * @example
   * ```tsx
   * <Modal>
   *  <div>Heading</div>
   *  <div>Content</div>
   *  <div>Footer</div>
   * </Modal>
   * ```
   */
  children: React.ReactNode | React.ReactNode[]
  /**
   * The visibility state of the modal
   */
  visibility: boolean
  /**
   * The function to set the visibility state of the modal
   */
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>
  /**
   * The visibility state of the backdrop
   * @default `true`
   */
  backdropVisibility?: boolean
  /**
   * The size of the modal, @see `MODAL_SIZES` enum
   * @default `md`
   */
  size?: keyof typeof MODAL_SIZES
  /**
   * The vertical alignment of the modal
   * @default `center`
   */
  verticalAlign?: "center" | "top"
  /**
   * The visibility state of the close button
   * @default `true`
   */
  closeButtonVisibility?: boolean
  /**
   * The classes of the modal container
   */
  containerClassName?: string
  /**
   * The classes of the modal
   */
  className?: string
  /**
   * The function to be called when the modal is closed
   */
  onClose?: () => void
  /**
   * Disposing of the modal interface on external interaction
   * @default `true`
   */
  closeOnExternalClick?: boolean
}

/**
 * @name Modal
 * @author Emran
 * @type `Client Component`
 *
 * @example
 ```tsx
 const [visibility, setVisibility] = useState(false)
 *
 <Modal
  visibility={visibility}
  setVisibility={setVisibility}
 >
  <div>Heading</div>
  <div>Content</div>
  <div>Footer</div>
 </Modal>
 *
 <Button onClick={() => setVisibility(true)}>
  Open Modal
 </Button>
 ```
 */
const Modal = ({
  children,
  visibility,
  setVisibility,
  backdropVisibility = true,
  size = "md",
  verticalAlign = "center",
  closeButtonVisibility = true,
  containerClassName,
  className,
  onClose,
  closeOnExternalClick = true,
}: ModalProps) => {
  const cancelButtonRef = useRef(null)

  const onCloseModal = () => {
    setVisibility(false)
    onClose?.()
  }

  return (
    <Transition.Root show={visibility} as={Fragment}>
      <Dialog
        as="div"
        className={cn("relative", containerClassName)}
        initialFocus={cancelButtonRef}
        onClose={() => closeOnExternalClick && onCloseModal()}
      >
        {backdropVisibility && (
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              style={{ zIndex: Z_INDEX.modal_backdrop }}
              className="bg-primary-100 fixed inset-0 bg-opacity-75 transition-opacity"
            />
          </Transition.Child>
        )}

        <div style={{ zIndex: Z_INDEX.modal }} className="fixed inset-0 overflow-y-auto">
          <div
            className={cn(
              "flex min-h-full justify-center p-20",
              verticalAlign == "top" ? "items-start" : "items-center"
            )}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {/* // - modal */}
              <Dialog.Panel
                className={cn(
                  "relative transform space-y-20 rounded-lg bg-white p-20 shadow-xl transition-all sm:my-8 sm:w-full sm:p-24",
                  size == "sm" && "w-full sm:max-w-lg",
                  size == "md" && "w-full sm:max-w-3xl",
                  size == "lg" && "w-full sm:max-w-7xl",
                  size == "full" && "w-full",
                  className
                )}
              >
                {/* // - close button */}
                {closeButtonVisibility && (
                  <ButtonIcon
                    variant="neutral"
                    icon={{
                      name: "x",
                      className: "stroke-slate-400 group-hover:stroke-rose-500",
                      size: 24,
                    }}
                    className="group absolute right-12 top-12 h-36 w-36 rounded-full p-4 transition-colors hover:bg-rose-100"
                    onClick={onCloseModal}
                  />
                )}
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default memo(Modal)
