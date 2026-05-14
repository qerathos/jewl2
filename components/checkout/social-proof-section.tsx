import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Ana Silva',
    role: 'Freelancer',
    text: 'Consegui gerar €500 no primeiro mês usando os prompts. Muito prático!',
    rating: 5,
  },
  {
    name: 'Carlos Mendes',
    role: 'Designer',
    text: 'Os templates economizaram horas de trabalho. Recomendo muito.',
    rating: 5,
  },
  {
    name: 'Maria Costa',
    role: 'Content Creator',
    text: 'Finalmente entendi como usar ChatGPT para monetizar meu conteúdo.',
    rating: 5,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? 'fill-accent text-accent' : 'text-muted-foreground/30'
          }`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

export function SocialProofSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">O que dizem nossos alunos:</h2>
        <p className="text-base text-muted-foreground">Pessoas reais obtendo resultados reais</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {TESTIMONIALS.map((testimonial, index) => (
          <div key={index} className="border border-border/50 rounded-lg p-5 bg-card/60 backdrop-blur-sm hover:border-accent/30 hover:bg-card/80 transition-all">
            <div className="flex items-start justify-between mb-3">
              <StarRating rating={testimonial.rating} />
              <span className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent font-semibold">
                Verificado
              </span>
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-4 italic">
              &quot;{testimonial.text}&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-white">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 border-t border-border/50">
        <div className="flex -space-x-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-10 w-10 rounded-full bg-gradient-to-br from-accent to-accent/60 border-2 border-background flex items-center justify-center text-sm font-bold text-white hover:scale-110 transition-transform"
            >
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>
        <div>
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            <span className="font-bold text-foreground">2.300+</span> alunos transformando suas vidas
          </p>
          <p className="text-xs text-accent text-center sm:text-left">Nas últimas 6 meses</p>
        </div>
      </div>
    </div>
  )
}
