'use client'

import {
  BookOpen,
  Download,
  GraduationCap,
  Home,
  Lock,
  Settings,
  Trophy,
  ChevronRight,
  LogOut,
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
    <Sidebar collapsible="icon" className="border-r border-sidebar-border bg-sidebar">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-lg shadow-primary/20">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-sm font-semibold tracking-tight text-sidebar-foreground">
              IA Academy
            </span>
            <span className="text-[11px] text-sidebar-foreground/50">
              Curso Completo
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarSeparator className="bg-sidebar-border/50" />

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] font-medium uppercase tracking-widest text-sidebar-foreground/40 px-2 mb-1">
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
                    className={cn(
                      'h-9 rounded-md transition-all',
                      activeSection === item.id
                        ? 'bg-sidebar-accent text-sidebar-foreground font-medium'
                        : 'text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50'
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <ChevronRight className="ml-auto h-3 w-3 opacity-50" />
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="bg-sidebar-border/50 my-2" />

        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] font-medium uppercase tracking-widest text-sidebar-foreground/40 px-2 mb-1">
            Modulos
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
                      'h-9 rounded-md transition-all',
                      module.isLocked && 'opacity-40 cursor-not-allowed',
                      activeModule === module.id
                        ? 'bg-sidebar-accent text-sidebar-foreground'
                        : 'text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50'
                    )}
                  >
                    <div className="relative flex items-center justify-center">
                      {module.isLocked ? (
                        <Lock className="h-3.5 w-3.5" />
                      ) : module.progress === 100 ? (
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">
                          <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      ) : (
                        <div className={cn(
                          'flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-semibold',
                          module.progress > 0
                            ? 'bg-primary/20 text-primary'
                            : 'bg-sidebar-accent text-sidebar-foreground/60'
                        )}>
                          {module.number}
                        </div>
                      )}
                    </div>
                    <span className="truncate text-[13px]">{module.title}</span>
                    {!module.isLocked && module.progress > 0 && module.progress < 100 && (
                      <span className="ml-auto text-[10px] font-medium text-primary group-data-[collapsible=icon]:hidden">
                        {module.progress}%
                      </span>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="bg-sidebar-border/50 my-2" />

        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] font-medium uppercase tracking-widest text-sidebar-foreground/40 px-2 mb-1">
            Progresso
          </SidebarGroupLabel>
          <SidebarGroupContent className="px-2 group-data-[collapsible=icon]:hidden">
            <div className="space-y-3 rounded-lg bg-sidebar-accent/30 p-3 border border-sidebar-border/50">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-sidebar-foreground/60">Conclusao</span>
                <span className="text-xs font-semibold text-primary">{userProgress.totalProgress}%</span>
              </div>
              <Progress value={userProgress.totalProgress} className="h-1.5 bg-sidebar-border" />
              <div className="flex items-center justify-between text-[10px] text-sidebar-foreground/50">
                <span>{userProgress.completedLessons}/{userProgress.totalLessons} licoes</span>
                <span>{userProgress.hoursWatched}h de {userProgress.totalHours}h</span>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-2 border-t border-sidebar-border/50">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Definicoes" className="h-9 text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 rounded-md">
              <Settings className="h-4 w-4" />
              <span>Definicoes</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Perfil" className="h-auto py-2 hover:bg-sidebar-accent/50 rounded-md">
              <Avatar className="h-7 w-7 border border-sidebar-border">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-to-br from-primary/30 to-primary/10 text-primary text-[10px] font-semibold">
                  JS
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start group-data-[collapsible=icon]:hidden">
                <span className="text-[13px] font-medium text-sidebar-foreground">Joao Silva</span>
                <span className="text-[10px] text-sidebar-foreground/50">Aluno Premium</span>
              </div>
              <LogOut className="ml-auto h-3.5 w-3.5 text-sidebar-foreground/40 group-data-[collapsible=icon]:hidden" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
