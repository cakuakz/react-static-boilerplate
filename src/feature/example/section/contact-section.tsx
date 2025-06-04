import { Button } from '@/components/ui/button'
import { Linkedin, Mail } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="container py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tighter">
          Let's Work Together
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          I'm always interested in new opportunities and exciting projects.
          Let's discuss how we can bring your ideas to life.
        </p>
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            <Mail className="h-4 w-4" />
            lorem.ipsum@email.com
          </Button>
          <Button variant="outline" size="lg">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  )
}
