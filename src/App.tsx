import Router from './router'
import Route from './router/route'
import Home from './components/pages/home'
import AddList from './components/pages/addList'
import AllLists from './components/pages/allLists'

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/add-list" component={AddList} />
        <Route path="/all-lists" component={AllLists} />
      </Router>
    </>
  )
}

export default App
