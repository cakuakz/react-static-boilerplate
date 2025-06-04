import { Badge } from '@/components/ui/badge'

export default function AboutSection() {
  return (
    <section id="about" className="container py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-3xl font-bold tracking-tighter">About Me</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              I'm a passionate full-stack developer with over 2 years of
              experience building web applications. I love turning complex
              problems into simple, beautiful designs that provide great user
              experiences.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or hiking in the beautiful
              California mountains.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">PostgreSQL</Badge>
              <Badge variant="secondary">AWS</Badge>
              <Badge variant="secondary">Docker</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">GraphQL</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
