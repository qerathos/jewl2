'use client'

import { useState } from 'react'
import {
  BookOpen,
  Download,
  FileText,
  GraduationCap,
  Home,
  Lock,
  Play,
  Settings,
  Trophy,
  User,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { courseModulesData, userProgress } from '@/lib/dashboard-data'

interface DashboardSidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
  activeModule: string | null
  onModuleChange: (moduleId: string) => void
}

export function DashboardSidebar({
  activeSection,
  onSectionChange,
  activeModule,
  onModuleChange,
}: DashboardSidebarProps) {
  const mainNav = [
    { id: 'overview', label: 'Visao Geral', icon: Home },
    { id: 'modules', label: 'Modulos', icon: BookOpen },
    { id: 'downloads', label: 'Downloads', icon: Download },
    { id: 'certificate', label: 'Certificado', icon: Trophy },
  ]

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-sm font-semibold text-sidebar-foreground">
              IA Academy
            </span>
            <span className="text-xs text-sidebar-foreground/60">
              Curso Completo
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-sidebar-foreground/50">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNav.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    isActive={activeSection === item.id}
                    onClick={() => onSectionChange(item.id)}
                    tooltip={item.label}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-sidebar-foreground/50">
            Modulos do Curso
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {courseModulesData.map((module) => (
                <SidebarMenuItem key={module.id}>
                  <SidebarMenuButton
                    isActive={activeModule === module.id}
                    onClick={() => !module.isLocked && onModuleChange(module.id)}
                    tooltip={module.title}
                    className={cn(
                      module.isLocked && 'opacity-50 cursor-not-allowed'
                    )}
                  >
                    <div className="relative">
                      {module.isLocked ? (
                        <Lock className="h-4 w-4" />
                      ) : module.progress === 100 ? (
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                          ✓
                        </div>
                      ) : (
                        <div className="flex h-4 w-4 items-center justify-center rounded-full border border-sidebar-foreground/40 text-[10px] font-medium">
                          {module.number}
                        </div>
                      )}
                    </div>
                    <span className="truncate">{module.title}</span>
                    {!module.isLocked && module.progress > 0 && module.progress < 100 && (
                      <span className="ml-auto text-[10px] text-primary font-medium group-data-[collapsible=icon]:hidden">
                        {module.progress}%
                      </span>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-sidebar-foreground/50">
            Teu Progresso
          </SidebarGroupLabel>
          <SidebarGroupContent className="px-2 group-data-[collapsible=icon]:hidden">
            <div className="space-y-3 rounded-lg bg-sidebar-accent/50 p-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-sidebar-foreground/70">Conclusao</span>
                <span className="font-medium text-primary">{userProgress.totalProgress}%</span>
              </div>
              <Progress value={userProgress.totalProgress} className="h-1.5" />
              <div className="flex items-center justify-between text-xs text-sidebar-foreground/60">
                <span>{userProgress.completedLessons}/{userProgress.totalLessons} licoes</span>
                <span>{userProgress.hoursWatched}h/{userProgress.totalHours}h</span>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Definicoes">
              <Settings className="h-4 w-4" />
              <span>Definicoes</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Perfil" className="h-auto py-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="" />
                <AvatarFallback className="bg-primary/20 text-primary text-xs">
                  JD
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start group-data-[collapsible=icon]:hidden">
                <span className="text-sm font-medium">Joao Silva</span>
                <span className="text-xs text-sidebar-foreground/60">Aluno Premium</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
