import { Link } from 'react-router'

export default function ComponentPage() {
  return (
    <div className="flex flex-col justify-center w-full mx-auto max-w-5xl px-5 py-20">
      <h1 className="text-4xl font-bold mb-4">Component Showcase</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
        This section contains reusable UI components built with{' '}
        <span className="font-semibold">shadcnUI</span> to ensure a clean and
        lightweight design. Some components also include subtle animations to
        make them feel more interactive and engaging.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Link
          to="/component/button-page"
          className="bg-primary text-white px-5 py-3 rounded-2xl shadow hover:shadow-lg transition duration-200 text-center"
        >
          Button Component
        </Link>

        <Link
          to="/component/tabs-page"
          className="bg-primary text-white px-5 py-3 rounded-2xl shadow hover:shadow-lg transition duration-200 text-center"
        >
          Tabs Component
        </Link>

        <Link
          to="/component/modal-page"
          className="bg-primary text-white px-5 py-3 rounded-2xl shadow hover:shadow-lg transition duration-200 text-center"
        >
          Modal Component
        </Link>

        {/* Add more components as needed */}
      </div>
    </div>
  )
}
