import { render } from '@redwoodjs/testing/web'

import { FeatureSlider } from './FeatureSlider'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FeatureSlider', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FeatureSlider />)
    }).not.toThrow()
  })
})
