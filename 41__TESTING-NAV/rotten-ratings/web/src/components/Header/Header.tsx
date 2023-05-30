import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { Icon } from '../Icon/Icon'
import { Nav } from '../Nav'

interface HeaderProps {
  // Props
}

const Header = ({}: HeaderProps) => {
  const [isNavShowing, setIsNavShowing] = useState(false)

  const handleClick = () => {
    setIsNavShowing((prevValue) => !prevValue)
  }

  return (
    <header className="fixed inset-x-0 top-0 w-full bg-eerieBlack">
      <div className="relative mx-auto flex h-[5.25rem] max-w-pageWidth items-center justify-between px-4 xl:px-0">
        <a href="/">
          <img src="/images/logo--horizontal.svg" alt="Rotten Ratings" />
        </a>
        <button
          onClick={handleClick}
          className="flex items-center justify-center gap-x-5 hover:text-lemonLime"
        >
          MENU
          <Icon name="hamburger" />
        </button>
      </div>

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

export { Header, HeaderProps }
