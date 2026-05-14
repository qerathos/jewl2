"use client";

import { useState } from "react";
import { courseModules } from "@/lib/course-data";
import { HeroSection } from "@/components/hero-section";
import { ModuleCard } from "@/components/module-card";
import { ModuleDetail } from "@/components/module-detail";
import { Sparkles, BookOpen, Video, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function CoursePage() {
  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);

  const selectedModule = courseModules.find((m) => m.id === selectedModuleId);

  return (
    <div className="min-h-screen">
      <HeroSection />

      <main className="container mx-auto px-4 py-16 max-w-6xl">
        {!selectedModule ? (
          <>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                5 Módulos. Zero Complicações.
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Cada módulo é direto e prático. Sem enchimento, sem teoria. Só o
                que precisas para começar a ganhar.
              </p>
            </div>

            <div className="grid gap-6 md:gap-8">
              {courseModules.map((module) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  onClick={() => setSelectedModuleId(module.id)}
                />
              ))}
            </div>

                        {/* Prompts Bonus Section */}
            <Link 
              href="/prompts"
              className="block mt-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/30 rounded-2xl p-8 md:p-12 hover:border-primary/60 transition-all group"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-4 rounded-xl group-hover:bg-primary/30 transition-colors">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">Bonus Exclusivo</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-1">
                      100+ Prompts Prontos
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      Copia, cola e adapta. Resultados imediatos.
                    </p>
                  </div>
                </div>
                <span className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold group-hover:opacity-90 transition-opacity shrink-0">
                  Aceder Agora
                </span>
              </div>
            </Link>

            {/* Ebook Bonus Section */}
            <Link 
              href="/ebook"
              className="block mt-6 bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 border-2 border-accent/30 rounded-2xl p-8 md:p-12 hover:border-accent/60 transition-all group"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-accent/20 p-4 rounded-xl group-hover:bg-accent/30 transition-colors">
                    <BookOpen className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">Ebook Premium</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-1">
                      30 Formas de Ganhar com IA
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      Metodos testados + plano de 7 dias para comecar.
                    </p>
                  </div>
                </div>
                <span className="bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold group-hover:opacity-90 transition-opacity shrink-0">
                  Ler Ebook
                </span>
              </div>
            </Link>

            {/* TikTok Scripts Section */}
            <Link 
              href="/tiktok-scripts"
              className="block mt-6 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-2 border-foreground/10 rounded-2xl p-8 md:p-12 hover:border-primary/40 transition-all group"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-foreground/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Video className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Viral Content</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-1">
                      50 Scripts TikTok Virais
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      Hook + desenvolvimento + CTA. Prontos para gravar.
                    </p>
                  </div>
                </div>
                <span className="bg-foreground text-background px-6 py-3 rounded-xl font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  Ver Scripts
                </span>
              </div>
            </Link>

            {/* Kit Landing Page */}
            <Link
              href="/checkout"
              className="block mt-6 bg-[oklch(0.12_0_0)] border-2 border-[oklch(0.82_0.19_155_/_0.35)] rounded-2xl p-8 md:p-12 hover:border-[oklch(0.82_0.19_155_/_0.7)] hover:shadow-[0_0_32px_oklch(0.82_0.19_155_/_0.12)] transition-all group"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-[oklch(0.82_0.19_155_/_0.12)] p-4 rounded-xl group-hover:bg-[oklch(0.82_0.19_155_/_0.2)] transition-colors">
                    <ShoppingBag className="w-8 h-8 text-[oklch(0.82_0.19_155)]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[oklch(0.82_0.19_155)] uppercase tracking-wider">Landing Page Premium</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mt-1">
                      Kit IA para Renda Extra
                    </h3>
                    <p className="text-[oklch(0.62_0_0)] mt-1">
                      Pagina de vendas dark mode estilo Apple/startup.
                    </p>
                  </div>
                </div>
                <span className="bg-[oklch(0.82_0.19_155)] text-[oklch(0.08_0_0)] px-6 py-3 rounded-xl font-bold group-hover:shadow-[0_0_20px_oklch(0.82_0.19_155_/_0.4)] transition-shadow shrink-0">
                  Comprar Agora
                </span>
              </div>
            </Link>

            {/* Dashboard Access */}
            <Link
              href="/dashboard"
              className="block mt-6 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border-2 border-accent/30 rounded-2xl p-8 md:p-12 hover:border-accent/60 transition-all group"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-accent/20 p-4 rounded-xl group-hover:bg-accent/30 transition-colors">
                    <BookOpen className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">Área do Membro</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-1">
                      Acessar Dashboard
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      Veja seus módulos, progresso e recursos exclusivos.
                    </p>
                  </div>
                </div>
                <span className="bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold group-hover:opacity-90 transition-opacity shrink-0">
                  Entrar
                </span>
              </div>
            </Link>

            <div className="mt-16 text-center bg-card border border-border rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Pronto para Começar?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-xl mx-auto">
                Este curso foi feito para quem quer resultados, não desculpas.
                Começa pelo Módulo 1 e dá o primeiro passo hoje.
              </p>
              <button
                onClick={() => setSelectedModuleId(1)}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Começar Agora
              </button>
            </div>
          </>
        ) : (
          <ModuleDetail
            module={selectedModule}
            onBack={() => setSelectedModuleId(null)}
          />
        )}
      </main>

      <footer className="border-t border-border bg-card py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 Ganhar Dinheiro com ChatGPT — Mini Curso Digital</p>
        </div>
      </footer>
    </div>
  );
}
