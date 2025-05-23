import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Tooltip, TooltipProps } from '@beehive-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    children: undefined,
    message: 'Testing the element Tooltip',
  },
  argTypes: {
    children: {
      control: {
        type: 'object',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    children: <Box><Text>Position your mouse on this box</Text></Box>,
  },
}
