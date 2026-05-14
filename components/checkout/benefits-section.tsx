import { Check } from 'lucide-react'

const BENEFITS = [
  'Guia completo com 50+ prompts prontos para usar',
  'Videotutoriais passo a passo para iniciantes',
  'Templates para gerar conteúdo em 10 minutos',
  'Estratégias para monetizar com ChatGPT',
  'Acesso a comunidade privada de membros',
  'Atualizações gratuitas do conteúdo',
  'Suporte por email durante 30 dias',
  'Bônus: 5 ferramentas de IA recomendadas',
]

export function BenefitsSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-2">O que você vai receber:</h2>
        <p className="text-sm text-muted-foreground">Tudo que você precisa para começar a gerar renda com IA</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {BENEFITS.map((benefit, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-0.5 flex-shrink-0">
              <Check className="h-5 w-5 text-accent" strokeWidth={2.5} />
            </div>
            <p className="text-sm text-foreground leading-snug">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
