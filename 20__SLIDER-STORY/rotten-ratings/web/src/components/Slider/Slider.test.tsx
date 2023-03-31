import { render } from '@redwoodjs/testing/web'

import { Slider } from './Slider'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Slider', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Slider />)
    }).not.toThrow()
  })
})
