import { render, screen } from '@redwoodjs/testing/web'

import { HomeHeader } from './HomeHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HomeHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeHeader />)
    }).not.toThrow()
  })

  it('has a menu button that opens the nav', () => {
    render(<HomeHeader />)
    const menuButton = screen.getByText('MENU')
    expect(screen.queryByTestId('nav')).not.toBeInTheDocument()
    menuButton.click()
    expect(screen.getByTestId('nav')).toBeInTheDocument()
  })
})
