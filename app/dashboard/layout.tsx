import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard | IA Academy',
  description: 'Acede aos teus modulos, videos e recursos do curso.',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
