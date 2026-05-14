import Image from "next/image";

export function KitHero() {
  return (
    <section className="relative flex flex-col items-center text-center px-5 pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      {/* Subtle radial glow behind content */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20"
        style={{ background: "radial-gradient(ellipse at center, oklch(0.82 0.19 155) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-widest uppercase border border-[--kit-neon]/40 text-[--kit-neon] px-3 py-1.5 rounded-full bg-[--kit-neon-dim]">
          <span className="w-1.5 h-1.5 rounded-full bg-[--kit-neon] animate-pulse" />
          Produto Digital — Acesso Imediato
        </span>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] text-balance text-[--kit-fg]">
          Kit IA para{" "}
          <span className="kit-neon-text">Renda Extra</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-[--kit-fg-muted] leading-relaxed max-w-lg text-balance">
          Tudo o que precisas para comecar a ganhar dinheiro com Inteligencia Artificial — mesmo que nao percebas nada de tecnologia.
        </p>

        {/* Price block */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-baseline gap-2">
            <span className="text-[--kit-fg-subtle] line-through text-base">€97</span>
            <span className="text-4xl md:text-5xl font-black text-[--kit-fg]">€27</span>
          </div>
          <span className="text-xs text-[--kit-fg-muted]">Pagamento unico · Acesso vitalicio</span>
        </div>

        {/* CTA */}
        <a
          id="comprar"
          href="#comprar"
          className="kit-btn-primary w-full max-w-xs text-center py-4 text-base rounded-xl text-[--kit-bg] shadow-[0_0_32px_oklch(0.82_0.19_155_/_0.3)]"
        >
          Comprar Agora — €27
        </a>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[--kit-fg-muted]">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[--kit-neon]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Garantia 7 dias
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[--kit-neon]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Download imediato
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[--kit-neon]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Para iniciantes
          </span>
        </div>
      </div>

      {/* Product mockup */}
      <div className="relative z-10 mt-14 w-full max-w-xl mx-auto">
        <div className="rounded-2xl overflow-hidden border border-[--kit-border] shadow-[0_0_60px_oklch(0.82_0.19_155_/_0.1)]">
          <Image
            src="/kit-mockup.jpg"
            alt="Mockup do Kit IA para Renda Extra em tablet e smartphone"
            width={800}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
