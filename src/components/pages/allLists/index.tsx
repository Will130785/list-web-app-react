import MainLayout from '../../layouts/mainLayout'
import Link from '../../../router/link'

const AllLists = () => {
  return (
    <MainLayout>
      <div data-testid="allLists">
        <div>All Lists</div>
        <div>
          <Link to="/add-list">Add List</Link>
        </div>
      </div>
    </MainLayout>
  )
}

export default AllLists
