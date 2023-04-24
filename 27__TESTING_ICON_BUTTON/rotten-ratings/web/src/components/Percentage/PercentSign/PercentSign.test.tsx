import { render } from '@redwoodjs/testing/web'

import { PercentSign } from './PercentSign'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PercentSign', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PercentSign />)
    }).not.toThrow()
  })
})
