'use client'

import { Award, Download, Lock, Share2, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { userProgress, courseModulesData } from '@/lib/dashboard-data'
import { cn } from '@/lib/utils'

interface CertificateSectionProps {
  onSectionChange: (section: string) => void
}

export function CertificateSection({ onSectionChange }: CertificateSectionProps) {
  const isUnlocked = userProgress.totalProgress === 100

  const requirements = [
    {
      label: 'Completar todos os modulos',
      completed: courseModulesData.every((m) => m.progress === 100),
      progress: userProgress.totalProgress,
    },
    {
      label: 'Assistir todos os videos',
      completed: userProgress.completedLessons === userProgress.totalLessons,
      progress: Math.round(
        (userProgress.completedLessons / userProgress.totalLessons) * 100
      ),
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Certificado
        </h1>
        <p className="text-muted-foreground">
          Completa o curso para desbloquear o teu certificado de conclusao.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Certificate Preview */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-0">
            <div
              className={cn(
                'relative aspect-[1.414/1] bg-gradient-to-br from-muted via-muted/80 to-muted/60',
                !isUnlocked && 'grayscale opacity-60'
              )}
            >
              {/* Certificate Design */}
              <div className="absolute inset-4 border border-border/50 rounded-lg flex flex-col items-center justify-center p-6 text-center">
                <div className="absolute top-4 left-4 right-4 flex justify-between opacity-30">
                  <div className="h-8 w-8 rounded-full border-2 border-current" />
                  <div className="h-8 w-8 rounded-full border-2 border-current" />
                </div>
                
                <Award className="h-12 w-12 text-primary mb-4" />
                
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
                  Certificado de Conclusao
                </p>
                
                <h2 className="text-lg font-bold text-foreground mb-1">
                  IA Academy
                </h2>
                
                <p className="text-xs text-muted-foreground mb-6">
                  Ganhar Dinheiro com ChatGPT
                </p>
                
                <div className="w-32 h-px bg-border mb-4" />
                
                <p className="text-sm font-medium text-foreground">Joao Silva</p>
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-50">
                  <div className="text-[10px] text-muted-foreground">
                    Data de Conclusao
                    <br />
                    {isUnlocked ? new Date().toLocaleDateString('pt-PT') : '---'}
                  </div>
                  <div className="text-[10px] text-muted-foreground text-right">
                    ID do Certificado
                    <br />
                    {isUnlocked ? 'IA-2024-001234' : '---'}
                  </div>
                </div>
              </div>

              {/* Lock Overlay */}
              {!isUnlocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted border border-border mx-auto mb-4">
                      <Lock className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      Certificado Bloqueado
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Completa o curso para desbloquear
                    </p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Progress & Actions */}
        <div className="space-y-6">
          {/* Requirements */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">
                Requisitos para o Certificado
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {requirements.map((req) => (
                <div key={req.label} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={cn(
                          'flex h-5 w-5 items-center justify-center rounded-full',
                          req.completed
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        )}
                      >
                        {req.completed ? (
                          <CheckCircle2 className="h-3 w-3" />
                        ) : (
                          <span className="text-xs">○</span>
                        )}
                      </div>
                      <span
                        className={cn(
                          'text-sm',
                          req.completed
                            ? 'text-muted-foreground line-through'
                            : 'text-foreground'
                        )}
                      >
                        {req.label}
                      </span>
                    </div>
                    <span
                      className={cn(
                        'text-sm font-medium',
                        req.completed ? 'text-primary' : 'text-muted-foreground'
                      )}
                    >
                      {req.progress}%
                    </span>
                  </div>
                  <Progress value={req.progress} className="h-1.5" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Overall Progress */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="relative inline-flex">
                  <svg className="h-32 w-32 -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      strokeWidth="8"
                      fill="none"
                      className="stroke-muted"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      className="stroke-primary transition-all duration-500"
                      strokeDasharray={`${userProgress.totalProgress * 3.52} 352`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-3xl font-bold text-foreground">
                        {userProgress.totalProgress}%
                      </span>
                      <p className="text-xs text-muted-foreground">Completo</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {isUnlocked
                    ? 'Parabens! Completaste o curso.'
                    : `Faltam ${100 - userProgress.totalProgress}% para completar o curso.`}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-3">
            {isUnlocked ? (
              <>
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Download className="mr-2 h-4 w-4" />
                  Descarregar PDF
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="mr-2 h-4 w-4" />
                  Partilhar
                </Button>
              </>
            ) : (
              <Button
                onClick={() => onSectionChange('modules')}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Continuar o Curso
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
