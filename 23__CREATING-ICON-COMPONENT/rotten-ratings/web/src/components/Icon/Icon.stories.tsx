// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import { Icon, type IconProps } from './Icon'

export default {
  title: 'Components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template = (args) => <Icon {...args} />

export const Primary = Template.bind({})
Primary.args = {
  // args
}

