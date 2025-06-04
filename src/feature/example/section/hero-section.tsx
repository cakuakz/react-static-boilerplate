import { Button } from '@/components/ui/button'
import { Calendar, GitBranch, Mail, MapPin } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="container flex min-h-[80vh] items-center justify-center py-12">
      <div className="flex flex-col items-center space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-emerald-600">Lorem Ipsum</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Full-stack developer passionate about creating beautiful, functional
            web experiences. I specialize in React, Next.js, and modern web
            technologies.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 !flex !items-center">
            <Mail className="h-4 w-4" />
            Get in touch
          </Button>
          <Button variant="outline" size="lg">
            <GitBranch className="h-4 w-4" />
            View GitHub
          </Button>
        </div>
        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>Malang, Indonesia</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>Available for work</span>
          </div>
        </div>
      </div>
    </section>
  )
}
