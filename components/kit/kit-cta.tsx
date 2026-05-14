export function KitCta() {
  return (
    <section
      id="comprar"
      className="px-5 py-16 md:py-24 md:px-10 border-t border-[--kit-border]"
    >
      <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Glow dot */}
        <span className="w-3 h-3 rounded-full bg-[--kit-neon] shadow-[0_0_16px_var(--kit-neon)]" aria-hidden="true" />

        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[--kit-fg] text-balance leading-tight">
          Pronto para comecar a ganhar com IA?
        </h2>

        <p className="text-[--kit-fg-muted] text-sm md:text-base leading-relaxed max-w-sm">
          Junta-te a centenas de pessoas que ja estao a usar a IA para criar renda extra — sem sair de casa.
        </p>

        {/* Offer box */}
        <div className="w-full kit-card p-6 border-[--kit-neon]/25 flex flex-col gap-4 text-left">
          <p className="text-xs text-[--kit-fg-muted] font-semibold uppercase tracking-wider">O que recebes</p>
          {[
            "Mini Curso ChatGPT para Iniciantes",
            "100 Prompts Prontos por Categoria",
            "Ebook 30 Formas de Ganhar com IA",
            "50 Scripts Virais para TikTok",
            "Plano de Acao de 7 Dias",
            "Atualizacoes Gratuitas Vitalicas",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-[--kit-fg]">
              <svg className="w-4 h-4 text-[--kit-neon] shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </div>
          ))}

          <div className="kit-divider" />

          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[--kit-fg-subtle] line-through text-sm mr-2">€97</span>
              <span className="text-3xl font-black text-[--kit-fg]">€27</span>
            </div>
            <span className="text-[0.65rem] text-[--kit-fg-muted] text-right">Pagamento unico<br />Acesso imediato</span>
          </div>

          <a
            href="#"
            className="kit-btn-primary block w-full text-center py-4 text-base rounded-xl text-[--kit-bg] shadow-[0_0_40px_oklch(0.82_0.19_155_/_0.35)]"
          >
            Comprar Agora — €27
          </a>

          <p className="text-center text-xs text-[--kit-fg-subtle]">
            Garantia de reembolso total em 7 dias. Sem riscos.
          </p>
        </div>

        {/* Payment icons */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {["Visa", "Mastercard", "PayPal", "MB Way"].map((p) => (
            <span
              key={p}
              className="text-[0.65rem] font-semibold text-[--kit-fg-subtle] border border-[--kit-border] px-2.5 py-1 rounded-md bg-[--kit-bg-card]"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
