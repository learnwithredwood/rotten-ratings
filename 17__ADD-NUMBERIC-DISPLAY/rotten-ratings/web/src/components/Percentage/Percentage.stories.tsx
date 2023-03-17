// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import { Percentage, type PercentageProps } from './Percentage'

export default {
  title: 'Components/Percentage',
  component: Percentage,
} as ComponentMeta<typeof Percentage>

const Template = (args: PercentageProps) => <Percentage {...args} />

export const Primary = Template.bind({})
Primary.args = {
  percentage: 88,
}

export const NoRing = Template.bind({})
NoRing.args = {
  percentage: 88,
  ring: false,
}
