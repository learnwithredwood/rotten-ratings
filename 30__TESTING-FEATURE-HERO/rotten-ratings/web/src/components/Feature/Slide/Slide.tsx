import { motion } from 'framer-motion'

import { IconButton } from 'src/components/IconButton'
import { Percentage } from 'src/components/Percentage'
interface SlideProps {
  image: string
  percentage: number
  title: string
}

const Slide = ({ image, percentage, title }: SlideProps) => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 1.5, staggerChildren: 0.2, delayChildren: 0 },
    },
  }

  return (
    <div
      className="min-h-[425px] w-full rounded-[40px] bg-cover bg-centerCenter pl-12 pt-12"
      data-testid="slide"
      style={{
        backgroundImage: `linear-gradient(90deg, #000000 6.62%, rgba(0, 0, 0, 0) 71.78%), url(${image})`,
      }}
    >
      <div className="flex min-h-[350px] flex-col justify-between">
        <motion.h2
          variants={variants}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 2, type: 'spring' }}
          className="mb-4 max-w-[500px] text-5xl font-bold text-white"
        >
          {title}
        </motion.h2>
        <motion.div
          className="mb-1 flex flex-1 gap-x-3"
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <motion.div variants={variants} transition={{ duration: 1 }}>
            <IconButton handleClick={() => {}} name="bookmark" />
          </motion.div>
          <motion.div variants={variants} transition={{ duration: 1 }}>
            <IconButton handleClick={() => {}} name="watchLater" />
          </motion.div>
          <motion.div variants={variants} transition={{ duration: 1 }}>
            <IconButton handleClick={() => {}} name="addList" />
          </motion.div>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 2, type: 'spring', delay: 0.6 }}
        >
          <Percentage percentage={percentage} ring={false} size="medium" />
        </motion.div>
      </div>
    </div>
  )
}

export { Slide, SlideProps }
