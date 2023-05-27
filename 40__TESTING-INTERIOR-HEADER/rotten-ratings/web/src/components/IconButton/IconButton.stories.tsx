// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import { IconButton, type IconButtonProps } from './IconButton'

export default {
  title: 'Components/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>

const Template = (args) => <IconButton {...args} />

export const ToggleOff = Template.bind({})
ToggleOff.args = {
  name: 'bookmark',
}

export const ToggleOn = Template.bind({})
ToggleOn.args = {
  name: 'bookmark',
  toggled: true,
}
