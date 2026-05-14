'use client'

import { BookOpen, Clock, Flame, Trophy, Play, ArrowRight, Sparkles } from 'lucide-react'
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
      borderColor: 'border-primary/20',
    },
    {
      label: 'Horas Assistidas',
      value: `${userProgress.hoursWatched}h`,
      subValue: `de ${userProgress.totalHours}h totais`,
      icon: Clock,
      color: 'text-chart-2',
      bgColor: 'bg-chart-2/10',
      borderColor: 'border-chart-2/20',
    },
    {
      label: 'Sequencia',
      value: `${userProgress.streak} dias`,
      subValue: 'consecutivos',
      icon: Flame,
      color: 'text-chart-5',
      bgColor: 'bg-chart-5/10',
      borderColor: 'border-chart-5/20',
    },
    {
      label: 'Certificado',
      value: userProgress.certificateUnlocked ? 'Disponivel' : 'Bloqueado',
      subValue: userProgress.certificateUnlocked ? 'Pronto' : 'Completa o curso',
      icon: Trophy,
      color: userProgress.certificateUnlocked ? 'text-chart-3' : 'text-muted-foreground',
      bgColor: userProgress.certificateUnlocked ? 'bg-chart-3/10' : 'bg-muted/50',
      borderColor: userProgress.certificateUnlocked ? 'border-chart-3/20' : 'border-border',
    },
  ]

  // Find the current module (first incomplete one)
  const currentModule = courseModulesData.find(m => m.progress < 100 && !m.isLocked) || courseModulesData[0]
  const currentLesson = currentModule?.lessons.find(l => !l.completed) || currentModule?.lessons[0]

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Bem-vindo de volta, Joao
          </h1>
          <Sparkles className="h-5 w-5 text-primary" />
        </div>
        <p className="text-muted-foreground text-sm">
          Continua a tua jornada para dominar o ChatGPT e ganhar dinheiro online.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className={cn('border bg-card/30 backdrop-blur-sm', stat.borderColor)}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className={cn('text-2xl font-bold tracking-tight', stat.color)}>
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-muted-foreground">{stat.subValue}</p>
                </div>
                <div className={cn('rounded-lg p-2.5', stat.bgColor)}>
                  <stat.icon className={cn('h-4 w-4', stat.color)} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Continue Learning Card */}
      {currentModule && currentLesson && (
        <Card className="border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden">
          <CardHeader className="pb-3 border-b border-border/30">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-medium flex items-center gap-2">
                <Play className="h-4 w-4 text-primary" />
                Continuar a Aprender
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onSectionChange('modules')}
                className="text-xs text-muted-foreground hover:text-foreground h-8"
              >
                Ver todos
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div
                className="relative aspect-video w-full sm:w-56 rounded-lg bg-muted/50 overflow-hidden cursor-pointer group border border-border/50"
                onClick={() => onModuleSelect(currentModule.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300 group-hover:scale-110 shadow-lg shadow-primary/30">
                    <Play className="h-5 w-5 ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2">
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-primary/90 text-primary-foreground">
                    M{currentModule.number}
                  </span>
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-primary mb-1">
                    {currentModule.title}
                  </p>
                  <h3 className="text-base font-semibold text-foreground">
                    {currentLesson.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {currentLesson.description}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-[10px] mb-1.5">
                      <span className="text-muted-foreground">Progresso</span>
                      <span className="font-semibold text-primary">{currentModule.progress}%</span>
                    </div>
                    <Progress value={currentModule.progress} className="h-1" />
                  </div>
                  <Button
                    onClick={() => onModuleSelect(currentModule.id)}
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground h-8 px-4 text-xs font-medium shadow-lg shadow-primary/20"
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
      <div className="space-y-3">
        <h2 className="text-sm font-medium text-foreground flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-muted-foreground" />
          Progresso por Modulo
        </h2>
        <div className="grid gap-2">
          {courseModulesData.map((module) => (
            <Card
              key={module.id}
              className={cn(
                'border-border/30 bg-card/20 backdrop-blur-sm transition-all cursor-pointer hover:bg-card/40 hover:border-border/50',
                module.isLocked && 'opacity-50 cursor-not-allowed hover:bg-card/20'
              )}
              onClick={() => !module.isLocked && onModuleSelect(module.id)}
            >
              <CardContent className="p-3">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-md text-xs font-bold transition-colors',
                    module.progress === 100
                      ? 'bg-primary text-primary-foreground'
                      : module.isLocked
                      ? 'bg-muted/50 text-muted-foreground'
                      : module.progress > 0
                      ? 'bg-primary/15 text-primary'
                      : 'bg-muted/30 text-muted-foreground'
                  )}>
                    {module.isLocked ? (
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    ) : module.progress === 100 ? (
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      module.number
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-sm font-medium text-foreground truncate">{module.title}</h3>
                      <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                        {module.totalDuration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={module.progress} className="h-1 flex-1" />
                      <span className={cn(
                        'text-[10px] font-semibold w-7 text-right',
                        module.progress === 100 ? 'text-primary' : 'text-muted-foreground'
                      )}>
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
