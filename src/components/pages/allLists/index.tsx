import { Link } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import MainLayout from '../../layouts/mainLayout'

const AllLists = () => {
  const handleGetLists = async () => {
    const res = await fetch('http://localhost:3000/list-node-api/all-lists')
    const parsed = await res.json()
    return parsed
  }

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['lists'],
    queryFn: handleGetLists,
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <MainLayout>
      <div data-testid="allLists">
        <div className="mt-4 mb-4">
          <h2 className="text-xl font-bold">All Lists</h2>
        </div>
        <div>
          {data && data.lists && data.lists.length
            ? data.lists.map(
                (
                  list: { listName: string; listItems: string[] },
                  listIndex: number
                ) => (
                  <div
                    className="flex mt-2 mb-2"
                    key={`list-item-${listIndex}`}
                  >
                    <p className="p-2 bg-blue-400 text-white w-full">
                      {list.listName}
                    </p>
                    <button
                      className="bg-red-600 w-10 text-white rounded-md"
                      type="button"
                      onClick={() => console.log('TEST')}
                    >
                      -
                    </button>
                  </div>
                )
              )
            : null}
        </div>
        <div>
          <Link to="/add">Add List</Link>
        </div>
      </div>
    </MainLayout>
  )
}

export default AllLists
