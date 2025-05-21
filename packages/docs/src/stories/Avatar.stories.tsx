import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: undefined,
    alt: undefined,
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  args: {
    src: 'https://github.com/bernardo-giehl.png',
    alt: 'Bernardo Giehl',
  },
}

export const WithFallbackAlt: StoryObj<AvatarProps> = {
  args: {
    alt: 'Bernardo Giehl',
  },
}

export const WithFallback: StoryObj<AvatarProps> = {
}
