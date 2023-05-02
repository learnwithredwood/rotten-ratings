import { render } from '@redwoodjs/testing/web'

import { Slide } from './Slide'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Slide', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Slide />)
    }).not.toThrow()
  })
})
