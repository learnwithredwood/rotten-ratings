import { fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { render, screen } from '@redwoodjs/testing/web'

import { FeatureSlider } from './FeatureSlider'
import { data } from './FeatureSlider.mocks'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FeatureSlider', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('renders successfully', () => {
    expect(() => {
      render(<FeatureSlider features={data} />)
    }).not.toThrow()
  })

  it('click to a specific slide', () => {
    render(<FeatureSlider features={data} />)
    const thirdButton = screen.getByTestId('slideNav-2')
    fireEvent.click(thirdButton)
    expect(screen.getByTestId('slide')).toHaveTextContent(data[2].title)
  })

  it('rotates to each slide by itself', () => {
    render(<FeatureSlider features={data} />)

    // expect to start on the first slide
    expect(screen.getByTestId('slide')).toHaveTextContent(data[0].title)

    // expect to rotate to the second slide after 10 seconds
    act(() => jest.advanceTimersByTime(10000))
    expect(screen.getByTestId('slide')).toHaveTextContent(data[1].title)
  })

  it('goes back to the beginning, once it has reached the last slide', () => {
    render(<FeatureSlider features={data} />)

    // click on the last button
    const totalSlides = data.length - 1
    const lastButton = screen.getByTestId(`slideNav-${totalSlides}`)
    fireEvent.click(lastButton)

    // expect to be on the last slide
    expect(screen.getByTestId('slide')).toHaveTextContent(
      data[totalSlides].title
    )

    // expect to rotate to the first slide after 10 seconds
    act(() => jest.advanceTimersByTime(10000))
    expect(screen.getByTestId('slide')).toHaveTextContent(data[0].title)
  })

  it('updates the navigation when it rotates', () => {
    render(<FeatureSlider features={data} />)

    // expect to start on the first slide
    expect(screen.getByTestId('slide')).toHaveTextContent(data[0].title)

    // expect the first button to be active
    expect(screen.getByTestId('slideNav-0')).toHaveClass('bg-tamarillo')
    expect(screen.getByTestId('slideNav-1')).toHaveClass('bg-montana')

    // expect to rotate to the second slide after 10 seconds
    act(() => jest.advanceTimersByTime(10000))
    expect(screen.getByTestId('slide')).toHaveTextContent(data[1].title)

    // expect the second button to be active
    expect(screen.getByTestId('slideNav-0')).toHaveClass('bg-montana')
    expect(screen.getByTestId('slideNav-1')).toHaveClass('bg-tamarillo')
  })
})
