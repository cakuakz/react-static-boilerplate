import { createBrowserRouter } from 'react-router'
import { mainRoutes } from '@/feature/main/routes'
import { componentRoutes } from '@/feature/components/routes'

export const router = createBrowserRouter([mainRoutes, componentRoutes])
