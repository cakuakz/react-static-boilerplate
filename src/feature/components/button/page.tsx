import { Button } from '@/components/ui/button'
import { ChevronRight, Mail, MailOpen } from 'lucide-react'
import { useState } from 'react'

export default function ButtonPage() {
  const [isLoading, setIsLoading] = useState(false)

  const onLoading = () => {
    setIsLoading(true)
    console.log('Loading...')
    setTimeout(() => {
      setIsLoading(false)
      console.log('Loading Finished')
    }, 1000)
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="mb-8 text-3xl font-bold text-dark">Button Components</h1>

      <div className="w-fit max-w-5xl space-y-8">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Button Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Button Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="icon">
              <ChevronRight />
            </Button>
            <Button size="sm">sm</Button>
            <Button size="default">default</Button>
            <Button size="lg">lg</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">With Icons</h2>
          <div className="flex flex-wrap gap-4">
            <Button>
              <MailOpen /> Login with Email
            </Button>
            <Button>
              End Icon <Mail />
            </Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">States</h2>
          <div className="flex flex-wrap gap-4">
            <Button onClick={onLoading} isLoading={isLoading}>
              Loading!
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
