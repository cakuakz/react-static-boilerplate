import {
  ArrowDownUp,
  Component,
  LaptopMinimal,
  Server,
  SunMoon
} from 'lucide-react'
import { Link } from 'react-router'

export default function MainPage() {
  return (
    <div className="flex flex-col justify-center w-full mx-auto max-w-5xl px-5">
      <h1 className="font-semibold text-5xl text-dark">React Boilerplate</h1>

      <p className="text-base font-normal text-current mt-6 text-justify">
        This boilerplate is designed for static page projects — ideal for
        applications that do not require a backend service. It focuses on fast
        UI development and rapid prototyping. Built with React and a
        pre-configured set of tools, it provides a solid foundation for creating
        clean, maintainable, and responsive user interfaces with minimal setup.
        Perfect for landing pages, marketing sites, or any front-end focused
        project where performance and developer experience matter. There are
        also some component that I customized to make the user experience's
        better by making it more reusable, scalable, and also added animation in
        it.
      </p>

      <h2 className="text-2xl text-dark font-normal mt-10">What's Inside</h2>
      <ul className="list-inside list-item space-y-3 mt-6">
        <li className="flex items-center space-x-2 text-lg">
          <Component className="size-5" />
          <p className="text-current">Light UI Components</p>
        </li>
        <li className="flex items-center space-x-2 text-lg">
          <LaptopMinimal className="size-5" />
          <p className="text-current">Fast Building</p>
        </li>
        <li className="flex items-center space-x-2 text-lg">
          <ArrowDownUp className="size-5" />
          <p className="text-current">SEO Friendly</p>
        </li>
        <li className="flex items-center space-x-2 text-lg">
          <Server className="size-5" />
          <p className="text-current">Domain-Driven Design</p>
        </li>
        <li className="flex items-center space-x-2 text-lg">
          <SunMoon className="size-5" />
          <p className="text-current">Seamless Light & Dark Mode</p>
        </li>
      </ul>

      <Link
        to="/component"
        className="mt-10 inline-block bg-primary text-neutral-300 dark:text-neutral-600 font-medium px-6 py-3 rounded-xl shadow hover:shadow-md transition duration-200"
      >
        View Components
      </Link>

      <Link
        to="/example"
        className="mt-3 inline-block bg-primary text-neutral-300 dark:text-neutral-600 font-medium px-6 py-3 rounded-xl shadow hover:shadow-md transition duration-200"
      >
        View Web Example
      </Link>
    </div>
  )
}
