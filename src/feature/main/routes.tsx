import { Outlet, type RouteObject } from 'react-router'
import MainPage from './page'
import MainLayout from '@/layout'

export const mainRoutes: RouteObject = {
  element: (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
  children: [{ path: '/', element: <MainPage /> }]
}
