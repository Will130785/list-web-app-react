import MainLayout from '../../layouts/mainLayout'
import { Link } from '@tanstack/react-router'

const Home = () => {
  return (
    <MainLayout>
      <div data-testid="homePage">
        <div>Home Page</div>
        <div>
          <Link to="/add">Add List</Link>
          <Link to="/all">All Lists</Link>
        </div>
      </div>
    </MainLayout>
  )
}

export default Home
