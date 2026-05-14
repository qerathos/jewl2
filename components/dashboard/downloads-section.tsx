'use client'

import { Download, FileText, CheckCircle2, Search, Filter } from 'lucide-react'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { courseModulesData } from '@/lib/dashboard-data'
import { cn } from '@/lib/utils'

export function DownloadsSection() {
  const [searchQuery, setSearchQuery] = useState('')

  // Collect all resources from all modules
  const allResources = courseModulesData.flatMap((module) =>
    module.lessons.flatMap((lesson) =>
      lesson.resources.map((resource) => ({
        ...resource,
        moduleName: module.title,
        moduleNumber: module.number,
        lessonName: lesson.title,
        isLocked: module.isLocked,
      }))
    )
  )

  const filteredResources = allResources.filter(
    (r) =>
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.moduleName.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const pdfResources = filteredResources.filter((r) => r.type === 'pdf')
  const templateResources = filteredResources.filter((r) => r.type === 'template')
  const checklistResources = filteredResources.filter((r) => r.type === 'checklist')

  const stats = [
    { label: 'Total de Recursos', value: allResources.length },
    { label: 'PDFs', value: allResources.filter((r) => r.type === 'pdf').length },
    { label: 'Templates', value: allResources.filter((r) => r.type === 'template').length },
    { label: 'Checklists', value: allResources.filter((r) => r.type === 'checklist').length },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Downloads
        </h1>
        <p className="text-muted-foreground">
          Acede a todos os PDFs, templates e checklists do curso.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Pesquisar recursos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-card/50 border-border/50"
          />
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="bg-muted/50">
          <TabsTrigger value="all">Todos ({filteredResources.length})</TabsTrigger>
          <TabsTrigger value="pdf">PDFs ({pdfResources.length})</TabsTrigger>
          <TabsTrigger value="template">Templates ({templateResources.length})</TabsTrigger>
          <TabsTrigger value="checklist">Checklists ({checklistResources.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-3">
          <ResourceList resources={filteredResources} />
        </TabsContent>

        <TabsContent value="pdf" className="space-y-3">
          <ResourceList resources={pdfResources} />
        </TabsContent>

        <TabsContent value="template" className="space-y-3">
          <ResourceList resources={templateResources} />
        </TabsContent>

        <TabsContent value="checklist" className="space-y-3">
          <ResourceList resources={checklistResources} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface ResourceWithMeta {
  id: string
  title: string
  type: 'pdf' | 'template' | 'checklist'
  size: string
  url: string
  moduleName: string
  moduleNumber: number
  lessonName: string
  isLocked: boolean
}

function ResourceList({ resources }: { resources: ResourceWithMeta[] }) {
  if (resources.length === 0) {
    return (
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-12 text-center">
          <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">
            Nenhum recurso encontrado
          </h3>
          <p className="text-sm text-muted-foreground">
            Tenta ajustar a tua pesquisa ou filtros.
          </p>
        </CardContent>
      </Card>
    )
  }

  // Group by module
  const groupedByModule = resources.reduce((acc, resource) => {
    if (!acc[resource.moduleName]) {
      acc[resource.moduleName] = {
        number: resource.moduleNumber,
        resources: [],
      }
    }
    acc[resource.moduleName].resources.push(resource)
    return acc
  }, {} as Record<string, { number: number; resources: ResourceWithMeta[] }>)

  return (
    <div className="space-y-6">
      {Object.entries(groupedByModule)
        .sort(([, a], [, b]) => a.number - b.number)
        .map(([moduleName, { number, resources }]) => (
          <div key={moduleName} className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/10 text-xs font-bold text-primary">
                {number}
              </span>
              {moduleName}
            </h3>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-2">
                {resources.map((resource, idx) => (
                  <div
                    key={resource.id}
                    className={cn(
                      'flex items-center gap-3 p-3 rounded-lg transition-colors',
                      resource.isLocked
                        ? 'opacity-50'
                        : 'hover:bg-muted/50 cursor-pointer',
                      idx !== resources.length - 1 && 'border-b border-border/30'
                    )}
                  >
                    <div
                      className={cn(
                        'flex h-10 w-10 items-center justify-center rounded-lg shrink-0',
                        resource.type === 'pdf'
                          ? 'bg-chart-5/10 text-chart-5'
                          : resource.type === 'template'
                          ? 'bg-chart-2/10 text-chart-2'
                          : 'bg-primary/10 text-primary'
                      )}
                    >
                      {resource.type === 'checklist' ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <FileText className="h-5 w-5" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {resource.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {resource.lessonName}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="secondary"
                        className={cn(
                          'text-xs',
                          resource.type === 'pdf'
                            ? 'bg-chart-5/10 text-chart-5'
                            : resource.type === 'template'
                            ? 'bg-chart-2/10 text-chart-2'
                            : 'bg-primary/10 text-primary'
                        )}
                      >
                        {resource.type.toUpperCase()}
                      </Badge>
                      <span className="text-xs text-muted-foreground w-16 text-right">
                        {resource.size}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        disabled={resource.isLocked}
                        className="text-primary hover:text-primary hover:bg-primary/10"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        ))}
    </div>
  )
}
