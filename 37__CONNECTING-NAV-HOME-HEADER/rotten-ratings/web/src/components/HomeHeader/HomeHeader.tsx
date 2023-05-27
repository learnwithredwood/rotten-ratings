import { useEffect, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { Icon } from '../Icon/Icon'
import { Nav } from '../Nav'

interface HomeHeaderProps {
  // Props
}

const HomeHeader = ({}: HomeHeaderProps) => {
  const [isNavShowing, setIsNavShowing] = useState(false)

  const handleClick = () => {
    setIsNavShowing((prevValue) => !prevValue)
  }

  return (
    <header className="flex justify-between">
      <a href="/">
        <img src="/images/logo.svg" alt="Rotten Ratings" />
      </a>
      <button
        onClick={handleClick}
        className="mt-0 mb-auto flex items-center gap-x-5 hover:text-lemonLime"
      >
        MENU
        <Icon name="hamburger" />
      </button>

      <div className="fixed top-0 z-50">
        <AnimatePresence>
          {isNavShowing && (
            <motion.div
              initial={{ y: '-100vh', opacity: 0 }}
              animate={{ y: '0vh', opacity: 1 }}
              exit={{ y: '-100vh', opacity: 0 }}
              transition={{ default: { ease: 'linear' } }}
            >
              <Nav handleClick={handleClick} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export { HomeHeader, HomeHeaderProps }
