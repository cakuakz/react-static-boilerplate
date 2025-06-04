import { Outlet, type RouteObject } from 'react-router'
import ExamplePage from './page'

export const exampleRoutes: RouteObject = {
  path: 'example',
  element: (
    <Outlet />
  ),
  children: [
    { index: true, element: <ExamplePage /> }
  ]
}