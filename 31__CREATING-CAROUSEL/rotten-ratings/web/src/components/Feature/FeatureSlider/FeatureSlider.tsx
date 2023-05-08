import { useState } from 'react'

import { useInterval } from 'src/hooks/useInterval'

import { Slide, type SlideProps } from '../Slide/Slide'

interface FeatureSliderProps {
  features: SlideProps[]
}

const FeatureSlider = ({ features }: FeatureSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const gotoSlide = (slideNumber: number): void => {
    setCurrentSlide(slideNumber)
  }

  const nextSlide = () => {
    const totalSlides = features.length - 1
    if (currentSlide >= totalSlides) setCurrentSlide(0)
    else setCurrentSlide((prevValue) => prevValue + 1)
  }

  useInterval(() => {
    nextSlide()
  }, 10000)

  if (features)
    return (
      <>
        <div className="mb-3">
          <Slide {...features[currentSlide]} />
        </div>
        <ul className="float-right flex gap-x-3">
          {features.map((feature, index: number) => (
            <li key={index}>
              <button
                className={`block h-2 w-16 cursor-pointer  ${
                  currentSlide === index ? 'bg-tamarillo' : 'bg-montana'
                }`}
                onClick={() => {
                  gotoSlide(index)
                }}
              />
            </li>
          ))}
        </ul>
      </>
    )
  else return null
}

export { FeatureSlider, FeatureSliderProps }
