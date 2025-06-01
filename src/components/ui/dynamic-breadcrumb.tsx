import { Link, useLocation } from 'react-router'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from './breadcrumb'
import { toUpperCase } from '@/lib/utils'

export default function DynamicBreadcrumb() {
  const location = useLocation()
  const pathname = location.pathname
  const paths = pathname && pathname.split('/').filter((path) => !!path)

  const getRoute = (index: number) =>
    '/' + (paths && paths.slice(0, index + 1).join('/'))

  const renderBreadcrumbItems = () => {
    if (!paths || paths.length === 0) return null

    if (paths.length <= 4) {
      return paths.map((segment, index) => (
        <>
          <BreadcrumbItem key={index}>
            <BreadcrumbLink asChild>
              <Link to={getRoute(index)}>{toUpperCase(segment)}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {index !== paths.length - 1 && <BreadcrumbSeparator />}
        </>
      ))
    }

    const lastTwoItems = paths.slice(-2)
    const lastTwoStartIndex = paths.length - 2

    return (
      <>
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        {lastTwoItems.map((segment, index) => {
          const actualIndex = lastTwoStartIndex + index
          return (
            <div key={actualIndex}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={getRoute(actualIndex)}>{toUpperCase(segment)}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index !== lastTwoItems.length - 1 && <BreadcrumbSeparator />}
            </div>
          )
        })}
      </>
    )
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {paths && paths.length > 0 && <BreadcrumbSeparator />}
        {renderBreadcrumbItems()}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
