import {
  BasicTabs,
  IconNavigationTabs,
  UnderlinedTabs,
  WithBadgeTabs
} from './components'

export default function TabsPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="mb-16 text-3xl font-bold text-dark">Tabs Components</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-5">
        <div className="flex flex-col space-y-1.5">
          <p className="text-base font-semibold">Default</p>
          <BasicTabs />
        </div>
        <div className="flex flex-col space-y-1.5">
          <p className="text-base font-semibold">Underlined</p>
          <UnderlinedTabs />
        </div>
        <div className="flex flex-col space-y-1.5">
          <p className="text-base font-semibold">With Badge</p>
          <WithBadgeTabs />
        </div>
        <div className="flex flex-col space-y-1.5">
          <p className="text-base font-semibold">Icon Navigation</p>
          <IconNavigationTabs />
        </div>
      </div>
    </div>
  )
}
