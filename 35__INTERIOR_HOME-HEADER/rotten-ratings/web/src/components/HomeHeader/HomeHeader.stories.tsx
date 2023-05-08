// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import { HomeHeader, type HomeHeaderProps } from './HomeHeader'

export default {
  title: 'Components/HomeHeader',
  component: HomeHeader,
} as ComponentMeta<typeof HomeHeader>

const Template = (args: HomeHeaderProps) => <HomeHeader {...args} />

export const Primary = Template.bind({})
Primary.args = {
  // args
}
