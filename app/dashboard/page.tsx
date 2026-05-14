'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar'
import { OverviewSection } from '@/components/dashboard/overview-section'
import { ModulesSection } from '@/components/dashboard/modules-section'
import { DownloadsSection } from '@/components/dashboard/downloads-section'
import { CertificateSection } from '@/components/dashboard/certificate-section'

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState('overview')
  const [activeModule, setActiveModule] = useState<string | null>(null)

  const handleSectionChange = (section: string) => {
    setActiveSection(section)
    if (section !== 'modules') {
      setActiveModule(null)
    }
  }

  const handleModuleSelect = (moduleId: string) => {
    setActiveModule(moduleId)
    setActiveSection('modules')
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <DashboardSidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        activeModule={activeModule}
        onModuleChange={setActiveModule}
      />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-border/50 bg-background/80 backdrop-blur-sm px-4 md:px-6">
          <SidebarTrigger className="md:hidden" />
          <div className="flex-1" />
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Ajuda
          </Button>
        </header>
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="mx-auto max-w-6xl">
            {activeSection === 'overview' && (
              <OverviewSection
                onModuleSelect={handleModuleSelect}
                onSectionChange={handleSectionChange}
              />
            )}
            {activeSection === 'modules' && (
              <ModulesSection
                activeModule={activeModule}
                onModuleChange={setActiveModule}
              />
            )}
            {activeSection === 'downloads' && <DownloadsSection />}
            {activeSection === 'certificate' && (
              <CertificateSection onSectionChange={handleSectionChange} />
            )}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
