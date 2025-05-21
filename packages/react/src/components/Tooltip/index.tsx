import { ComponentProps } from 'react'
import * as TooltipUI from '@radix-ui/react-tooltip'

import { TooltipContent, TooltipArrow, TooltipMessage } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipUI.Root> {
  message?: string
}

export function Tooltip(props: TooltipProps) {
  return (
    <TooltipUI.Provider>
      <TooltipUI.Root {...props}>
        <TooltipUI.Trigger asChild>{props.children}</TooltipUI.Trigger>
        <TooltipUI.Portal>
          <TooltipContent>
            <TooltipMessage>{props.message}</TooltipMessage>
            <TooltipArrow />
          </TooltipContent>
        </TooltipUI.Portal>
      </TooltipUI.Root>
    </TooltipUI.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
