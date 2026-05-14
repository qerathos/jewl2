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
  Pause,
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
  const [isPlaying, setIsPlaying] = useState(false)

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
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Modulos do Curso
        </h1>
        <p className="text-sm text-muted-foreground">
          Explora todos os modulos e acompanha o teu progresso.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Module List */}
        <div className="space-y-2 lg:col-span-2">
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
              isPlaying={isPlaying}
              onPlayToggle={() => setIsPlaying(!isPlaying)}
            />
          ) : (
            <Card className="border-border/30 bg-card/20 backdrop-blur-sm h-full flex items-center justify-center">
              <CardContent className="text-center p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted/30 mx-auto mb-4">
                  <BookOpen className="h-7 w-7 text-muted-foreground" />
                </div>
                <h3 className="text-base font-medium text-foreground mb-1">
                  Seleciona um modulo
                </h3>
                <p className="text-xs text-muted-foreground max-w-[200px] mx-auto">
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
        'border-border/30 bg-card/20 backdrop-blur-sm transition-all',
        isActive && 'border-primary/30 bg-card/40',
        module.isLocked && 'opacity-50'
      )}
    >
      <Collapsible open={isExpanded && !module.isLocked} onOpenChange={onToggle}>
        <CollapsibleTrigger asChild disabled={module.isLocked}>
          <CardHeader className="p-3 cursor-pointer hover:bg-muted/20 transition-colors rounded-t-lg">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold shrink-0 transition-colors',
                  module.progress === 100
                    ? 'bg-primary text-primary-foreground'
                    : module.isLocked
                    ? 'bg-muted/50 text-muted-foreground'
                    : module.progress > 0
                    ? 'bg-primary/15 text-primary'
                    : 'bg-muted/30 text-muted-foreground'
                )}
              >
                {module.isLocked ? (
                  <Lock className="h-4 w-4" />
                ) : module.progress === 100 ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  module.number
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-foreground truncate">
                  {module.title}
                </h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] text-muted-foreground">
                    {module.lessons.length} licoes
                  </span>
                  <span className="text-muted-foreground/30">|</span>
                  <span className="text-[10px] text-muted-foreground">
                    {module.totalDuration}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {!module.isLocked && (
                  <Badge
                    variant="secondary"
                    className={cn(
                      'text-[10px] h-5 px-1.5',
                      module.progress === 100 
                        ? 'bg-primary/15 text-primary' 
                        : 'bg-muted/50 text-muted-foreground'
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
          <CardContent className="p-2 pt-0 space-y-1">
            {module.lessons.map((lesson, idx) => (
              <button
                key={lesson.id}
                onClick={() => onLessonSelect(lesson.id)}
                className={cn(
                  'w-full flex items-center gap-2.5 p-2.5 rounded-md text-left transition-all',
                  selectedLesson === lesson.id
                    ? 'bg-primary/10 border border-primary/20'
                    : 'hover:bg-muted/30'
                )}
              >
                <div
                  className={cn(
                    'flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold shrink-0 transition-colors',
                    lesson.completed
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted/50 text-muted-foreground'
                  )}
                >
                  {lesson.completed ? (
                    <CheckCircle2 className="h-3 w-3" />
                  ) : (
                    idx + 1
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={cn(
                      'text-xs font-medium truncate',
                      lesson.completed ? 'text-muted-foreground' : 'text-foreground'
                    )}
                  >
                    {lesson.title}
                  </p>
                  <p className="text-[10px] text-muted-foreground/70 mt-0.5">
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
  isPlaying: boolean
  onPlayToggle: () => void
}

function LessonDetail({ module, lesson, isPlaying, onPlayToggle }: LessonDetailProps) {
  return (
    <div className="space-y-4">
      {/* Video Player Area */}
      <Card className="border-border/30 bg-card/20 backdrop-blur-sm overflow-hidden">
        <div className="relative aspect-video bg-gradient-to-br from-muted/50 to-muted/30">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button 
              onClick={onPlayToggle}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:scale-105 shadow-xl shadow-primary/30"
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6 ml-1" />
              )}
            </button>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <Badge className="mb-2 bg-primary/90 text-primary-foreground text-[10px] h-5">
              Modulo {module.number}
            </Badge>
            <h2 className="text-lg font-semibold text-foreground">{lesson.title}</h2>
          </div>
        </div>
        <CardContent className="p-4 border-t border-border/20">
          <p className="text-sm text-muted-foreground">{lesson.description}</p>
        </CardContent>
      </Card>

      {/* Video List */}
      <Card className="border-border/30 bg-card/20 backdrop-blur-sm">
        <CardHeader className="pb-2 pt-3 px-4">
          <CardTitle className="text-xs font-medium flex items-center gap-2 text-muted-foreground uppercase tracking-wider">
            <Play className="h-3.5 w-3.5 text-primary" />
            Videos da Licao
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2 space-y-1">
          {lesson.videos.map((video) => (
            <div
              key={video.id}
              className={cn(
                'flex items-center gap-3 p-2.5 rounded-md transition-all cursor-pointer',
                video.completed ? 'bg-muted/10' : 'hover:bg-muted/20'
              )}
            >
              <div
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-md shrink-0 transition-colors',
                  video.completed
                    ? 'bg-primary/15 text-primary'
                    : 'bg-muted/30 text-muted-foreground'
                )}
              >
                {video.completed ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <Play className="h-3.5 w-3.5" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={cn(
                    'text-xs font-medium',
                    video.completed ? 'text-muted-foreground' : 'text-foreground'
                  )}
                >
                  {video.title}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <Clock className="h-3 w-3" />
                {video.duration}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Resources */}
      <Card className="border-border/30 bg-card/20 backdrop-blur-sm">
        <CardHeader className="pb-2 pt-3 px-4">
          <CardTitle className="text-xs font-medium flex items-center gap-2 text-muted-foreground uppercase tracking-wider">
            <FileText className="h-3.5 w-3.5 text-primary" />
            Recursos
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2 space-y-1">
          {lesson.resources.map((resource) => (
            <div
              key={resource.id}
              className="flex items-center gap-3 p-2.5 rounded-md hover:bg-muted/20 transition-all"
            >
              <div className={cn(
                'flex h-8 w-8 items-center justify-center rounded-md shrink-0',
                resource.type === 'pdf' ? 'bg-chart-5/10 text-chart-5' :
                resource.type === 'template' ? 'bg-chart-2/10 text-chart-2' :
                'bg-primary/10 text-primary'
              )}>
                {resource.type === 'checklist' ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <FileText className="h-4 w-4" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-foreground">
                  {resource.title}
                </p>
                <p className="text-[10px] text-muted-foreground mt-0.5">
                  {resource.type.toUpperCase()} • {resource.size}
                </p>
              </div>
              <Button variant="ghost" size="icon" className="h-7 w-7 text-primary hover:text-primary hover:bg-primary/10">
                <Download className="h-3.5 w-3.5" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
