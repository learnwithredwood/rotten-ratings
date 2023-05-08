import { render, screen } from '@redwoodjs/testing/web'

import { Slide } from './Slide'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Slide', () => {
  const image =
    'https://www.themoviedb.org/t/p/original/lcTuggU70y6pt6x13Rv1Ffjs93K.jpg'
  const title = 'Money Heist: Korea - Joint Economic Area'
  const percentage = 89

  it('renders successfully', () => {
    expect(() => {
      render(<Slide image={image} title={title} percentage={percentage} />)
    }).not.toThrow()
  })

  it('displays the correct title', () => {
    render(<Slide image={image} title={title} percentage={percentage} />)
    expect(screen.getByText(title)).toBeInTheDocument()
  })

  it('displays the correct image', () => {
    render(<Slide image={image} title={title} percentage={percentage} />)
    expect(screen.getByTestId('slide')).toHaveStyle(
      `background-image: linear-gradient(90deg, #000000 6.62%, rgba(0, 0, 0, 0) 71.78%), url(${image})`
    )
  })

  it('displays the correct percentage', () => {
    render(<Slide image={image} title={title} percentage={percentage} />)
    expect(screen.getByText(percentage)).toBeInTheDocument()
  })
})
