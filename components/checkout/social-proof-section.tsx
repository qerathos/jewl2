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
        <h2 className="text-xl font-semibold text-foreground mb-1">O que dizem nossos alunos:</h2>
        <p className="text-sm text-muted-foreground">+2.300 membros já transformaram sua renda</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {TESTIMONIALS.map((testimonial, index) => (
          <div key={index} className="border border-border rounded-lg p-4 bg-card/50">
            <StarRating rating={testimonial.rating} />
            <p className="text-sm text-foreground leading-relaxed mt-3 mb-4">
              &quot;{testimonial.text}&quot;
            </p>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-xs font-semibold text-accent">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 pt-2">
        <div className="flex -space-x-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-8 w-8 rounded-full bg-gradient-to-br from-accent to-accent/60 border-2 border-background flex items-center justify-center text-xs font-semibold text-white"
            >
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">2.300+</span> alunos confiam em nós
        </p>
      </div>
    </div>
  )
}
