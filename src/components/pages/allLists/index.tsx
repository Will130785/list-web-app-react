import { Link } from '@tanstack/react-router'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import MainLayout from '../../layouts/mainLayout'

const AllLists = () => {
  const handleGetLists = async () => {
    const res = await fetch('http://localhost:3000/list-node-api/all-lists')
    const parsed = await res.json()
    return parsed
  }

  const handleDeletList = async (id: string) => {
    return fetch(`http://localhost:3000/list-node-api/delete-list/${id}`, {
      method: 'DELETE',
    })
  }

  const queryClient = useQueryClient()

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['lists'],
    queryFn: handleGetLists,
    retry: 0,
  })

  const mutation = useMutation({
    mutationFn: handleDeletList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['lists'] })
    },
  })

  console.log(isPending, 'PENDING')
  console.log(isError, 'IS ERROR')
  console.log(error, 'ERROR')
  console.log(data, 'DATA')
  if (isPending) {
    return <span data-testid="allListsLoading">Loading...</span>
  }

  if (isError) {
    return <span data-testid="allListsError">Error: {error.message}</span>
  }
  console.log(data, '***')
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
                  list: { listName: string; listItems: string[]; _id: string },
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
                      onClick={() => mutation.mutate(list._id)}
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
