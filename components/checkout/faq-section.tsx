'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    question: 'Quanto tempo leva para gerar renda?',
    answer:
      'Muitos alunos relatam seus primeiros ganhos em 2-3 semanas. Tudo depende do seu comprometimento e do tempo que você dedica. Os templates inclusos aceleram muito o processo.',
  },
  {
    question: 'Preciso ter experiência com IA?',
    answer:
      'Não! Este kit foi criado para iniciantes completos. Toda a instruçao é passo a passo, com vídeos mostrando exatamente o que fazer.',
  },
  {
    question: 'Os prompts continuam funcionando?',
    answer:
      'Sim! Os prompts são testados regularmente e atualizamos o conteúdo quando o ChatGPT muda. Você tem acesso a todas as atualizações gratuitamente.',
  },
  {
    question: 'Quanto posso ganhar?',
    answer:
      'Depende do seu esforço e da plataforma que escolher. Alunos ganham entre €500-€5.000/mês. Alguns ganham mais. Tudo é possível com a estratégia correta.',
  },
  {
    question: 'E se não gostar?',
    answer:
      'Oferecemos garantia de 30 dias sem risco. Se não ficar satisfeito, devolvemos 100% do seu dinheiro. Nenhuma pergunta feita.',
  },
  {
    question: 'O kit inclui suporte?',
    answer:
      'Sim! Você tem acesso à comunidade privada com outros alunos, suporte por email nos primeiros 30 dias, e acesso vitalício ao conteúdo.',
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-4 py-4 flex items-start justify-between gap-3 hover:bg-accent/5 transition-colors text-left"
      >
        <span className="font-medium text-foreground text-sm leading-snug">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          strokeWidth={1.5}
        />
      </button>
      {isOpen && (
        <div className="border-t border-border px-4 py-4 bg-accent/3">
          <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-1">Perguntas frequentes:</h2>
        <p className="text-sm text-muted-foreground">Tudo que você precisa saber antes de começar</p>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  )
}
