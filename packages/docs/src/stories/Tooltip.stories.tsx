import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    children: undefined,
    message: 'Testando o elemento Tooltip',
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
    children: <Box><Text>Posicione o mouse nesta caixa</Text></Box>,
  },
}
