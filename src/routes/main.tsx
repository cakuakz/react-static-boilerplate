import { createBrowserRouter } from 'react-router'
import { mainRoutes } from '@/feature/main/routes'
import { componentRoutes } from '@/feature/components/routes'
import { exampleRoutes } from '@/feature/example/route'

export const router = createBrowserRouter([
  mainRoutes,
  componentRoutes,
  exampleRoutes
])
