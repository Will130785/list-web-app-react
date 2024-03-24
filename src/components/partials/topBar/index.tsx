import Link from '../../../router/link'

const TopBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add-list">Add List</Link>
        </li>
      </ul>
    </nav>
  )
}

export default TopBar
