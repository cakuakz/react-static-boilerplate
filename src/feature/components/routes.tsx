import MainLayout from '@/layout'
import { Outlet, type RouteObject } from 'react-router'
import ButtonPage from './button/page'
import ComponentPage from './page'
import TabsPage from './tabs/page'
import BadgePage from './badge/page'
import AutocompletePage from './autocomplete/page'

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
    { path: 'tabs-page', element: <TabsPage /> },
    { path: 'badge-page', element: <BadgePage /> },
    { path: 'autocomplete-page', element: <AutocompletePage /> }
  ]
}
