'use client'

import { useState } from 'react'
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Download,
  FileText,
  Lock,
  Play,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { courseModulesData, type CourseModule, type Lesson } from '@/lib/dashboard-data'
import { cn } from '@/lib/utils'

interface ModulesSectionProps {
  activeModule: string | null
  onModuleChange: (moduleId: string) => void
}

export function ModulesSection({ activeModule, onModuleChange }: ModulesSectionProps) {
  const [expandedModules, setExpandedModules] = useState<string[]>(
    activeModule ? [activeModule] : []
  )
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null)

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    )
    onModuleChange(moduleId)
  }

  const selectedModule = courseModulesData.find((m) => m.id === activeModule)
  const currentLesson = selectedModule?.lessons.find((l) => l.id === selectedLesson) ||
    selectedModule?.lessons.find((l) => !l.completed) ||
    selectedModule?.lessons[0]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Modulos do Curso
        </h1>
        <p className="text-muted-foreground">
          Explora todos os modulos e acompanha o teu progresso.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Module List */}
        <div className="space-y-3 lg:col-span-2">
          {courseModulesData.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              isExpanded={expandedModules.includes(module.id)}
              isActive={activeModule === module.id}
              onToggle={() => toggleModule(module.id)}
              onLessonSelect={setSelectedLesson}
              selectedLesson={selectedLesson}
            />
          ))}
        </div>

        {/* Lesson Detail */}
        <div className="lg:col-span-3">
          {currentLesson && selectedModule ? (
            <LessonDetail
              module={selectedModule}
              lesson={currentLesson}
            />
          ) : (
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm h-full flex items-center justify-center">
              <CardContent className="text-center p-12">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Seleciona um modulo
                </h3>
                <p className="text-sm text-muted-foreground">
                  Escolhe um modulo na lista para ver as licoes disponiveis.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

interface ModuleCardProps {
  module: CourseModule
  isExpanded: boolean
  isActive: boolean
  onToggle: () => void
  onLessonSelect: (lessonId: string) => void
  selectedLesson: string | null
}

function ModuleCard({
  module,
  isExpanded,
  isActive,
  onToggle,
  onLessonSelect,
  selectedLesson,
}: ModuleCardProps) {
  return (
    <Card
      className={cn(
        'border-border/50 bg-card/50 backdrop-blur-sm transition-all',
        isActive && 'border-primary/50 bg-card/80',
        module.isLocked && 'opacity-50'
      )}
    >
      <Collapsible open={isExpanded && !module.isLocked} onOpenChange={onToggle}>
        <CollapsibleTrigger asChild disabled={module.isLocked}>
          <CardHeader className="p-4 cursor-pointer hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold shrink-0',
                  module.progress === 100
                    ? 'bg-primary text-primary-foreground'
                    : module.isLocked
                    ? 'bg-muted text-muted-foreground'
                    : 'bg-primary/10 text-primary'
                )}
              >
                {module.isLocked ? (
                  <Lock className="h-4 w-4" />
                ) : module.progress === 100 ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  module.number
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-foreground truncate">
                    {module.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-muted-foreground">
                    {module.lessons.length} licoes
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {module.totalDuration}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {!module.isLocked && (
                  <Badge
                    variant={module.progress === 100 ? 'default' : 'secondary'}
                    className={cn(
                      'text-xs',
                      module.progress === 100 && 'bg-primary text-primary-foreground'
                    )}
                  >
                    {module.progress}%
                  </Badge>
                )}
                {!module.isLocked && (
                  isExpanded ? (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  )
                )}
              </div>
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="p-4 pt-0 space-y-2">
            {module.lessons.map((lesson, idx) => (
              <button
                key={lesson.id}
                onClick={() => onLessonSelect(lesson.id)}
                className={cn(
                  'w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors',
                  selectedLesson === lesson.id
                    ? 'bg-primary/10 border border-primary/30'
                    : 'hover:bg-muted/50'
                )}
              >
                <div
                  className={cn(
                    'flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium shrink-0',
                    lesson.completed
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  )}
                >
                  {lesson.completed ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    idx + 1
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={cn(
                      'text-sm font-medium truncate',
                      lesson.completed ? 'text-muted-foreground' : 'text-foreground'
                    )}
                  >
                    {lesson.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {lesson.videos.length} videos • {lesson.resources.length} recursos
                  </p>
                </div>
              </button>
            ))}
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}

interface LessonDetailProps {
  module: CourseModule
  lesson: Lesson
}

function LessonDetail({ module, lesson }: LessonDetailProps) {
  return (
    <div className="space-y-6">
      {/* Video Player Area */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
        <div className="relative aspect-video bg-muted">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110 shadow-lg">
              <Play className="h-7 w-7 ml-1" />
            </button>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <Badge className="mb-2 bg-primary/90 text-primary-foreground">
              Modulo {module.number}
            </Badge>
            <h2 className="text-xl font-semibold text-foreground">{lesson.title}</h2>
          </div>
        </div>
        <CardContent className="p-4">
          <p className="text-muted-foreground">{lesson.description}</p>
        </CardContent>
      </Card>

      {/* Video List */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-medium flex items-center gap-2">
            <Play className="h-4 w-4 text-primary" />
            Videos da Licao
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0 space-y-2">
          {lesson.videos.map((video, idx) => (
            <div
              key={video.id}
              className={cn(
                'flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer',
                video.completed ? 'bg-muted/30' : 'hover:bg-muted/50'
              )}
            >
              <div
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-lg shrink-0',
                  video.completed
                    ? 'bg-primary/20 text-primary'
                    : 'bg-muted text-muted-foreground'
                )}
              >
                {video.completed ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={cn(
                    'text-sm font-medium',
                    video.completed ? 'text-muted-foreground' : 'text-foreground'
                  )}
                >
                  {video.title}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {video.duration}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Resources */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-medium flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" />
            Recursos e Downloads
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0 space-y-2">
          {lesson.resources.map((resource) => (
            <div
              key={resource.id}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                {resource.type === 'pdf' ? (
                  <FileText className="h-4 w-4" />
                ) : resource.type === 'template' ? (
                  <FileText className="h-4 w-4" />
                ) : (
                  <CheckCircle2 className="h-4 w-4" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">
                  {resource.title}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {resource.type.toUpperCase()} • {resource.size}
                </p>
              </div>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
