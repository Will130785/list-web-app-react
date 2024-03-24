import { IMainLayout } from './types'
import TopBar from '../../partials/topBar'

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <div>
      <TopBar />
      <main>{children}</main>
    </div>
  )
}

export default MainLayout
