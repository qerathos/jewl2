'use client'

import { BookOpen, Clock, Flame, Trophy, Play, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { userProgress, courseModulesData } from '@/lib/dashboard-data'
import { cn } from '@/lib/utils'

interface OverviewSectionProps {
  onModuleSelect: (moduleId: string) => void
  onSectionChange: (section: string) => void
}

export function OverviewSection({ onModuleSelect, onSectionChange }: OverviewSectionProps) {
  const stats = [
    {
      label: 'Progresso Total',
      value: `${userProgress.totalProgress}%`,
      subValue: `${userProgress.completedLessons}/${userProgress.totalLessons} licoes`,
      icon: BookOpen,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      label: 'Horas Assistidas',
      value: `${userProgress.hoursWatched}h`,
      subValue: `de ${userProgress.totalHours}h totais`,
      icon: Clock,
      color: 'text-chart-2',
      bgColor: 'bg-chart-2/10',
    },
    {
      label: 'Sequencia de Dias',
      value: `${userProgress.streak}`,
      subValue: 'dias consecutivos',
      icon: Flame,
      color: 'text-chart-3',
      bgColor: 'bg-chart-3/10',
    },
    {
      label: 'Certificado',
      value: userProgress.certificateUnlocked ? 'Disponivel' : 'Bloqueado',
      subValue: userProgress.certificateUnlocked ? 'Pronto para download' : 'Completa o curso',
      icon: Trophy,
      color: userProgress.certificateUnlocked ? 'text-primary' : 'text-muted-foreground',
      bgColor: userProgress.certificateUnlocked ? 'bg-primary/10' : 'bg-muted',
    },
  ]

  // Find the current module (first incomplete one)
  const currentModule = courseModulesData.find(m => m.progress < 100 && !m.isLocked) || courseModulesData[0]
  const currentLesson = currentModule?.lessons.find(l => !l.completed) || currentModule?.lessons[0]

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Bem-vindo de volta, Joao
        </h1>
        <p className="text-muted-foreground">
          Continua a tua jornada e domina o ChatGPT para ganhar dinheiro online.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className={cn('text-2xl font-bold', stat.color)}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.subValue}</p>
                </div>
                <div className={cn('rounded-lg p-2', stat.bgColor)}>
                  <stat.icon className={cn('h-5 w-5', stat.color)} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Continue Learning Card */}
      {currentModule && currentLesson && (
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium">Continuar a Aprender</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onSectionChange('modules')}
                className="text-muted-foreground hover:text-foreground"
              >
                Ver todos
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div
                className="relative aspect-video w-full sm:w-64 rounded-lg bg-muted overflow-hidden cursor-pointer group"
                onClick={() => onModuleSelect(currentModule.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/90 text-primary-foreground transition-transform group-hover:scale-110">
                    <Play className="h-5 w-5 ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xs font-medium text-primary">
                    Modulo {currentModule.number}
                  </p>
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">
                    {currentModule.title}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground mt-1">
                    {currentLesson.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {currentLesson.description}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Progresso do modulo</span>
                      <span className="font-medium text-primary">{currentModule.progress}%</span>
                    </div>
                    <Progress value={currentModule.progress} className="h-1.5" />
                  </div>
                  <Button
                    onClick={() => onModuleSelect(currentModule.id)}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Continuar
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Module Progress Overview */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium text-foreground">Progresso por Modulo</h2>
        <div className="grid gap-3">
          {courseModulesData.map((module) => (
            <Card
              key={module.id}
              className={cn(
                'border-border/50 bg-card/50 backdrop-blur-sm transition-colors cursor-pointer hover:bg-card/80',
                module.isLocked && 'opacity-50 cursor-not-allowed'
              )}
              onClick={() => !module.isLocked && onModuleSelect(module.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold',
                    module.progress === 100
                      ? 'bg-primary text-primary-foreground'
                      : module.isLocked
                      ? 'bg-muted text-muted-foreground'
                      : 'bg-primary/10 text-primary'
                  )}>
                    {module.isLocked ? '🔒' : module.progress === 100 ? '✓' : module.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-medium text-foreground truncate">{module.title}</h3>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {module.totalDuration}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <Progress value={module.progress} className="h-1.5 flex-1" />
                      <span className="text-xs font-medium text-primary w-8">
                        {module.progress}%
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
