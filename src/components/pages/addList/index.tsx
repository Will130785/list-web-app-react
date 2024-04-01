import MainLayout from '../../layouts/mainLayout'
import { useForm } from '../../../hooks/useForm'

const AddList = () => {
  const { handleInput, handleSubmit, values } = useForm({
    listName: '',
  })

  return (
    <MainLayout>
      <div data-testid="addList">
        <div>
          <h2>Add List</h2>
        </div>
        <form>
          <div>
            <input
              id="listName"
              onChange={(e) => handleInput(e, 'listName')}
              value={values.listName}
            />
            <label htmlFor="listName">List Name</label>
          </div>
          <div>
            <button type="button" onClick={handleSubmit}>
              Add List
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  )
}

export default AddList
