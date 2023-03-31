import { render, screen } from '@redwoodjs/testing/web'

import { Poster } from './Poster'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Poster', () => {
  const source = './images/hocus-pocus.jpeg'
  const alt = 'Hocus Pocus'

  it('renders successfully', () => {
    expect(() => {
      render(<Poster alt={alt} src={source} />)
    }).not.toThrow()
  })

  it('shows the image', () => {
    render(<Poster alt={alt} src={source} />)
    expect(screen.getByRole('img')).toHaveAttribute('src', source)
  })

  it('loads the alt text', () => {
    render(<Poster alt={alt} src={source} />)
    expect(screen.getByRole('img')).toHaveAttribute('alt', alt)
  })

  it('renders a small size', () => {
    render(<Poster alt={alt} src={source} />)
    const poster = screen.getByRole('img')
    expect(poster).toHaveClass('h-60', { exact: false })
    expect(poster).toHaveClass('w-40', { exact: false })
  })

  it('renders a medium size', () => {
    render(<Poster alt={alt} src={source} size="medium" />)
    const poster = screen.getByRole('img')
    expect(poster).toHaveClass('h-[310px]', { exact: false })
    expect(poster).toHaveClass('w-[224px]', { exact: false })
  })

  it('renders a large size', () => {
    render(<Poster alt={alt} src={source} size="large" />)
    const poster = screen.getByRole('img')
    expect(poster).toHaveClass('h-[460px]', { exact: false })
    expect(poster).toHaveClass('w-[300px]', { exact: false })
  })

  it('renders a heading', () => {
    const heading = 'I am a heading'
    render(<Poster alt={alt} src={source} size="large" heading={heading} />)
    expect(screen.getByText(heading)).toBeInTheDocument()
  })

  it('renders a subheading', () => {
    const subheading = 'I am a subheading'
    render(
      <Poster alt={alt} src={source} size="large" subheading={subheading} />
    )
    expect(screen.getByText(subheading)).toBeInTheDocument()
  })
})
