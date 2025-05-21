import { useState } from 'react'        
import type { Meta, StoryObj } from '@storybook/react'
import { Button, Toast, ToastProvider, ToastProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {
    variant: 'information',
    title: undefined,
    description: undefined,
  },
  argTypes: {
    variant: {
      options: ['information', 'success', 'alert', 'error'],
      control: {
        type: 'inline-radio',
      },
    },
    children: {
      control: {
        type: 'object',
      },
    },
  },
  decorators: [
    (Story) => {
      const [savedCount, setSavedCount] = useState(0);

      return (
        <div>
          <Button onClick={() => setSavedCount((count) => count + 1)}>Clique para acionar a notificação</Button>

          <ToastProvider>
            {Array.from({ length: savedCount }).map((_, index) => (
              <Story key={index} />
            ))}
          </ToastProvider>
        </div>
      )
    },
  ],
} as Meta<ToastProps>

export const Information: StoryObj<ToastProps> = {
  args: {
    title: 'Title',
    description: 'Information description',
    variant: 'information',
  },
}

export const Success: StoryObj<ToastProps> = {
  args: {
    title: 'Title',
    description: 'Success description',
    variant: 'success',
  },
}

export const Alert: StoryObj<ToastProps> = {
  args: {
    title: 'Title',
    description: 'Alert description',
    variant: 'alert',
  },
}

export const Error: StoryObj<ToastProps> = {
  args: {
    title: 'Title',
    description: 'Error description',
    variant: 'error',
  },
}
