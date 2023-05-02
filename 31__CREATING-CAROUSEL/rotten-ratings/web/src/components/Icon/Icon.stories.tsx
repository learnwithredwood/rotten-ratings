// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import { Icon, type IconProps } from './Icon'

export default {
  title: 'Components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template = (args: IconProps) => <Icon {...args} />

export const Arrow = Template.bind({})
Arrow.args = {
  name: 'arrow',
}

export const Bookmark = Template.bind({})
Bookmark.args = {
  name: 'bookmark',
}

export const Close = Template.bind({})
Close.args = {
  name: 'close',
}

export const Hide = Template.bind({})
Hide.args = {
  name: 'hide',
}

export const Search = Template.bind({})
Search.args = {
  name: 'search',
}

export const Show = Template.bind({})
Show.args = {
  name: 'show',
}

export const Star = Template.bind({})
Star.args = {
  name: 'star',
}

export const WatchLater = Template.bind({})
WatchLater.args = {
  name: 'watchlater',
}
