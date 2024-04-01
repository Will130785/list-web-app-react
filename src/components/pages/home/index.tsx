import MainLayout from '../../layouts/mainLayout'
import Link from '../../../router/link'

const Home = () => {
  return (
    <MainLayout>
      <div data-testid="homePage">
        <div>Home Page</div>
        <div>
          <Link to="/add-list">Add List</Link>
          <Link to="/all-lists">All Lists</Link>
        </div>
      </div>
    </MainLayout>
  )
}

export default Home
