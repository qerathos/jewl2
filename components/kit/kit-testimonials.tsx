const testimonials = [
  {
    name: "Ana Rodrigues",
    handle: "@anarod_digital",
    avatar: "AR",
    text: "Comprei com ceticismo total. Em 3 dias ja tinha o meu primeiro cliente de copywriting pelo Instagram. Os prompts prontos pouparam me imenso tempo.",
    result: "Primeiro cliente em 3 dias",
  },
  {
    name: "Tiago Mendes",
    handle: "@tiago.m",
    avatar: "TM",
    text: "Nunca tinha usado IA na minha vida. O mini curso e mesmo para iniciantes — segui o plano de 7 dias e ja tenho dois servicos a vender no Fiverr.",
    result: "2 servicos no Fiverr na semana 1",
  },
  {
    name: "Beatriz Santos",
    handle: "@beacriativos",
    avatar: "BS",
    text: "Os scripts de TikTok sao incriveis. So no primeiro mes ganhei seguidores suficientes para comecar a monetizar. O CTA de cada video funciona mesmo.",
    result: "+2.3k seguidores no primeiro mes",
  },
  {
    name: "Carlos Ferreira",
    handle: "@carlosfdigital",
    avatar: "CF",
    text: "Ja tinha tentado vender online mas nunca funcionou. Com o ebook e os prompts percebi exatamente onde estava a errar. Recomendo a qualquer pessoa.",
    result: "Primeira venda de produto digital",
  },
  {
    name: "Rita Costa",
    handle: "@ritacosta_ia",
    avatar: "RC",
    text: "O melhor €27 que ja gastei online. O plano de 7 dias da uma estrutura que nao tens de pensar — so executar. Resultados muito mais rapidos do que esperava.",
    result: "ROI em menos de 1 semana",
  },
  {
    name: "Pedro Alves",
    handle: "@pedroalvesc",
    avatar: "PA",
    text: "Uso o ChatGPT todos os dias agora para os meus servicos de gestao de redes sociais. Os 100 prompts poupam me horas de trabalho por semana.",
    result: "3 clientes de social media",
  },
];

export function KitTestimonials() {
  return (
    <section className="px-5 py-16 md:py-24 md:px-10 border-t border-[--kit-border]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="kit-section-label mb-3">Resultados Reais</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[--kit-fg] text-balance">
            O que dizem os nossos alunos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.name} className="kit-card p-5 flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-0.5" aria-label="5 estrelas">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-[--kit-neon]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-[--kit-fg-muted] leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Result badge */}
              <div className="text-[0.65rem] font-semibold px-2.5 py-1 rounded-full bg-[--kit-neon-dim] text-[--kit-neon] border border-[--kit-neon]/20 self-start">
                {t.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-1 border-t border-[--kit-border]">
                <div className="w-8 h-8 rounded-full bg-[--kit-bg-elevated] border border-[--kit-border] flex items-center justify-center text-xs font-bold text-[--kit-fg-muted]">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-xs font-semibold text-[--kit-fg]">{t.name}</p>
                  <p className="text-[0.65rem] text-[--kit-fg-subtle]">{t.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
