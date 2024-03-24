import Router from './router'
import Route from './router/route'
import Home from './components/pages/home'
import AddList from './components/pages/addList'

function App() {
  return (
    <>
      <Router key={window.location.pathname}>
        <Route path="/" component={Home} />
        <Route path="/add-list" component={AddList} />
      </Router>
    </>
  )
}

export default App
