import DynamicBreadcrumb from '@/components/ui/dynamic-breadcrumb'
import { ModeToggle } from '@/components/ui/mode-toggle'
import type { ReactNode } from 'react'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col py-8 px-12 min-h-screen">
      <div className="absolute top-7 right-7">
        <ModeToggle />
      </div>

      <DynamicBreadcrumb />
      <div className="my-auto">{children}</div>
    </div>
  )
}
