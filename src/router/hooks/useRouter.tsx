import { IRoute } from '../types'

export const useRouter = () => {
  const renderRoute = (children: JSX.Element[], currentPath: string) => {
    return (
      <>
        {children.map((child: { props: IRoute }, index: number) => {
          // Map through the routes provided as children props and only render the route matching the current path
          if (currentPath === child.props.path) {
            return <div key={index}>{child.props.component}</div>
          } else {
            return null
          }
        })}
      </>
    )
  }

  return {
    renderRoute,
  }
}
