import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@beehive-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: 'object',
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}