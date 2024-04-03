import { useEffect, useState } from 'react'
import { IRoute, IRouter } from './types'
import { useRouter } from './hooks/useRouter'

const Router: React.FC<IRouter> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  const { renderRoute } = useRouter()

  useEffect(() => {
    console.log('RENDERED')
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    // Add event listners for navigation and popstate events
    window.addEventListener('navigate', onLocationChange)
    window.addEventListener('popstate', onLocationChange)

    // Remove event listeners after use
    return () => {
      window.removeEventListener('navigate', onLocationChange)
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])
  return <>{renderRoute(children, currentPath)}</>
}

export default Router
