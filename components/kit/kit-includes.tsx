const items = [
  {
    number: "01",
    title: "Mini Curso Completo",
    desc: "5 modulos praticos sobre como usar o ChatGPT para ganhar dinheiro. Conteudo em texto e exemplos reais.",
    tag: "Curso",
  },
  {
    number: "02",
    title: "100 Prompts Prontos",
    desc: "Prompts organizados por categoria — copywriting, TikTok, Instagram, freelancing e muito mais. Copia e usa ja.",
    tag: "Prompts",
  },
  {
    number: "03",
    title: "Ebook '30 Formas de Ganhar com IA'",
    desc: "Guia completo com 30 metodos testados, ferramentas recomendadas, erros a evitar e plano de 7 dias.",
    tag: "Ebook",
  },
  {
    number: "04",
    title: "50 Scripts TikTok Virais",
    desc: "Scripts prontos para gravar. Hook + desenvolvimento + CTA. Adaptados ao nicho de renda com IA.",
    tag: "Scripts",
  },
  {
    number: "05",
    title: "Plano de Acao de 7 Dias",
    desc: "Checklist diario para sair do zero e ter os primeiros resultados na primeira semana.",
    tag: "Plano",
  },
  {
    number: "06",
    title: "Atualizacoes Gratuitas",
    desc: "O mundo da IA muda rapido. Recebes todas as atualizacoes futuras do kit sem custo adicional.",
    tag: "Bonus",
  },
];

export function KitIncludes() {
  return (
    <section className="px-5 py-16 md:py-24 md:px-10 border-t border-[--kit-border]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="kit-section-label mb-3">Conteudo</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[--kit-fg] text-balance">
            O que esta incluido
          </h2>
          <p className="text-[--kit-fg-muted] mt-3 text-sm max-w-md mx-auto">
            Tudo o que precisas numa unica compra. Valor total superior a €200 — por apenas €27.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <div key={item.number} className="kit-card p-5 flex items-start gap-5">
              <span className="text-xs font-mono text-[--kit-fg-subtle] pt-0.5 shrink-0 w-6">{item.number}</span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-bold text-[--kit-fg] text-sm">{item.title}</h3>
                  <span className="text-[0.65rem] font-semibold px-2 py-0.5 rounded-full bg-[--kit-neon-dim] text-[--kit-neon] border border-[--kit-neon]/20">
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm text-[--kit-fg-muted] leading-relaxed">{item.desc}</p>
              </div>
              <svg className="w-4 h-4 text-[--kit-neon] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          ))}
        </div>

        {/* Value summary */}
        <div className="mt-8 kit-card p-6 border-[--kit-neon]/30 bg-[--kit-neon-dim] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs text-[--kit-fg-muted] mb-1">Valor total do kit</p>
            <p className="text-2xl font-black text-[--kit-fg]">
              <span className="line-through text-[--kit-fg-subtle] mr-2 text-lg">€200+</span>
              <span className="kit-neon-text">€27</span>
            </p>
          </div>
          <a
            href="#comprar"
            className="kit-btn-primary px-8 py-3.5 rounded-xl text-sm text-[--kit-bg] shrink-0"
          >
            Quero o Kit — €27
          </a>
        </div>
      </div>
    </section>
  );
}
