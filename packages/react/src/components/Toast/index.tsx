import { ComponentProps, ElementType } from 'react'
import * as ToastUI from '@radix-ui/react-toast'
import { X } from 'phosphor-react'

import {
  ToastViewport,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from './styles'

export interface ToastProviderProps
  extends ComponentProps<typeof ToastUI.Provider> {}

export function ToastProvider({ children, ...props }: ToastProviderProps) {
  return (
    <ToastUI.Provider {...props}>
      {children}
      <ToastViewport />
    </ToastUI.Provider>
  )
}

ToastProvider.displayName = 'ToastProvider'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  as?: ElementType
  title?: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastRoot {...props}>
      <ToastTitle>{title}</ToastTitle>
      <ToastDescription>{description}</ToastDescription>
      <ToastClose aria-label="Close">
        <X />
      </ToastClose>
    </ToastRoot>
  )
}

Toast.displayName = 'Toast'
