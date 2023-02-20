import { render } from '@redwoodjs/testing/web'

import { Poster } from './Poster'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Poster', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Poster />)
    }).not.toThrow()
  })
})
