import { Button, ButtonProps } from '@jessescn/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Enviar',
  },
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
