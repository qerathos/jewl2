"use client";

const faqs = [
  {
    q: "Preciso de experiencia com IA ou tecnologia?",
    a: "Nao. O kit foi desenhado para pessoas que nunca usaram o ChatGPT. Tudo e explicado do zero, passo a passo, com exemplos praticos.",
  },
  {
    q: "Em quanto tempo vejo resultados?",
    a: "Varios alunos tiveram os primeiros resultados na primeira semana. Depende do metodo que escolheres e do tempo que investes. O plano de 7 dias esta estruturado para resultados rapidos.",
  },
  {
    q: "Preciso de pagar ferramentas mensais?",
    a: "Nao e obrigatorio. A maioria dos metodos funciona com o ChatGPT gratuito e ferramentas free. Partilhamos opcoes pagas apenas quando fazem sentido para escalar.",
  },
  {
    q: "O acesso e realmente vitalicio?",
    a: "Sim. Pagas uma unica vez e tens acesso para sempre, incluindo todas as atualizacoes futuras do conteudo.",
  },
  {
    q: "Como funciona a garantia de 7 dias?",
    a: "Se nos primeiros 7 dias achares que o kit nao e para ti, envia um email e devolvemos o dinheiro na totalidade. Sem perguntas.",
  },
  {
    q: "Recebo o acesso imediatamente?",
    a: "Sim. Apos o pagamento recebes um email com o link de acesso imediato a todo o conteudo. Podes comecar em minutos.",
  },
  {
    q: "Este kit serve para Portugal e Brasil?",
    a: "Sim. Todo o conteudo e em portugues e os metodos funcionam tanto em Portugal como no Brasil e restantes paises de lingua portuguesa.",
  },
];

interface KitFaqProps {
  open: number | null;
  setOpen: (i: number | null) => void;
}

export function KitFaq({ open, setOpen }: KitFaqProps) {
  return (
    <section className="px-5 py-16 md:py-24 md:px-10 border-t border-[--kit-border]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="kit-section-label mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[--kit-fg] text-balance">
            Perguntas frequentes
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-[--kit-border]">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-[--kit-fg] group-hover:text-[--kit-neon] transition-colors leading-relaxed">
                    {faq.q}
                  </span>
                  <span
                    className="shrink-0 w-5 h-5 flex items-center justify-center rounded-full border border-[--kit-border] text-[--kit-fg-muted] group-hover:border-[--kit-neon]/40 group-hover:text-[--kit-neon] transition-all mt-0.5"
                    aria-hidden="true"
                  >
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 12 12"
                    >
                      <path d="M6 1v10M1 6h10" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm text-[--kit-fg-muted] leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
