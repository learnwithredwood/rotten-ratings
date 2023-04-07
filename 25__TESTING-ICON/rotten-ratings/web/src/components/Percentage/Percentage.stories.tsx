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

export const Small = Template.bind({})
Small.args = {
  percentage: 88,
  size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  percentage: 88,
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  percentage: 88,
  size: 'large',
}

export const XLarge = Template.bind({})
XLarge.args = {
  percentage: 88,
  size: 'xlarge',
}

export const LowRating = Template.bind({})
LowRating.args = {
  percentage: 30,
  size: 'medium',
}

export const MidRating = Template.bind({})
MidRating.args = {
  percentage: 60,
  size: 'medium',
}

export const HighRating = Template.bind({})
HighRating.args = {
  percentage: 90,
  size: 'medium',
}
