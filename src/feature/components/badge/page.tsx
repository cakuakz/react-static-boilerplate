import { Badge, badgeVariants } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Link } from 'react-router'

export default function BadgePage() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="mb-8 text-3xl font-bold text-dark">Badge Components</h1>

      <div className="w-fit max-w-5xl space-y-8">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Badge>Badge</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">With Icon</h2>
          <div className="flex flex-wrap gap-4">
            <Badge className="bg-amber-600/10 dark:bg-amber-600/20 hover:bg-amber-600/10 text-amber-500 shadow-none rounded-full">
              <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2" /> In
              Progress
            </Badge>
            <Badge className="bg-red-600/10 dark:bg-red-600/20 hover:bg-red-600/10 text-red-500 shadow-none rounded-full">
              <div className="h-1.5 w-1.5 rounded-full bg-red-500 mr-2" />{' '}
              Blocked
            </Badge>
            <Badge className="bg-emerald-600/10 dark:bg-emerald-600/20 hover:bg-emerald-600/10 text-emerald-500 shadow-none rounded-full">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2" />{' '}
              Done
            </Badge>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Clickable Link</h2>
          <div className="flex flex-wrap gap-4">
            <Badge asChild>
              <Link
                to="https://github.com/shadcn"
                target="_blank"
                className={cn(
                  badgeVariants({
                    variant: 'outline'
                  }),
                  'rounded-full pl-[3px]'
                )}
              >
                <img
                  src="https://github.com/shadcn.png"
                  className="mr-2 h-5 w-5 rounded-full"
                  alt=""
                  height={20}
                  width={20}
                />
                shadcn
              </Link>
            </Badge>
          </div>
        </section>
      </div>
    </div>
  )
}
