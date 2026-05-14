const benefits = [
  {
    icon: "⚡",
    title: "Resultados em dias",
    desc: "Metodos testados e validados. Sem teoria — so o que realmente funciona para gerar renda.",
  },
  {
    icon: "🎯",
    title: "Feito para iniciantes",
    desc: "Nao precisas de experiencia com IA. Guias passo a passo para comecar do zero.",
  },
  {
    icon: "💸",
    title: "Multiplas fontes de renda",
    desc: "30 formas diferentes de ganhar dinheiro. Escolhe a que mais se adapta ao teu ritmo.",
  },
  {
    icon: "🤖",
    title: "Ferramentas gratuitas",
    desc: "Usas o ChatGPT gratuito e outras ferramentas sem custos mensais para comecar.",
  },
  {
    icon: "📱",
    title: "Funciona no telemovel",
    desc: "Todo o material e acessivel no teu smartphone. Aprende onde e quando quiseres.",
  },
  {
    icon: "🔒",
    title: "Acesso vitalicio",
    desc: "Pagas uma vez e tens o conteudo para sempre, incluindo todas as atualizacoes futuras.",
  },
];

export function KitBenefits() {
  return (
    <section className="px-5 py-16 md:py-24 md:px-10 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <p className="kit-section-label mb-3">Beneficios</p>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[--kit-fg] text-balance">
          Porque este kit e diferente
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {benefits.map((b) => (
          <div key={b.title} className="kit-card p-6 flex flex-col gap-3">
            <span className="text-2xl" role="img" aria-label={b.title}>{b.icon}</span>
            <h3 className="font-bold text-[--kit-fg] text-base">{b.title}</h3>
            <p className="text-sm text-[--kit-fg-muted] leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
