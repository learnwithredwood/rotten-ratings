import { render } from '@redwoodjs/testing/web'

import { HomeHeader } from './HomeHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HomeHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeHeader />)
    }).not.toThrow()
  })
})
