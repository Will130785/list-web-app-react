import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import MainLayout from '../../layouts/mainLayout'
import { useForm } from '../../../hooks/useForm'

const AddList = () => {
  const { handleInput, values } = useForm({
    listName: '',
    listItem: '',
  })
  const [listItems, setListItems] = useState<string[]>([])

  const handleAddListItem = () => {
    setListItems([...listItems, values.listItem])
    handleInput('', 'listItem')
  }

  const handleAddRemoveListItem = (itemToRemoveIndex: number) => {
    const tempList = [...listItems]
    tempList.splice(itemToRemoveIndex, 1)
    setListItems([...tempList])
  }

  const handleAddList = async (listData: any) => {
    console.log(listData)
    fetch('http://localhost:3000/list-node-api/create-list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(listData),
    })
  }

  const mutation = useMutation({
    mutationFn: handleAddList,
    onSuccess: () => {
      console.log('SUCCESS')
    },
  })

  return (
    <MainLayout>
      <div data-testid="addList">
        <div className="mt-4 mb-4">
          <h2 className="text-xl font-bold">Add List</h2>
        </div>
        <form>
          <div className="flex flex-col mt-2 mb-2">
            <input
              className="p-2"
              id="listName"
              onChange={(e) => handleInput(e, 'listName')}
              value={values.listName}
            />
            <label htmlFor="listName">List Name</label>
          </div>
          <div className="flex flex-col mt-2 mb-2">
            <div className="flex">
              <input
                className="p-2 w-full"
                id="listItem"
                onChange={(e) => handleInput(e, 'listItem')}
                value={values.listItem}
              />
              <button
                className="p-2 bg-green-600 w-10 text-white rounded-md"
                type="button"
                onClick={handleAddListItem}
              >
                +
              </button>
            </div>
            <label htmlFor="listItem">Add list item</label>
          </div>
          <h2 className="text-lg font-bold">Current items</h2>
          {listItems && listItems.length ? (
            <div>
              <div>
                {listItems.map((listItem: string, listItemIndex: number) => (
                  <div
                    className="flex mt-2 mb-2"
                    key={`list-item-${listItemIndex}`}
                  >
                    <p className="p-2 bg-blue-400 text-white w-full">
                      {listItem}
                    </p>
                    <button
                      className="bg-red-600 w-10 text-white rounded-md"
                      type="button"
                      onClick={() => handleAddRemoveListItem(listItemIndex)}
                    >
                      -
                    </button>
                  </div>
                ))}
              </div>
              <div>
                <button
                  className="p-2 bg-purple-600 w-full text-white rounded-md"
                  type="button"
                  onClick={() =>
                    mutation.mutate({
                      listName: values.listName,
                      listItems,
                    })
                  }
                >
                  Add List
                </button>
              </div>
            </div>
          ) : null}
        </form>
      </div>
    </MainLayout>
  )
}

export default AddList
