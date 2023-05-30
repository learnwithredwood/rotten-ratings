import { render, screen, fireEvent } from '@redwoodjs/testing/web'

import { Nav } from './Nav'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Nav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Nav handleClick={() => {}} />)
    }).not.toThrow()
  })
  it('triggers the function when the close button is clicked', () => {
    const mockFunction = jest.fn()
    render(<Nav handleClick={mockFunction} />)
    const closeButton = screen.getByRole('button')
    closeButton.click()
    expect(mockFunction).toHaveBeenCalled()
  })

  it('triggers the function when the escape key is clicked', () => {
    const mockFunction = jest.fn()
    render(<Nav handleClick={mockFunction} />)
    const nav = screen.getByTestId('nav')
    fireEvent.keyDown(nav, { key: 'Escape' })
    expect(mockFunction).toHaveBeenCalled()
  })

  // navigation
  it.skip('navigates to the home page', () => {})
  it.skip('navigates to the play list page', () => {})
  it.skip('navigates to the watch list page', () => {})
  it.skip('navigates to the settings page', () => {})
  it.skip('navigates to the logout page', () => {})
  it.skip('navigates to the login page', () => {})

  // TODO: test recently viewed posters
})
