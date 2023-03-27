// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Poster> = (args) => {
//   return <Poster {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import hocusPocus from './images/hocus-pocus.jpeg'
import { Poster } from './Poster'

export default {
  title: 'Components/Poster',
  component: Poster,
} as ComponentMeta<typeof Poster>

const Template = (args) => <Poster {...args} />

export const Primary = Template.bind({})
Primary.args = {
  src: hocusPocus,
  alt: 'Hocus Pocus',
}

export const Large = Template.bind({})
Large.args = {
  src: hocusPocus,
  alt: 'Hocus Pocus',
  size: 'large',
}

export const Medium = Template.bind({})
Medium.args = {
  src: hocusPocus,
  alt: 'Hocus Pocus',
  size: 'medium',
}

export const Small = Template.bind({})
Small.args = {
  src: hocusPocus,
  alt: 'Hocus Pocus',
  size: 'small',
}

export const WithText = Template.bind({})
WithText.args = {
  src: hocusPocus,
  alt: 'Hocus Pocus',
  size: 'large',
  heading: 'My Heading',
  subheading: 'My Subheading',
}
