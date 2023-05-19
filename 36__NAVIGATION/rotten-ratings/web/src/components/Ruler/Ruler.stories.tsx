// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import { Ruler, type RulerProps } from './Ruler'

export default {
  title: 'Components/Ruler',
  component: Ruler,
} as ComponentMeta<typeof Ruler>

const Template = (args) => <Ruler {...args} />

export const Primary = Template.bind({})
Primary.args = {
  // args
}

