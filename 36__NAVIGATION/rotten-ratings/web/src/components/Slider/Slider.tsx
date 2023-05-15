import { Link } from '@redwoodjs/router'

import { Poster, type PosterProps } from '../Poster/Poster'

interface SliderProps {
  label: string
  slides: PosterProps[]
  slideSize?: 'small' | 'medium'
  viewAllLink?: string
}

const Slider = ({ label, slides, slideSize, viewAllLink }: SliderProps) => {
  return (
    <>
      <div className="mx-auto flex max-w-pageWidth items-end justify-between pb-2">
        <h2>{label}</h2>
        {viewAllLink && <Link to={viewAllLink}>View All</Link>}
      </div>
      <div className="snap-x snap-mandatory scroll-pl-[calc((100%-1300px)/2)] overflow-x-scroll whitespace-nowrap pl-[calc((100%-1300px)/2)]">
        {slides &&
          slides.map((slide, index: number) => (
            <div
              key={index}
              className="mr-5 inline-block snap-start snap-normal"
            >
              <Poster
                alt={slide.alt}
                src={slide.src}
                subheading={slide.subheading}
                size={slideSize}
              />
            </div>
          ))}
      </div>
    </>
  )
}

export { Slider, SliderProps }
