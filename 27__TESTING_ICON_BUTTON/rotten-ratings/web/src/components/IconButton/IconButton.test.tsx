import { render } from '@redwoodjs/testing/web'

import { IconButton } from './IconButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('IconButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IconButton />)
    }).not.toThrow()
  })
})
