"use client";

import { useState } from "react";
import { tiktokScripts, tiktokCategories, TikTokScript } from "@/lib/tiktok-scripts-data";
import { 
  Grid3X3, 
  Wallet, 
  Briefcase, 
  FileText, 
  TrendingUp, 
  Package,
  Play,
  Copy,
  Check,
  Clock,
  ChevronLeft,
  Search,
  Video
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const iconMap: Record<string, React.ElementType> = {
  Grid3X3,
  Wallet,
  Briefcase,
  FileText,
  TrendingUp,
  Package,
};

export default function TikTokScriptsPage() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedScript, setExpandedScript] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredScripts = tiktokScripts.filter((script) => {
    const matchesCategory = activeCategory === "todos" || script.category === activeCategory;
    const matchesSearch = 
      script.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      script.hook.toLowerCase().includes(searchQuery.toLowerCase()) ||
      script.development.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const copyScript = (script: TikTokScript) => {
    const fullScript = `🎬 ${script.title}\n\n🪝 HOOK:\n"${script.hook}"\n\n📝 DESENVOLVIMENTO:\n${script.development}\n\n👉 CTA:\n"${script.cta}"\n\n⏱️ Duracao: ${script.duration}`;
    navigator.clipboard.writeText(fullScript);
    setCopiedId(script.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-[var(--hero-bg)] text-[var(--hero-fg)] py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Voltar ao Curso
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary/20 p-3 rounded-xl">
              <Video className="w-8 h-8 text-primary" />
            </div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              50 Scripts Virais
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Scripts TikTok para Ganhar Dinheiro com IA
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Cada script tem hook forte, desenvolvimento rapido e CTA simples. Prontos para gravar em 15-30 segundos.
          </p>

          {/* Search */}
          <div className="mt-8 relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <Input
              type="text"
              placeholder="Pesquisar scripts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary"
            />
          </div>
        </div>
      </header>

      {/* Category Navigation */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {tiktokCategories.map((category) => {
              const Icon = iconMap[category.icon];
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all text-sm font-medium ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Scripts Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-muted-foreground mb-6">
            {filteredScripts.length} scripts encontrados
          </p>

          <div className="grid gap-4">
            {filteredScripts.map((script) => (
              <article
                key={script.id}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all"
              >
                {/* Script Header - Always Visible */}
                <button
                  onClick={() => setExpandedScript(expandedScript === script.id ? null : script.id)}
                  className="w-full p-6 text-left flex items-start gap-4"
                >
                  <div className="bg-primary/10 text-primary font-bold text-lg w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    {script.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        {tiktokCategories.find(c => c.id === script.category)?.label}
                      </span>
                      <span className="text-muted-foreground/50">•</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {script.duration}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {script.title}
                    </h3>
                    <p className="text-primary font-medium text-sm">
                      &ldquo;{script.hook}&rdquo;
                    </p>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center transition-transform ${expandedScript === script.id ? 'rotate-90' : ''}`}>
                    <Play className="w-4 h-4 text-muted-foreground" />
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedScript === script.id && (
                  <div className="px-6 pb-6 pt-2 border-t border-border bg-muted/30">
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Hook */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">🪝</span>
                          <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Hook</span>
                        </div>
                        <p className="text-foreground font-medium bg-primary/10 p-4 rounded-xl border-l-4 border-primary">
                          &ldquo;{script.hook}&rdquo;
                        </p>
                      </div>

                      {/* Development */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">📝</span>
                          <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Desenvolvimento</span>
                        </div>
                        <p className="text-muted-foreground bg-card p-4 rounded-xl border border-border">
                          {script.development}
                        </p>
                      </div>

                      {/* CTA */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">👉</span>
                          <span className="text-sm font-semibold text-foreground uppercase tracking-wider">CTA</span>
                        </div>
                        <p className="text-foreground font-medium bg-accent/20 p-4 rounded-xl border-l-4 border-accent">
                          &ldquo;{script.cta}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Copy Button */}
                    <div className="mt-6 flex justify-end">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyScript(script);
                        }}
                        variant={copiedId === script.id ? "default" : "outline"}
                        className="gap-2"
                      >
                        {copiedId === script.id ? (
                          <>
                            <Check className="w-4 h-4" />
                            Copiado!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copiar Script Completo
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>

          {filteredScripts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">Nenhum script encontrado.</p>
            </div>
          )}
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Dicas para Scripts Virais
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-2xl border border-border">
              <span className="text-3xl mb-4 block">⚡</span>
              <h3 className="font-semibold text-foreground mb-2">Hook em 0.5s</h3>
              <p className="text-sm text-muted-foreground">
                O primeiro meio segundo decide se a pessoa fica. Comeca com movimento ou frase chocante.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <span className="text-3xl mb-4 block">🎯</span>
              <h3 className="font-semibold text-foreground mb-2">Um Ponto So</h3>
              <p className="text-sm text-muted-foreground">
                Cada video deve ter uma unica mensagem clara. Nao tentes explicar tudo de uma vez.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <span className="text-3xl mb-4 block">🔁</span>
              <h3 className="font-semibold text-foreground mb-2">Loop Natural</h3>
              <p className="text-sm text-muted-foreground">
                Termina o video de forma que incentive a pessoa a ver de novo. Mais loops, mais alcance.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <span className="text-3xl mb-4 block">📊</span>
              <h3 className="font-semibold text-foreground mb-2">Testa Sempre</h3>
              <p className="text-sm text-muted-foreground">
                Posta o mesmo conteudo com hooks diferentes. O algoritmo vai dizer qual funciona melhor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">
            Pronto para criar conteudo viral?
          </p>
          <Link href="/">
            <Button size="lg" className="gap-2">
              Voltar ao Curso Completo
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
