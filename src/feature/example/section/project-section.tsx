import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { ExternalLink, GitBranch } from 'lucide-react'

export default function ProjectSection() {
  return (
    <section id="projects" className="container py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-3xl font-bold tracking-tighter">
          Featured Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="group overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-emerald-100 to-emerald-200 p-6">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mb-2 text-2xl font-bold text-emerald-800">
                    TaskFlow
                  </div>
                  <div className="text-sm text-emerald-600">
                    Project Management
                  </div>
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                TaskFlow
                <div className="flex space-x-2">
                  <Button size="sm" variant="ghost">
                    <GitBranch className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
              <CardDescription>
                A modern project management tool built with Next.js and
                Supabase. Features real-time collaboration and intuitive task
                tracking.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">
                  Next.js
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Supabase
                </Badge>
                <Badge variant="outline" className="text-xs">
                  TypeScript
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 p-6">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mb-2 text-2xl font-bold text-purple-800">
                    WeatherWise
                  </div>
                  <div className="text-sm text-purple-600">Weather App</div>
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                WeatherWise
                <div className="flex space-x-2">
                  <Button size="sm" variant="ghost">
                    <GitBranch className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
              <CardDescription>
                Beautiful weather application with detailed forecasts,
                interactive maps, and location-based recommendations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">
                  React
                </Badge>
                <Badge variant="outline" className="text-xs">
                  OpenWeather API
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Tailwind
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 p-6">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mb-2 text-2xl font-bold text-orange-800">
                    EcoTracker
                  </div>
                  <div className="text-sm text-orange-600">Sustainability</div>
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                EcoTracker
                <div className="flex space-x-2">
                  <Button size="sm" variant="ghost">
                    <GitBranch className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
              <CardDescription>
                Track your carbon footprint and discover ways to live more
                sustainably. Features gamification and community challenges.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">
                  Vue.js
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Node.js
                </Badge>
                <Badge variant="outline" className="text-xs">
                  MongoDB
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
