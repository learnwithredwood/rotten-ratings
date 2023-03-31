// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import hocusPocus from '../Poster/images/hocus-pocus.jpeg'

import { Slider, type SliderProps } from './Slider'

export default {
  title: 'Components/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>

const Template = (args) => <Slider {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Most Popular',
  slideSize: 'small',
  viewAllLink: '/movies',
  slides: [
    {
      src: hocusPocus,
      alt: 'Hocus Pocus',
    },
    {
      src: hocusPocus,
      alt: 'Hocus Pocus',
    },
    {
      src: hocusPocus,
      alt: 'Hocus Pocus',
    },
    {
      src: hocusPocus,
      alt: 'Hocus Pocus',
    },
    {
      src: hocusPocus,
      alt: 'Hocus Pocus',
    },
    {
      src: hocusPocus,
      alt: 'Hocus Pocus',
    },
    {
      src: hocusPocus,
      alt: 'Hocus Pocus',
    },
    {
      src: hocusPocus,
      alt: 'Hocus Pocus',
    },
    {
      src: hocusPocus,
      alt: 'Hocus Pocus',
    },
    {
      src: hocusPocus,
      alt: 'Hocus Pocus',
    },
    {
      src: hocusPocus,
      alt: 'Hocus Pocus',
    },
    {
      src: hocusPocus,
      alt: 'Hocus Pocus',
    },
  ],
}
