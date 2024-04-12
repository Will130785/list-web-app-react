import { Link } from '@tanstack/react-router'

const TopBar = () => {
  return (
    <nav data-testid="topBar" className="h-14 bg-black flex items-center p-2">
      <ul>
        <li className="text-white cursor-pointer">
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  )
}

export default TopBar
