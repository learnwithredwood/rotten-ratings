// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import { FeatureSlider, type FeatureSliderProps } from './FeatureSlider'
import { data } from './FeatureSlider.mocks'

export default {
  title: 'Components/FeatureSlider',
  component: FeatureSlider,
} as ComponentMeta<typeof FeatureSlider>

const Template = (args: FeatureSliderProps) => <FeatureSlider {...args} />

export const Primary = Template.bind({})
Primary.args = {
  features: data,
}
