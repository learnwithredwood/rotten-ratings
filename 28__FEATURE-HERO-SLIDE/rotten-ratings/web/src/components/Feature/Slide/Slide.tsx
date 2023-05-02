import { IconButton } from 'src/components/IconButton'
import { Percentage } from 'src/components/Percentage'

interface SlideProps {
  image: string
  percentage: number
  title: string
}

const Slide = ({ image, percentage, title }: SlideProps) => {
  return (
    <div
      className="min-h-[425px] w-full rounded-[40px] bg-cover bg-centerCenter pl-12 pt-12"
      style={{
        backgroundImage: `linear-gradient(90deg, #000000 6.62%, rgba(0, 0, 0, 0) 71.78%), url(${image})`,
      }}
    >
      <div className="flex min-h-[350px] flex-col justify-between">
        <h2 className="mb-4 max-w-[500px] text-5xl font-bold text-white">
          {title}
        </h2>
        <div className="mb-1 flex flex-1 gap-x-3">
          <IconButton handleClick={() => {}} name="bookmark" />
          <IconButton handleClick={() => {}} name="watchLater" />
          <IconButton handleClick={() => {}} name="addList" />
        </div>
        <div>
          <Percentage percentage={percentage} ring={false} size="medium" />
        </div>
      </div>
    </div>
  )
}

export { Slide, SlideProps }
