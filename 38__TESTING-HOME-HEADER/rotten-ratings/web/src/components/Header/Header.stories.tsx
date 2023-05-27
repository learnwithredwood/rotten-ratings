// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import { Header, type HeaderProps } from './Header'

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template = (args: HeaderProps) => <Header {...args} />

export const Primary = Template.bind({})
Primary.args = {
  // args
}
