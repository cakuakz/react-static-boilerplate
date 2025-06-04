import { Button } from '@/components/ui/button'
import { GitBranch, Linkedin, Mail } from 'lucide-react'

export default function FooterSection() {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        <div className="text-sm text-muted-foreground">
          © 2024 Lorem Ipsum. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <Button variant="ghost" size="sm">
            <GitBranch className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Linkedin className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Mail className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
