import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Router from './router'
import Route from './router/route'
import Home from './components/pages/home'
import AddList from './components/pages/addList'
import AllLists from './components/pages/allLists'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Route path="/" component={<Home />} />
        <Route path="/add-list" component={<AddList />} />
        <Route path="/all-lists" component={<AllLists />} />
      </Router>
    </QueryClientProvider>
  )
}

export default App
