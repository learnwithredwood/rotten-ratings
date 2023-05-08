import { render, screen, fireEvent } from '@redwoodjs/testing/web'

import { IconButton } from './IconButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('IconButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IconButton handleClick={() => {}} name="Bookmark" />)
    }).not.toThrow()
  })

  it('defaults to toggled off', () => {
    render(<IconButton handleClick={() => {}} name="Bookmark" />)
    expect(screen.getByRole('button')).not.toHaveClass('bg-turquoise')
  })

  it('defaults to toggled on', () => {
    render(<IconButton handleClick={() => {}} name="Bookmark" toggled={true} />)
    expect(screen.getByRole('button')).toHaveClass('bg-turquoise')
  })

  it('handles the click', () => {
    const onClick = jest.fn()
    render(<IconButton handleClick={onClick} name="Bookmark" />)

    // toggled off
    const button = screen.getByRole('button')
    expect(button).not.toHaveClass('bg-turquoise')

    // click on the button
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()

    // toggled on
    expect(screen.getByRole('button')).toHaveClass('bg-turquoise')

    // click on the button
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(2)

    // toggled off
    expect(button).not.toHaveClass('bg-turquoise')
  })
})
