import { render } from '@redwoodjs/testing/web'

import { Ruler } from './Ruler'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Ruler', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Ruler />)
    }).not.toThrow()
  })
})
