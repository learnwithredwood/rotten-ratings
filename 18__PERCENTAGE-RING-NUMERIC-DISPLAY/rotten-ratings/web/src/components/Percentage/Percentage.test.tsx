import { render } from '@redwoodjs/testing/web'

import { Percentage } from './Percentage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Percentage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Percentage />)
    }).not.toThrow()
  })
})
