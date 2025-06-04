export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold">Lorem Ipsum</span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a
              href="#about"
              className="transition-colors hover:text-foreground/80"
            >
              About
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-foreground/80"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-foreground/80"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </nav>
  )
}
