// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import { Slider, type SliderProps } from './Slider'
import { slides } from './Slider.mocks'

export default {
  title: 'Components/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>

const Template = (args: SliderProps) => <Slider {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Most Popular',
  slideSize: 'small',
  viewAllLink: '/movies',
  slides: slides,
}

export const Medium = Template.bind({})
Medium.args = {
  label: 'Most Popular',
  slideSize: 'medium',
  viewAllLink: '/movies',
  slides: slides,
}

export const Large = Template.bind({})
Large.args = {
  label: 'Most Popular',
  slideSize: 'large',
  viewAllLink: '/movies',
  slides: slides,
}
