import { IMainLayout } from './types'
import TopBar from '../../global/topBar'

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <div>
      <TopBar />
      <main className="flex justify-center p-6">
        <div className="bg-slate-200 w-full md:w-3/4 lg:w-1/2 xl:w-1/4 p-4">
          {children}
        </div>
      </main>
    </div>
  )
}

export default MainLayout
