import MainLayout from '@/layout'
import { Outlet, type RouteObject } from 'react-router'
import ButtonPage from './button/page'
import ComponentPage from './page'
import TabsPage from './tabs/page'

export const componentRoutes: RouteObject = {
  path: 'component',
  element: (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
  children: [
    { index: true, element: <ComponentPage /> },
    { path: 'button-page', element: <ButtonPage /> },
    { path: 'tabs-page', element: <TabsPage />}
  ]
}
