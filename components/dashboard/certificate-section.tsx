'use client'

import { Award, Download, Lock, Share2, CheckCircle2, ArrowRight } from 'lucide-react'
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
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Certificado
        </h1>
        <p className="text-sm text-muted-foreground">
          Completa o curso para desbloquear o teu certificado de conclusao.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Certificate Preview */}
        <Card className="border-border/30 bg-card/20 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-0">
            <div
              className={cn(
                'relative aspect-[1.414/1] bg-gradient-to-br from-muted/30 via-muted/20 to-muted/10',
                !isUnlocked && 'grayscale opacity-60'
              )}
            >
              {/* Certificate Design */}
              <div className="absolute inset-4 border border-border/30 rounded-lg flex flex-col items-center justify-center p-6 text-center bg-card/10 backdrop-blur-sm">
                <div className="absolute top-4 left-4 right-4 flex justify-between opacity-20">
                  <div className="h-6 w-6 rounded-full border-2 border-current" />
                  <div className="h-6 w-6 rounded-full border-2 border-current" />
                </div>
                
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
                  Certificado de Conclusao
                </p>
                
                <h2 className="text-base font-bold text-foreground mb-1">
                  IA Academy
                </h2>
                
                <p className="text-[10px] text-muted-foreground mb-6">
                  Ganhar Dinheiro com ChatGPT
                </p>
                
                <div className="w-24 h-px bg-border/50 mb-4" />
                
                <p className="text-sm font-semibold text-foreground">Joao Silva</p>
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-40">
                  <div className="text-[9px] text-muted-foreground text-left">
                    Data de Conclusao
                    <br />
                    <span className="text-foreground">{isUnlocked ? new Date().toLocaleDateString('pt-PT') : '---'}</span>
                  </div>
                  <div className="text-[9px] text-muted-foreground text-right">
                    ID do Certificado
                    <br />
                    <span className="text-foreground">{isUnlocked ? 'IA-2024-001234' : '---'}</span>
                  </div>
                </div>
              </div>

              {/* Lock Overlay */}
              {!isUnlocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/70 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted/30 border border-border/30 mx-auto mb-3">
                      <Lock className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      Certificado Bloqueado
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      Completa o curso para desbloquear
                    </p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Progress & Actions */}
        <div className="space-y-4">
          {/* Requirements */}
          <Card className="border-border/30 bg-card/20 backdrop-blur-sm">
            <CardHeader className="pb-2 pt-3 px-4">
              <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Requisitos
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-2 space-y-4">
              {requirements.map((req) => (
                <div key={req.label} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={cn(
                          'flex h-5 w-5 items-center justify-center rounded-full transition-colors',
                          req.completed
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted/50 text-muted-foreground'
                        )}
                      >
                        {req.completed ? (
                          <CheckCircle2 className="h-3 w-3" />
                        ) : (
                          <span className="text-[10px]">○</span>
                        )}
                      </div>
                      <span
                        className={cn(
                          'text-xs',
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
                        'text-xs font-semibold',
                        req.completed ? 'text-primary' : 'text-muted-foreground'
                      )}
                    >
                      {req.progress}%
                    </span>
                  </div>
                  <Progress value={req.progress} className="h-1" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Overall Progress */}
          <Card className="border-border/30 bg-card/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="relative inline-flex">
                  <svg className="h-28 w-28 -rotate-90">
                    <circle
                      cx="56"
                      cy="56"
                      r="48"
                      strokeWidth="6"
                      fill="none"
                      className="stroke-muted/30"
                    />
                    <circle
                      cx="56"
                      cy="56"
                      r="48"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      className="stroke-primary transition-all duration-700 ease-out"
                      strokeDasharray={`${userProgress.totalProgress * 3.02} 302`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-foreground">
                        {userProgress.totalProgress}%
                      </span>
                      <p className="text-[10px] text-muted-foreground">Completo</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground max-w-[200px] mx-auto">
                  {isUnlocked
                    ? 'Parabens! Completaste o curso com sucesso.'
                    : `Faltam ${100 - userProgress.totalProgress}% para completar o curso e desbloquear o certificado.`}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-2">
            {isUnlocked ? (
              <>
                <Button className="flex-1 h-9 bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-medium shadow-lg shadow-primary/20">
                  <Download className="mr-2 h-3.5 w-3.5" />
                  Descarregar PDF
                </Button>
                <Button variant="outline" className="flex-1 h-9 text-xs border-border/30 hover:bg-muted/20">
                  <Share2 className="mr-2 h-3.5 w-3.5" />
                  Partilhar
                </Button>
              </>
            ) : (
              <Button
                onClick={() => onSectionChange('modules')}
                className="w-full h-9 bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-medium shadow-lg shadow-primary/20"
              >
                Continuar o Curso
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
