import { render, screen } from '@redwoodjs/testing/web'

import { Percentage } from './Percentage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Percentage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Percentage percentage={0} />)
    }).not.toThrow()
  })

  it('displays the ring', () => {
    render(<Percentage percentage={0} ring={true} />)
    expect(screen.getByTestId('ring')).toBeInTheDocument()
  })

  it('hides the ring', () => {
    render(<Percentage percentage={0} ring={false} />)
    expect(screen.queryByTestId('ring')).not.toBeInTheDocument()
  })

  it('renders the correct ring length for a low percentage', () => {
    render(<Percentage percentage={30} ring={true} />)
    expect(screen.getByTestId('percentageRing')).toHaveAttribute(
      'stroke-dasharray',
      'calc((30 / 100) * 628.32) 628.32'
    )
    expect(screen.getByTestId('percentageRing')).toMatchSnapshot()
  })

  it('renders the correct ring length for a mid percentage', () => {
    render(<Percentage percentage={64} ring={true} />)
    expect(screen.getByTestId('percentageRing')).toHaveAttribute(
      'stroke-dasharray',
      'calc((64 / 100) * 628.32) 628.32'
    )
    expect(screen.getByTestId('percentageRing')).toMatchSnapshot()
  })

  it('renders the correct ring length for a high percentage', () => {
    render(<Percentage percentage={89} ring={true} />)
    expect(screen.getByTestId('percentageRing')).toHaveAttribute(
      'stroke-dasharray',
      'calc((89 / 100) * 628.32) 628.32'
    )
    expect(screen.getByTestId('percentageRing')).toMatchSnapshot()
  })

  it('renders the numeric percentage', () => {
    render(<Percentage percentage={89} ring={true} />)
    expect(screen.getByText('89')).toBeInTheDocument()
  })

  // size
  it('renders a small size', () => {
    render(<Percentage percentage={89} ring={true} size="small" />)
    expect(screen.getByText('89')).toHaveClass('text-5xl')
    expect(screen.getByTestId('ring')).toHaveAttribute('height', '110')
  })

  it('renders a medium size', () => {
    render(<Percentage percentage={89} ring={true} size="medium" />)
    expect(screen.getByText('89')).toHaveClass('text-[9.25rem]')
    expect(screen.getByTestId('ring')).toHaveAttribute('height', '300')
  })

  it('renders a large size', () => {
    render(<Percentage percentage={89} ring={true} size="large" />)
    expect(screen.getByText('89')).toHaveClass('text-[10rem]')
    expect(screen.getByTestId('ring')).toHaveAttribute('height', '0')
  })

  it('renders a xlarge size', () => {
    render(<Percentage percentage={89} ring={true} size="xlarge" />)
    expect(screen.getByText('89')).toHaveClass('text-[16rem]')
    expect(screen.getByTestId('ring')).toHaveAttribute('height', '0')
  })

  // color
  it('renders a low percentage with the correct color', () => {
    render(<Percentage percentage={30} ring={true} size="large" />)
    expect(screen.getByTestId('percentageWrapper')).toHaveClass(
      'text-oriolesOrange'
    )
  })

  it('renders a mid percentage with the correct color', () => {
    render(<Percentage percentage={52} ring={true} size="large" />)
    expect(screen.getByTestId('percentageWrapper')).toHaveClass(
      'text-lemonLime'
    )
  })

  it('renders a high percentage with the correct color', () => {
    render(<Percentage percentage={98} ring={true} size="large" />)
    expect(screen.getByTestId('percentageWrapper')).toHaveClass(
      'text-chartreuse'
    )
  })
})
