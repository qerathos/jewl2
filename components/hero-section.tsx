export function HeroSection() {
  return (
    <header
      className="text-[--hero-fg] py-20 md:py-28 px-4"
      style={{ background: "var(--hero-bg)" }}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-8 text-white/80">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse inline-block" />
          Mini Curso Digital · 5 Módulos Práticos
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 text-balance leading-tight">
          Ganhar Dinheiro{" "}
          <span
            className="relative inline-block"
            style={{ color: "oklch(0.78 0.16 75)" }}
          >
            com ChatGPT
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
          Aprende passo a passo como usar a Inteligência Artificial para gerar
          renda extra online — mesmo que nunca tenhas feito isso antes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <div className="flex items-center gap-3 bg-white/10 rounded-xl px-5 py-3">
            <span className="text-2xl">🎯</span>
            <div className="text-left">
              <p className="text-xs text-white/60 uppercase tracking-wider font-medium">Nível</p>
              <p className="text-white font-semibold text-sm">Iniciante Completo</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/10 rounded-xl px-5 py-3">
            <span className="text-2xl">📦</span>
            <div className="text-left">
              <p className="text-xs text-white/60 uppercase tracking-wider font-medium">Conteúdo</p>
              <p className="text-white font-semibold text-sm">5 Módulos Práticos</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/10 rounded-xl px-5 py-3">
            <span className="text-2xl">⚡</span>
            <div className="text-left">
              <p className="text-xs text-white/60 uppercase tracking-wider font-medium">Resultado</p>
              <p className="text-white font-semibold text-sm">Primeiros ganhos esta semana</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
