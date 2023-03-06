import { render, screen } from '@redwoodjs/testing/web'

import { Poster } from './Poster'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Poster', () => {
  it('renders successfully', () => {
    const source = './images/hocus-pocus.jpeg'
    const alt = 'Hocus Pocus'
    expect(() => {
      render(<Poster alt={alt} src={source} />)
    }).not.toThrow()
  })

  it('shows the image', () => {
    const source = './images/hocus-pocus.jpeg'
    const alt = 'Hocus Pocus'
    render(<Poster alt={alt} src={source} />)
    expect(screen.getByRole('img')).toHaveAttribute('src', source)
  })

  it('loads the alt text', () => {
    const source = './images/hocus-pocus.jpeg'
    const alt = 'Hocus Pocus'
    render(<Poster alt={alt} src={source} />)
    expect(screen.getByRole('img')).toHaveAttribute('alt', alt)
  })
})
