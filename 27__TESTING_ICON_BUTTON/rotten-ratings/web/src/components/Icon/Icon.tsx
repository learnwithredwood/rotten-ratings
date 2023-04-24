import { AddList } from './AddList'
import { Arrow } from './Arrow'
import { Bookmark } from './Bookmark'
import { Close } from './Close'
import { Hide } from './Hide'
import { Search } from './Search'
import { Show } from './Show'
import { Star } from './Star'
import { WatchLater } from './WatchLater'

interface IconProps {
  name: string
  size?: number
}

const Icon = ({ name, size = 24 }: IconProps) => {
  switch (name.toLowerCase()) {
    case 'addlist':
      return <AddList size={size} />
    case 'arrow':
      return <Arrow size={size} />
    case 'bookmark':
      return <Bookmark size={size} />
    case 'close':
      return <Close size={size} />
    case 'hide':
      return <Hide size={size} />
    case 'search':
      return <Search size={size} />
    case 'show':
      return <Show size={size} />
    case 'star':
      return <Star size={size} />
    case 'watchlater':
      return <WatchLater size={size} />
    default:
      return <div />
  }
}

export { Icon, IconProps }
