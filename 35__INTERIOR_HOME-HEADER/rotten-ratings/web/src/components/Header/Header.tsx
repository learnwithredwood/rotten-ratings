import { Icon } from '../Icon/Icon'

interface HeaderProps {
  // Props
}

const Header = ({}: HeaderProps) => {
  return (
    <header className="fixed inset-x-0 top-0 w-full bg-eerieBlack">
      <div className="relative mx-auto flex h-[5.25rem] max-w-pageWidth items-center justify-between px-4 xl:px-0">
        <a href="/">
          <img src="/images/logo--horizontal.svg" alt="Rotten Ratings" />
        </a>
        <button className="flex items-center justify-center gap-x-5 hover:text-lemonLime">
          MENU
          <Icon name="hamburger" />
        </button>
      </div>
    </header>
  )
}

export { Header, HeaderProps }
